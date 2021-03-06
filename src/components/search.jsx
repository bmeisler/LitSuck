/* contains a search field and a button. On button click, makes a call to the web site via search-store for the search term.
It then loads the 'search-results' component, which receives the json from the search-store */
var React = require('react');
var Button = require('./button');
var Reflux = require('reflux');
var Actions = require('../actions');
var SearchStore = require('../stores/search-store');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

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
						<Link to={"/search-results/" + "s=" + "foo"}>
						<Button  
							whenClicked={this.handleClick} 
							className="btn-default"
							title='Search' />
							</Link>
					</span>
				</form>
    },
	onChange: function(event, posts){
		
		this.setState({ 
			posts: posts
		})
	},
	handleChange: function(e){
		console.log("handleChange called in Search");
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