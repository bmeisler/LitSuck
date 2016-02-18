var React = require('react');
var Router = require ('react-router');
var Reflux = require('reflux');

var Link = Router.Link;

var DropdownItems = require('./dropdown-items');

var Actions = require('../actions');
var TopicStore = require ('../stores/topic-store');

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
      }
      ]
   
  };


module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(TopicStore, 'onChange')
	],
	getInitialState: function(){
		return {
			topics: categories.cats
		}
	},
	componentWillMount: function(){
		//Actions.getTopics();
	},
	render: function(){
		return <nav className="navbar navbar-default header">
				<div className="container-fluid">
					<Link to="/" className = "navbar-brand">
						LitSuck
					</Link>
					<ul className = "nav navbar-nav navbar-right">
						{this.renderTopics()}
					</ul>
					{this.props.children}
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
	onChange: function(event, topics){
		this.setState({
			topics: topics
		})
	}, 
	renderTopics: function(){
		return this.state.topics.slice(0,8).map(function(topic){
			return <li key={topic.id}>
				<Link activeClassName="active" to={"topics/" + topic.id}>
					{topic.name}
				</Link>
			</li>
		});
	}
});