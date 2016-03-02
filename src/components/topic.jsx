/* when we receive the props, containing the category id, we go and retrieve,
from PostStore, the first 10 random posts from that category, and then render each of them
using the PostPreview component, which shows the title and excerpt properties.
*/

var React = require('react');
var PostStore = require('../stores/post-store');
var Reflux = require('reflux');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var PostPreview = require('./post-preview');

/*because we have a param with 'id' defined in Routes for this component-
we can access it with this.props.params.id

componentWillMount only gets called once - even when we click on different links and thus
send different props.id.
So we use componentWillReceiveProps, which updates every time the props are received.
*/

module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(PostStore, 'onChange')
	],
	getInitialState: function(){
		console.log("TOPIC: getInitialState");
		return{
			posts: []
		}
	},
	componentWillMount: function(){
		console.log("TOPIC: componentWillMount");
		Actions.getPosts(this.props.params.id);
	},
	componentWillReceiveProps: function(nextProps){
		console.log("TOPIC: componentWillReceiveProps");
		Actions.getPosts(nextProps.params.id);
	},
	render: function(){
		console.log("TOPIC: render");
		return <div>
		{this.renderPosts()}
		</div>
	},
	onChange: function(e, posts){
		console.log("TOPIC:onChange");
		
		this.setState({
			posts: posts
		})
	},
	renderPosts: function(){
		console.log("TOPIC:renderPosts");
		return this.state.posts.map(function(post){
			return <PostPreview key={post.id}{...post} />
		});
	}
}); 