const request = require('request');
const config = require('./config');
module.exports = {
    getWeather : function(data,callback){
        request({
                url : 'https://api.darksky.net/forecast/'+config.apiKey+'/'+data.longitude+','+data.latitude,
                json : true
            },function(err,resp,body){
            if(!err && resp.statusCode === 200){
                callback(null,body);
            }
            else{
                callback('Unable to fetch error');
            }
        });
    }
};