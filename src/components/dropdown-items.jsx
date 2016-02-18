var React= require ('react');

var Dropdown = require('./dropdown');

var options = {
    buttonData: [{
        title: 'Choose a genre',//what should the button be called to open/close the dropdown
        items: [
        'Fiction',
        'Poetry',
        'Essays',
        'Reviews',
        'All Writing'
        ]
      },
    {
    title: 'Choose a time',//what should the button be called to open/close the dropdown
    items: [
    '2 minutes or less',
    '5 minutes or less',
    '10 mintues or less',
    'More than 10 minutes'
    ]
},
{
    title: 'Choose a date',//what should the button be called to open/close the dropdown
    items: [
    'Most recent',
    'Oldest',
    'A mix of old and new'
    ]
}]
  };

module.exports = React.createClass({
	getInitialState: function(){
			return {
				text: ''
			}
		},
	render: function(){
		
		return <div className="col-md-8">

				<div className="col-md-2">
					<Dropdown items={options.buttonData[0].items} title = {options.buttonData[0].title}/>
				</div>
				<div className="col-md-2 col-md-offset-1">
					<Dropdown items={options.buttonData[1].items} title = {options.buttonData[1].title}/>
				</div>
				<div className="col-md-2 col-md-offset-1">
					<Dropdown items={options.buttonData[2].items} title = {options.buttonData[2].title}/>
				</div>
			</div>

			

			

	}
});