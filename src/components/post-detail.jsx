/* Finally, in all its glory, the entire post.
NOTE: to show up correctly, we'll need to import the style sheet from the original source. Ouch...
NOTE: still need to show author info here - will pass it in from preview, once we figure out how to get it
NOTE: this will still require some cleanup - posts with EDD info are showing raw code
NOTE: using raw, unsanitized markup to show post - is this safe?*/
var React = require('react');
var Reflux = require('reflux');
var PostStore = require('../stores/post-store');
var Actions = require('../actions');

module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(PostStore, 'onChange')
	],
	rawMarkup: function(raw) {
		if (raw!==undefined){
			var rawMarkup = marked(raw.toString(), {sanitize: false});
	    	return { __html: rawMarkup };
		}
	    
	  },
	render: function(){
			return <div>
			<h4 dangerouslySetInnerHTML={this.rawMarkup(this.state.title.rendered)}></h4>
			<h5>{this.state.theSubtitleAuthor ? this.state.theSubtitleAuthor : this.state.theAuthor}</h5>
				
			<span dangerouslySetInnerHTML={this.rawMarkup(this.state.content.rendered)} />
				

		</div>
		
	},
	getInitialState:function(){
		return{
			title: "",
			content: "",
			theAuthor: "",
			theSubtitleAuthor: ""
		}
	}, 
	componentWillMount: function(){
		console.log("this.props: " + this.props)
		Actions.getPost(this.props.params.id);
	},
	onChange: function(event, post){
		console.log("onChange called in post-detail");
		this.setState({
			title: post.title,
			content: post.content,
			theAuthor: post.theAuthor,
			theSubtitleAuthor: post.theSubtitleAuthor
		});
	}
});