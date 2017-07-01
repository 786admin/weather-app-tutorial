var request = require('request');

module.exports = {
    getInfo : function (arg,callback){
        request({
            url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodeURIComponent(arg),
            json: true
            }, (err, response, body) => {
                if(err) callback('Cannot connect to Google servers.');
                else if(body.status === "ZERO_RESULTS"){
                    callback('No results');
                }
                else if(body.status === "OK"){
                    callback(null,{
                        address : body.results[0].formatted_address,
                        longitude : body.results[0].geometry.location.lng,
                        latitude : body.results[0].geometry.location.lat
                    });
                }
  
        });
    }
};