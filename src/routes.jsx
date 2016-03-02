/* essentially this is the "main" or entry point file - it renders the component "Main" to get things rolling
NOTE: using 'history' in Router gets rid of the shim junk url - but also makes it impossible to reload the 
page based on a particular url - need an Express server.
*/
var React = require('react');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var routerHistory = require('react-router').useRouterHistory;
var createBrowserHistory = require('history/lib/createBrowserHistory')
const history = createBrowserHistory({ queryKey: false });


var Main = require('./components/main');
var Topic = require('./components/topic'); 
var PostDetail = require('./components/post-detail');
var SearchResults = require('./components/search-results');

module.exports = (
    <Router history={history}>
        <Route  path="/" component = {Main}>
        	<Route path="/topics/:id"  component = {Topic} />
        	<Route path="posts/:id"  component = {PostDetail} />
         	<Route path="/search-results/:term"  component={SearchResults} />
        </Route>
    </Router>
)