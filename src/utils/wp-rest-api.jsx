var Fetch = require('whatwg-fetch');
var rootUrl = "http://www.sensitiveskinmagazine.com/wp-json/wp/v2/";
var apiKey = 'oathplugin';//NOTE: don't post this here...

module.exports = window.api = {
	get: function(url){
		return fetch(rootUrl + url, {
			headers:{
				//'Authorization': 'Client-ID ' + apiKey
				//'Access-Control-Allow-Origin': '*'
			}
		})
		.then(function(response){
			return response.json()
		})
	}
};

//Any file should be able to call Api.get('author')etc
