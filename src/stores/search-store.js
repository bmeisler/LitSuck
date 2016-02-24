var Api = require('../utils/wp-rest-api');
var Reflux = require('reflux');
var Actions = require('../actions');
var _ = require('lodash');


module.exports = Reflux.createStore({
	listenables: [Actions],//if any of the Actions in actions.jsx are called, (eg 'getTopics') call that method if you have it
	
	getSearchResults: function(s){
		return Api.get('posts/?filter[s]=' + s)
			.then(function(json){
				this.searchResults = json; 
				this.triggerSearchChange();
			}.bind(this));
	},
	triggerSearchChange: function(){
		console.log("triggerSearchChange");
		this.trigger('change', this.searchResults);
	}
});