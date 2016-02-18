/* the file that kicks it all off, by rendering Routes - look there next!*/

var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./routes');
var Api = require('./utils/wp-rest-api');



ReactDOM.render(Routes , document.querySelector('.container'));
