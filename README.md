This is a React.js project which scrapes data from a WordPress site using the WP Rest API plugin. It is in a very early state - it will eventually be a mobile project built with React Native. It will eventually be run from an Express server, which will scrape multiple sites, parse the data and store it in a MongoDB database. 

You can see the work in progress here:

http://litsuck.com

By default, a random article - fiction, poetry, an essay or review - is loaded. The user can now click on a menu item to see a randomly generated list of articles from the selected genre. Click on any of these to see the full article.


Began the project with Stephen Grider's ReactStarter framework. Then:

```
	npm install

	*Installed ReactRouter:*
	sudo npm install --save react-router@1.0.3 history

	*Installed Fetch (native to Chrome) - install the polyfill to make it work in all browsers
	(Fetch also used in React Native)*
	sudo npm install --save whatg-fetch (much better than jQuery/AJAX)

	*Installed Reflux.js*
	sudo npm install --save reflux

	*Installed Lodash*
	sudo npm install --save lodash
```

Here's an event flow diagram:

http://www.gliffy.com/go/publish/10101095
