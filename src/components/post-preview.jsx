/* this component receieves props with all the post info. 
NOTE: need to show the thumbnail and author info here - will probably have to make
TWO more calls to do so!
When we click on the title, we open posts/ + post.id, which, as defined in routes,
will create a new component of type PostDetail, which will have the entire post
*/
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
	rawMarkup: function(raw) {
	    var rawMarkup = marked(raw.toString(), {sanitize: false});
	    return { __html: rawMarkup };
	  },
	render: function(){
		return <div><Link to={"posts/" + this.props.id}>
		 <h4 dangerouslySetInnerHTML={this.rawMarkup(this.props.title.rendered)}></h4>
		</Link>
		<span dangerouslySetInnerHTML={this.rawMarkup(this.props.excerpt.rendered)} />
		

		</div>
	}
}); 