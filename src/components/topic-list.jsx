/* the body (non-header) of the home page - on mount, sends a getTopics request to the
TopicsStore, which sends back a list of categories.
NOTE: instead of just grabbing the first 10 categories, we should hard-code the category
ids for the categories we want, as these will differ from site to site.
This logic should actually *not* be in the front-end React file at all... but is ok to get started
Each topic listed will, when clicked, randomly load up 10 posts from the selected category -
we can see this because the Link tag to property is topics/ + topicId - if we look in routes,
we see we're loading the component Topic and sending it the category id 
NOTE: this is good for a first pass, but really the home page should show a random article to
start with, and the user should use the blue buttons to choose a category and other criteria
*/


var React = require('react');
var TopicStore = require('../stores/topic-store');
var Reflux = require('reflux');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(TopicStore, 'onChange')//this compoonent listens to any event on TopicStore, then calls onChange
	],
	getInitialState: function(){
		return {
			topics: []
		}
	},
	componentWillMount: function(){
		Actions.getTopics();
	},
	render: function(){
		return <div className="list-group">
			{this.renderTopics()}
		</div>
	}, 
	renderTopics: function(){
		return this.state.topics.map(function(topic){
		 return <Link 
		 to={"topics/" + topic.id}
		 className = "list-group-item" key={topic.id}>
		 <h4>{topic.name}</h4>
		 <p>category id: {topic.id}</p>
			
		</Link>
		});
	},
	onChange: function(event, topics){//called whenever TopicStore sends an event
		this.setState(
			{topics: topics})
	}
});