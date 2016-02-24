 var React = require('react');
 var Button = require('./button');
 var Reflux = require('reflux');
var Actions = require('../actions');
var PostStore = require('../stores/post-store');

 module.exports = React.createClass({
 // 	mixins: [
	// 	Reflux.listenTo(PostStore, 'onChange')
	// ],
	getInitialState: function(){
		return {
			posts: [],
			searchTerm: ''
		}
	},
    render: function() {
      return <form onChange={this.handleChange} className="input-group" id='search-form'> 
				<input  
					type="text" 
					className = "form-control" />
					<span className="input-group-btn">
						
						<Button  
							whenClicked={this.handleClick} 
							className="btn-default"
							title='Search' />
					</span>
				</form>
    },
	// onChange: function(event, posts){
	// 	console.log("onChange called in Search");
	// 	this.setState({ 
	// 		posts: posts
	// 	})
	// },
	handleChange: function(e){
		this.state.searchTerm=e.target.value;
		console.log("searchTerm: " + this.state.searchTerm);
	},
	handleClick: function(e){

		console.log("clicked the search button");
		//console.log(e.target.parentElement.parentElement.firstChild.value);
		//var searchTerm = e.target.parentElement.parentElement.firstChild.value;
		Actions.getSearchResults(this.state.searchTerm);
		
	}
  });