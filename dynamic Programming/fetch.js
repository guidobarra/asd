function getWeather(woeid) {
    let url = "https://www.metaweather.com/api/location/"
    let urlCross = ""
    const fetch = require('node-fetch')
    fetch(`${urlCross}${url}${woeid}/`)
    .then( result => {
        //console.log(result);
        return result.json();
    }).then( data => {
        //console.log(data)
        const today = data.consolidated_weather[0];
        console.log(
            `Temperatures in ${data.title} stay betwenn ${today.min_temp} and ${today.max_temp}`);
    }).catch( error => { console.log(error)});
}

getWeather(44418);
getWeather(2487956);