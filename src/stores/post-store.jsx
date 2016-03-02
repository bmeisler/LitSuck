/* makes the various calls to the web site to get random posts in a category, get recent posts, get a single random post
or get a single post based on its individual id*/
var Api = require('../utils/wp-rest-api');
var Reflux = require('reflux');
var Actions = require('../actions');
var _ = require('lodash');

var x

module.exports = Reflux.createStore({
	listenables: [Actions],//if any of the Actions in actions.jsx are called, (eg 'getTopics') call that method if you have it
	getPosts: function(topicId){
		return Api.get('posts/?filter[orderby]=rand&filter[posts_per_page]=10&filter[cat]=' + topicId)
			.then(function(json){
				this.posts = json; 
				this.triggerChange() 
			}.bind(this));
	},
	getRecentPosts: function(topicId){
		return Api.get('posts/?filter[posts_per_page]=10&filter[cat]=' + topicId)
			.then(function(json){
				this.posts = json; 
				this.triggerChange();
			}.bind(this));
	},
	getRandomPost: function(topicId){
		return Api.get('posts/?filter[orderby]=rand&filter[posts_per_page]=1&filter[cat]=10')
			.then(function(json){
				this.randomPost = json[0]; 
				this.triggerRandomPostChange();
			}.bind(this));
	},
	getPost: function(id){
		console.log("get post with id: " + id);
		return Api.get('posts/' + id)
			.then(function(json){
				this.post = json;
				console.log(this.post);
				
				this.triggerPostChange();
			}.bind(this));
	},
	find: function(id){
		console.log("find post with id: " + id);

		var post = _.find(this.posts, {'id': id});
		console.log(post);
		if(post){
			return post
		}else{
			this.getPost(id);
			return null
		}
	},
	triggerChange: function(){
		console.log("STORE: triggerChange");
		this.trigger('change', this.posts);//trigger is a method provided by Reflux
	}, 
	triggerPostChange: function(){
		console.log("triggerPostChange");
		this.trigger('change', this.post);
	},
	triggerRandomPostChange: function(){
		console.log("triggerRandomPostChange");
		this.trigger('change', this.randomPost);
	},
	triggerSearchChange: function(){
		console.log("triggerSearchChange");
		this.trigger('change', this.searchResults);
	}
});