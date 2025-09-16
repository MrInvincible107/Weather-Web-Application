// Open-Meteo: no API key required
const GEO_URL = 'https://geocoding-api.open-meteo.com/v1/search?count=1&language=en&format=json&name=';
const WX_URL  = 'https://api.open-meteo.com/v1/forecast';

// dom helper
const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = (v ?? 'N/A'); };

function toTime(s) {
  // Open-Meteo returns ISO times; show local time nicely
  if (!s) return 'N/A';
  return new Date(s).toLocaleTimeString();
}

async function geocode(city) {
  const r = await fetch(GEO_URL + encodeURIComponent(city));
  if (!r.ok) throw new Error('Geocoding failed');
  const j = await r.json();
  if (!j.results || !j.results.length) throw new Error('City not found');
  const { latitude, longitude, name, country } = j.results[0];
  return { lat: latitude, lon: longitude, label: `${name}${country ? ', ' + country : ''}` };
}

async function getWeather(city) {
  try {
    const { lat, lon, label } = await geocode(city);
    set('cityName', label);

    // current + daily min/max + sunrise/sunset
    const params = new URLSearchParams({
      latitude: lat,
      longitude: lon,
      current: 'temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,wind_direction_10m,cloud_cover',
      daily: 'temperature_2m_max,temperature_2m_min,sunrise,sunset',
      timezone: 'auto'
    });

    const res = await fetch(`${WX_URL}?${params.toString()}`);
    const data = await res.json();
    if (!res.ok) throw new Error(JSON.stringify(data));

    const c = data.current || {};
    const d = (data.daily && data.daily.time && data.daily.time.length) ? data.daily : null;
    const i = 0; // today

    // top cards
    set('temp', c.temperature_2m);
    set('feels_like', c.apparent_temperature);
    set('humidity', c.relative_humidity_2m);
    set('cloud_pct', c.cloud_cover);                 // cloud cover in %
    set('wind_speed', c.wind_speed_10m);
    set('wind_degrees', c.wind_direction_10m);

    set('min_temp', d ? d.temperature_2m_min[i] : 'N/A');
    set('max_temp', d ? d.temperature_2m_max[i] : 'N/A');
    set('sunrise',  d ? toTime(d.sunrise[i]) : 'N/A');
    set('sunset',   d ? toTime(d.sunset[i])  : 'N/A');
  } catch (e) {
    console.error(e);
    ['temp','feels_like','humidity','cloud_pct','wind_speed','wind_degrees','min_temp','max_temp','sunrise','sunset']
      .forEach(id => set(id, 'N/A'));
  }
}

async function fillRow(prefix, city) {
  try {
    const { lat, lon } = await geocode(city);
    const params = new URLSearchParams({
      latitude: lat,
      longitude: lon,
      current: 'temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,wind_direction_10m,cloud_cover',
      daily: 'temperature_2m_max,temperature_2m_min,sunrise,sunset',
      timezone: 'auto'
    });
    const res = await fetch(`${WX_URL}?${params.toString()}`);
    const d = await res.json();
    if (!res.ok) throw new Error(JSON.stringify(d));

    const c = d.current || {};
    const day = d.daily;
    const i = 0;

    const S = (s, v) => set(prefix + s, v);
    S('a', c.cloud_cover);
    S('b', c.temperature_2m);
    S('c', c.apparent_temperature);
    S('d', c.relative_humidity_2m);
    S('e', day.temperature_2m_min[i]);
    S('f', day.temperature_2m_max[i]);
    S('g', c.wind_speed_10m);
    S('h', c.wind_direction_10m);
    S('i', toTime(day.sunrise[i]));
    S('j', toTime(day.sunset[i]));
  } catch (e) {
    console.error('Row failed:', city, e);
    ['a','b','c','d','e','f','g','h','i','j'].forEach(s => set(prefix + s, 'N/A'));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const cityInput = document.getElementById('city');
  form?.addEventListener('submit', (ev) => {
    ev.preventDefault();
    getWeather(cityInput.value.trim());
  });

  // initial + table
  getWeather('Delhi');
  const rows = [
    ['b','Shanghai'],
    ['a','Delhi'],
    ['c','London'],
    ['d','Miami'],
    ['e','Toronto'],
    ['f','New York']
  ];

  // throttle to be polite to the API
  (async () => {
    for (const [p, c] of rows) {
      await fillRow(p, c);
      await new Promise(r => setTimeout(r, 400));
    }
  })();
});
