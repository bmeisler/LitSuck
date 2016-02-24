/* when we receive the props, containing the category id, we go and retrieve,
from PostStore, the first 10 random posts from that category, and then render each of them
using the PostPreview component, which shows the title and excerpt properties.
NOTE: need to show author and thumbnail in PostPreview
*/

var React = require('react');
var SearchStore = require('../stores/search-store');
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
		Reflux.listenTo(SearchStore, 'onChange')
	],
	getInitialState: function(){
		return{
			posts: []
		}
	},
	componentWillMount: function(){
		Actions.getPosts(this.props.params.id);
	},
	componentWillReceiveProps: function(nextProps){
		console.log("topic: received props");
		Actions.getPosts(nextProps.params.id);
		//Actions.getRecentPosts(nextProps.params.id);
		//console.log(nextProps.params.id);
	},
	render: function(){
		return <div>
		<h2>Search results</h2>
		{this.state.posts.length!==0 ? this.renderPosts() : 'No results found.'}

		</div>
	},
	onChange: function(event, posts){
		console.log("Search Results:onChange");
		this.setState({
			posts: posts
		})
	},
	renderPosts: function(){
			return this.state.posts.map(function(post){
				return <PostPreview key={post.id}{...post} />
			});
	}
}); 