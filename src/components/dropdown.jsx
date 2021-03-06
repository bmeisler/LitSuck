var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
	handleClick: function(){
 		this.setState({open: !this.state.open})
 	},
 	getInitialState: function(){
 		return {open: false}
 	},
 	handleItemClick: function(item){
 		this.setState({
 			open: false,
 			itemTitle: item
 		})
 	},
	render:function(){
		// console.log(this.props.items[0]);

		// console.log(this.props.title);

		var list = this.props.items.map(function(item){
			return <ListItem 
				item={item} 
				key={item}
				whenItemClicked={this.handleItemClick} 
				className={this.state.itemTitle=== item ? "active" : "" }/>
		}.bind(this));

		return <div className = "dropdown">
			<Button 
				whenClicked={this.handleClick} 
				className="btn-primary"
				title={this.props.title} 
				subTitleClassName="caret"/>

				<ul className={"dropdown-menu " + (this.state.open ? "show" : "")}>{list}</ul>
		</div>
		
	}
})