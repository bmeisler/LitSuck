ReactStarter
====

Use this as a starting point for working on chapters of the [Build Web Apps with React JS and Flux](https://www.udemy.com/learn-and-understand-reactjs/) course on Udemy.com.

---

###Getting Started###

There are two methods for getting started with this repo.

####Familiar with Git?#####
Checkout this repo, install dependencies, then start the gulp process with the following:

```
	> git clone https://github.com/StephenGrider/ReactStarter.git
	> cd ReactStarter
	> npm install
	> gulp
```

####Not Familiar with Git?#####
Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
	> npm install
	> gulp
```


After downloading installing:

Install ReactRouter:
sudo npm install --save react-router@1.0.3 history

Install Fetch (native to Chrome) - install the polyfill to make it work in all browsers
Fetch also used in React Native
sudo npm install --save whatg-fetch (much better than jQuery/AJAX)

Install Reflux.js
sudo npm install --save reflux


GOTCHA:

v4/lecture 3
topics-list:

I had to do

this.setState({
					topics: data
				})

				instead of

				this.setState({
					topics: data.data
				})

AND when rendering, I couldn't do just:

{topic}

I had to do

{topic.name}

FOR GETTING POSTS INSTEAD OF CATEGORIES:

topic.title.rendered} - {topic.id}
AND topic.content.rendered for post content

WHEN BUILDING UP QUERIES TO THE WP REST API:
built using the same names as regular WP-queries, eg, to get 10 random posts from a category by id:

<?php $recent = new WP_Query("cat=15&showposts=10&orderby=rand"); while($recent->have_posts()) : $recent->the_post();?>
			<a href="<?php the_permalink() ?>" rel="bookmark"><img src="<?php echo get_post_meta($post->ID, "Thumbnail", true); ?>" alt="<?php echo get_post_meta($post->ID, "Theme Name", true); ?> thumbnail" /></a>
			<?php endwhile; ?>

we pass this to the json plugin:

www.sensitiveskinmagazine.com/wp-json/wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=10&filter[cat]=15