This is a React.js project which scrapes data from a WordPress site using the WP Rest API plugin. It is in a very early state - it will eventually be a mobile project built with React Native. It will eventually be run from an Express server, which will scrape multiple sites, parse the data and store it in a Firebase database. 


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

<script src="https://www.gliffy.com/diagramEmbed.js" type="text/javascript"></script><script type="text/javascript">gliffy_did="10101095";embedGliffy();</script>
