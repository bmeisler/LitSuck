/* essentially this is the "main" or entry point file - it renders the component "Main" to get things rolling*/
var React = require('react');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main');
var Topic = require('./components/topic'); 
var PostDetail = require('./components/post-detail');
var SearchResults = require('./components/search-results');

module.exports = (
    <Router>
        <Route  path="/" component = {Main}>
        	<Route path="topics/:id" component = {Topic} />
        	<Route path="posts/:id" component = {PostDetail} />
         	<Route path="search-results/:posts" component={SearchResults} />
        </Route>
    </Router>
)