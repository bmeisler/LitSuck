/* this component receieves props with all the post info. 
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
		return <div className="archive-content">
		<figure className="post-img-medium">
			<img src={this.props.featured_image_thumbnail_url} />
		</figure>
		<div className="clearfix">
		<Link to={"/posts/" + this.props.id}>
		 	<h4 className="archive-post-title" dangerouslySetInnerHTML={this.rawMarkup(this.props.title.rendered)}></h4>
		</Link>
		
			<h5 className="archive-author">{this.props.theSubtitleAuthor ? this.props.theSubtitleAuthor : this.props.theAuthor}</h5>
		
			<p dangerouslySetInnerHTML={this.rawMarkup(this.props.excerpt.rendered)} ></p>
		</div>
		
		</div>
	}
}); 