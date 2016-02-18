/* when we receive the props, containing the category id, we go and retrieve,
from PostStore, the first 10 random posts from that category, and then render each of them
using the PostPreview component, which shows the title and excerpt properties.
NOTE: need to show author and thumbnail in PostPreview
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
		return{
			posts: []
		}
	},
	componentWillMount: function(){
		//Actions.getPosts(this.props.params.id);
	},
	componentWillReceiveProps: function(nextProps){
		Actions.getPosts(nextProps.params.id);
		//console.log(nextProps.params.id);
	},
	render: function(){
		return <div>
		{this.renderPosts()}
		</div>
	},
	onChange: function(event, posts){
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