const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'aa91cad371mshcadf34f778cf57bp1fa753jsn8d69e9cfa5db',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) =>{
    cityName.innerHTML=city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then(response => {

        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    }
    )

    .catch(err => console.error(err))
}

var a;
function abc(){
    var b=document.getElementById("city").value;
    this.a=b;
    getWeather(b);
    event.preventDefault();
}
getWeather("Delhi");

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi', options)
    .then(response => response.json())
    .then(response => {

       aa.innerHTML= response.cloud_pct
       ab.innerHTML=response.temp
       ac.innerHTML= response.feels_like
       ad.innerHTML = response.humidity
       ae.innerHTML = response.min_temp
       af.innerHTML = response.max_temp
       ag.innerHTML = response.wind_speed
       ah.innerHTML = response.wind_degrees
       ai.innerHTML = response.sunrise
       aj.innerHTML= response.sunset
    }
    )
    .catch(err => console.error(err))
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=shanghai', options)
    .then(response => response.json())
    .then(response => {

       ba.innerHTML= response.cloud_pct
       bb.innerHTML=response.temp
       bc.innerHTML= response.feels_like
       bd.innerHTML = response.humidity
       be.innerHTML = response.min_temp
       bf.innerHTML = response.max_temp
       bg.innerHTML = response.wind_speed
       bh.innerHTML = response.wind_degrees
       bi.innerHTML = response.sunrise
       bj.innerHTML= response.sunset
    }
    )
    .catch(err => console.error(err))
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=london', options)
    .then(response => response.json())
    .then(response => {

       ca.innerHTML= response.cloud_pct
       cb.innerHTML=response.temp
       cc.innerHTML= response.feels_like
       cd.innerHTML = response.humidity
       ce.innerHTML = response.min_temp
       cf.innerHTML = response.max_temp
       cg.innerHTML = response.wind_speed
       ch.innerHTML = response.wind_degrees
       ci.innerHTML = response.sunrise
       cj.innerHTML= response.sunset
    }
    )
    .catch(err => console.error(err))
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=miami', options)
    .then(response => response.json())
    .then(response => {

       da.innerHTML= response.cloud_pct
       db.innerHTML=response.temp
       dc.innerHTML= response.feels_like
       dd.innerHTML = response.humidity
       de.innerHTML = response.min_temp
       df.innerHTML = response.max_temp
       dg.innerHTML = response.wind_speed
       dh.innerHTML = response.wind_degrees
       di.innerHTML = response.sunrise
       dj.innerHTML= response.sunset
    }
    )
    .catch(err => console.error(err))

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=toronto', options)
    .then(response => response.json())
    .then(response => {

       ea.innerHTML= response.cloud_pct
       eb.innerHTML=response.temp
       ec.innerHTML= response.feels_like
       ed.innerHTML = response.humidity
       ee.innerHTML = response.min_temp
       ef.innerHTML = response.max_temp
       eg.innerHTML = response.wind_speed
       eh.innerHTML = response.wind_degrees
       ei.innerHTML = response.sunrise
       ej.innerHTML= response.sunset
    }
    )
    .catch(err => console.error(err))

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=new york', options)
    .then(response => response.json())
    .then(response => {

       fa.innerHTML= response.cloud_pct
       fb.innerHTML=response.temp
       fc.innerHTML= response.feels_like
       fd.innerHTML = response.humidity
       fe.innerHTML = response.min_temp
       ff.innerHTML = response.max_temp
       fg.innerHTML = response.wind_speed
       fh.innerHTML = response.wind_degrees
       fi.innerHTML = response.sunrise
       fj.innerHTML= response.sunset
    }
    )
    .catch(err => console.error(err))
