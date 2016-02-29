var React = require('react');
var Router = require ('react-router');
var Link = Router.Link;
var Button = require('./button');


var DropdownItems = require('./dropdown-items');
var Search = require('./search');

var numTimes=0;

var categories = {
    cats: [{
        name: 'Writing',
        id: 10
      },
      {
        name: 'Essays',
        id: 15
      },
      {
        name: 'Classics',
        id: 818
      },
      {
        name: 'Poetry',
        id: 23
      },
      {
        name: 'Stories',
        id: 25
      },
      {
        name: 'Reviews',
        id: 695
      }
      ]
   
  };
var renderCount = 0;

module.exports = React.createClass({
	getInitialState: function(){
		console.log("HEADER.getInitialState")
		return {
			topics: categories.cats,
		}
	},
	render: function(){
		console.log("HEADER.RENDER");
		//console.log("header.renderCount: " + renderCount++)

		return <nav className="navbar navbar-static-top">
				<div className="container-fluid">
					<Link to="/" className = "navbar-brand">
						LitSuck
					</Link>
					<ul className = "nav navbar-nav navbar-right">
						{this.renderTopics()}
					</ul>
				</div>
				<Search />
				<DropdownItems />
			</nav>
	},
	renderTopics: function(){
		console.log("HEADER: renderTopics")
		return this.state.topics.slice(0,8).map(function(topic){
			return <li key={topic.id}>
				<Link activeClassName="active" to={"/topics/" + topic.id}>
					{topic.name}
				</Link>
			</li>
		});
	}
});