const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const request = require('request');
const argv = yargs
    .options({
        a : {
            describe : "Input address",
            demand : true,
            alias : 'address',
            string : true
        }
    })
    .help()
    .alias('help','h')
    .argv;

geocode.getInfo(argv.a,function(err,results){
    if(err) console.log(err);
    else{
        console.log(results.address);
        weather.getWeather(results,function(err,data){
            if(err) console.log(err);
            else{
                console.log(`It is ${data.currently.temperature} but it feels like ${data.currently.apparentTemperature}`);
            }
        });
    }
});
