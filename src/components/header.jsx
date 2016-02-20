var React = require('react');
var Router = require ('react-router');
var Link = Router.Link;

var DropdownItems = require('./dropdown-items');

var numTimes=0;

var categories = {
    cats: [{
        name: 'Writing',//what should the button be called to open/close the dropdown
        id: 10
      },
      {
        name: 'Essays',//what should the button be called to open/close the dropdown
        id: 15
      },
      {
        name: 'Classics',//what should the button be called to open/close the dropdown
        id: 818
      },
      {
        name: 'Poetry',//what should the button be called to open/close the dropdown
        id: 23
      },
      {
        name: 'Stories',//what should the button be called to open/close the dropdown
        id: 25
      },
      {
        name: 'Reviews',//what should the button be called to open/close the dropdown
        id: 695
      }
      ]
   
  };
var renderCount = 0;

module.exports = React.createClass({
	getInitialState: function(){
		return {
			topics: categories.cats 
		}
	},
	render: function(){
		console.log("header.renderCount: " + renderCount++)

		return <nav className="navbar navbar-static-top">
				<div className="container-fluid">
					<Link to="/" className = "navbar-brand">
						LitSuck
					</Link>
					<ul className = "nav navbar-nav navbar-right">
						{this.renderTopics()}
					</ul>
					
				</div>
				<div className="input-group">
				<input 
					type="text" 
					className = "form-control" />
					<span className="input-group-btn">
						<button
						 className="btn btn-default" 
						 type="button">
							Search
						</button>
					</span>
				</div>
				<DropdownItems />
			</nav>


	},
	renderTopics: function(){
		console.log("header: renderTopics")
		return this.state.topics.slice(0,8).map(function(topic){
			return <li >
				<Link activeClassName="active" to={"topics/" + topic.id}>
					{topic.name}
				</Link>
			</li>
		});
	}
});