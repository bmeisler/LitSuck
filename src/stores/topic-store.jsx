var Api = require('../utils/wp-rest-api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
	listenables: [Actions],//if any of the Actions in actions.jsx are called, (eg 'getTopics') call that method if you have it
	getTopics: function(){
		return Api.get('categories/')
			.then(function(json){
				this.topics = json; 
				this.triggerChange();
			}.bind(this));
	},
	triggerChange: function(){
		this.trigger('change', this.topics);//trigger is a method provided by Reflux
	}
});