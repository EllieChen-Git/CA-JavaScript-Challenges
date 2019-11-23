//[Challenge] 1118 Exception Handling, Function Scope & Closures - JSON: https://coderacademyedu.github.io/resources/unit_json.html

//***********************************************************************/

// When we send data across the web, it can only be text.
// JSON (JavaScript Object Notation) is a format that uses human-readable text to transmit data objects consisting of key–value pairs and arrays.
// JSON is text. We can convert any JavaScript object into JSON.
// We can also convert JSON into a JavaScript object.

// Try it for yourself. Turn a JS object into JSON:
// lunch = { food: 'Pork Bun Roll', price: 10 };
// lunchJson = JSON.stringify(lunch);
//'{"food":"Pork Bun Roll","price":10}'

// Turn JSON into a JS object:
// lunchJson = '{"food":"Pork Bun Roll","price":10}';
// lunch = JSON.parse(lunchJson);


//***********************************************************************/
// Challenge
// Here's some JSON from Yahoo!'s weather API (2018-03-28): https://coderacademyedu.github.io/resources/weather.json
// 1.	Copy the JSON into your code and parse it using JSON.parse

const weather = '{"query":{"count":1,"created":"2018-03-28T00:57:28Z","lang":"en-US","results":{"channel":{"units":{"distance":"mi","pressure":"in","speed":"mph","temperature":"F"},"title":"Yahoo! Weather - Sydney, NSW, AU","link":"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-1105779/","description":"Yahoo! Weather for Sydney, NSW, AU","language":"en-us","lastBuildDate":"Wed, 28 Mar 2018 11:57 AM AEDT","ttl":"60","location":{"city":"Sydney","country":"Australia","region":" NSW"},"wind":{"chill":"77","direction":"0","speed":"11"},"atmosphere":{"humidity":"56","pressure":"1013.0","rising":"0","visibility":"16.1"},"astronomy":{"sunrise":"7:5 am","sunset":"6:56 pm"},"image":{"title":"Yahoo! Weather","width":"142","height":"18","link":"http://weather.yahoo.com","url":"http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"},"item":{"title":"Conditions for Sydney, NSW, AU at 11:00 AM AEDT","lat":"-33.856281","long":"151.020966","link":"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-1105779/","pubDate":"Wed, 28 Mar 2018 11:00 AM AEDT","condition":{"code":"32","date":"Wed, 28 Mar 2018 11:00 AM AEDT","temp":"77","text":"Sunny"},"forecast":[{"code":"32","date":"28 Mar 2018","day":"Wed","high":"83","low":"57","text":"Sunny"},{"code":"32","date":"29 Mar 2018","day":"Thu","high":"85","low":"61","text":"Sunny"},{"code":"30","date":"30 Mar 2018","day":"Fri","high":"85","low":"64","text":"Partly Cloudy"},{"code":"30","date":"31 Mar 2018","day":"Sat","high":"75","low":"66","text":"Partly Cloudy"},{"code":"30","date":"01 Apr 2018","day":"Sun","high":"90","low":"62","text":"Partly Cloudy"},{"code":"30","date":"02 Apr 2018","day":"Mon","high":"83","low":"66","text":"Partly Cloudy"},{"code":"30","date":"03 Apr 2018","day":"Tue","high":"75","low":"65","text":"Partly Cloudy"},{"code":"30","date":"04 Apr 2018","day":"Wed","high":"74","low":"63","text":"Partly Cloudy"},{"code":"30","date":"05 Apr 2018","day":"Thu","high":"81","low":"61","text":"Partly Cloudy"},{"code":"34","date":"06 Apr 2018","day":"Fri","high":"77","low":"62","text":"Mostly Sunny"}],"guid":{"isPermaLink":"false"}}}}}}'

let weatherObject = JSON.parse(weather);


// 2.	Log the sunrise and sunset dates
// let sunriseSunsetTimes = weatherObject.query.results.channel.astronomy;
// console.log(sunriseSunsetTimes);

// 3.	Log the forecast for the week, make it look nice
// 4.	Temperatures are in fahrenheit, fix this with a fahrenheitToCelcius method.
let forcast = weatherObject.query.results.channel.item.forecast;
let date, text, high, low;
let fahrenheitToCelcius = function(x){
    return parseFloat(((x - 32) * 5 /9).toFixed(1));
}

for (i of forcast){
    date = i.date;
    text = i.text;
    high = fahrenheitToCelcius(i.high);
    low = fahrenheitToCelcius(i.low);
    // console.log(`${date} is forecasted as ${text}, with temperature of ${low} - ${high} Celcius.`);
}


//***********************************************************************/
// Beast Mode
// 1. The sunrise time is missing a zero. Create a method to fix this. E.g:
// Input: 7:5 AM, output: 7:50AM
// Input: 7:50 AM, output: 7:50AM

let sunriseSunsetTimes = weatherObject.query.results.channel.astronomy;
let sunrise = weatherObject.query.results.channel.astronomy.sunrise;
let sunset = weatherObject.query.results.channel.astronomy.sunset;

let append0 = function(y){
    if(y[3] === " "){
        // let yWith0 = y.slice(0, 3) + "0" + y.slice(3);
        let yWith0 = y.substring(0, 3) + "0" + y.substring(3);
        return yWith0;
    } 
}

console.log(append0(sunrise), sunset);

//***********************************************************************/
// Beast Mode++
// Figure out a way to get the current weather from Yahoo! weather in your browser.
// 1.	Hint 1: Get a brief understanding of CORS (a common interview question)
// 2.	Hint 2: Get a brief understanding of JSONP (a common interview question)
// 3.	Hint 3: Yahoo! Weather API & Demo: https://developer.yahoo.com/weather/
// Got it? now use HTML elements to make it look nice!



//***********************************************************************/
// Methods Used:
// .parseFloat
// .toFixed()
// .slice
// .substring