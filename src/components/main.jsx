/* the Home page, if you will. What is initally rendered by the routes.
This component instantiates the Header (with navigation, search and buttons)
and TopicList - a list of categories */
var React = require('react');
var Header = require('./header');
var TopicList = require('./topic-list');

module.exports = React.createClass({
	render: function(){
		return <div>
			<Header />
			{this.content()}
			
		</div>
	},
	content: function(){
		if(this.props.children){
			return this.props.children
		}else{
			return <TopicList />
		}
	}
}); 