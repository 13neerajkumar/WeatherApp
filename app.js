const weatherApi={
    api:"http://api.openweathermap.org/data/2.5/weather",
    key:"d0b91f7000a77619680ee45d2e797c5d"
}

const inputtxt=document.getElementById('input');

inputtxt.addEventListener('keypress',(event)=>{
    if(event.keyCode == 13){
        console.log(inputtxt.value);
        getWeather(inputtxt.value);
        document.getElementById('data_div').style.display="block";
    }
});

function getWeather(city){
    fetch(`${weatherApi.api}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather=>{
        return weather.json();
    }).then(showWeather);
}

function showWeather(weather){
    console.log(weather);

    let cityname=document.getElementById('city_div');
    cityname.innerText=`${weather.name},${weather.sys.country}`;

    let date=document.getElementById('date_div');
    let todayDate=new Date();
    date.innerText=dateManage(todayDate);

    let temp=document.getElementById('temp_div');
    temp.innerText=`${Math.round(weather.main.temp)}\u00B0C`;

    let status=document.getElementById('status_div');
    status.innerText=`${weather.weather[0].main}`;

    let minmax=document.getElementById('min_max_div');
    minmax.innerText=`${Math.round(weather.main.temp_min)}\u00B0C / ${Math.round(weather.main.temp_max)}\u00B0C`;
    
     if(status.textContent=='Clear'){
        document.body.style.backgroundImage="url('clear.jpg')";
    }
    else if(status.textContent=='Clouds'){
        document.body.style.backgroundImage="url('clouds.jpg')";
    }
    else if(status.textContent=='Haze'){
        document.body.style.backgroundImage="url('haze.jpg')";
    }
    else if(status.textContent=='Rain'){
        document.body.style.backgroundImage="url('rain.jpg')";
    }
    else if(status.textContent=='Snow'){
        document.body.style.backgroundImage="url('snow.jpg')";
    }
    else if(status.textContent=='Thunderstrom'){
        document.body.style.backgroundImage="url('thunderstrom.jpg')";
    }
    else{
        document.body.style.backgroundImage="url('umbrela.jpg')";
    }
}

function dateManage(dateArg){

    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];

    let year=dateArg.getFullYear();
    let month=months[dateArg.getMonth()];
    let date=dateArg.getDate();
    let day=days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}


