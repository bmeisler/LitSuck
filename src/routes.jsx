/* essentially this is the "main" or entry point file - it renders the component "Main" to get things rolling*/
var React = require('react');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var routerHistory = require('react-router').useRouterHistory;
var createBrowserHistory = require('history/lib/createBrowserHistory')
const history = createBrowserHistory({ queryKey: false });
 
//var appHistory = routerHistory(createBrowserHistory)({ queryKey: false });


var Main = require('./components/main');
var Topic = require('./components/topic'); 
var PostDetail = require('./components/post-detail');
var SearchResults = require('./components/search-results');
//add 'history={history}' to <Router> to get rid of shim/junk url - unfortunately, only works with localhost/node server!
//doesn't work on evili.com w/o a server. Ouch.
module.exports = (
    <Router >
        <Route  path="/" component = {Main}>
        	<Route path="/topics/:id"  component = {Topic} />
        	<Route path="/posts/:id"  component = {PostDetail} />
         	<Route path="/search-results/:term"  component={SearchResults} />
        </Route>
    </Router>
)