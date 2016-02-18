var React = require('react');

module.exports = React.createClass({
	handleClick: function(){
		this.props.whenItemClicked(this.props.item);
		console.log("I was clicked");
	},
	render: function(){
		return <li className={this.props.className}>
			<a onClick={this.handleClick}>{this.props.item}</a>
		</li>
	}
})