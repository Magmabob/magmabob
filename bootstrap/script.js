$('#click-me').click(function() {
	
	console.log('OUCH!!'); // Output message to the console

	// Toggle btn-success and btn-primary classes on each click
	$(this).toggleClass('btn-success').toggleClass('btn-primary');

});

// Save's reference to Card image to variable
var $cardImg = $('.card-img-top');
// Save's reference to randomize button to variable
var $randomBtn = $('#random');

// Creates listener for image load event
$cardImg.on('load', function() {

	console.log('Image loaded'); // Output message to the console

	$randomBtn.removeAttr('disabled'); // Enables button by removing 'disabled' attribute

});

// Creates listener for button click event
$randomBtn.click(function() {

	console.log('Getting new image'); // Output message to the console
	
	$randomBtn.attr('disabled','disabled'); // Disables button by adding 'disabled' attribute and setting is value to 'disabled'
	
	// Changes the Card image source
	// Adds a timestamp to url to prevent caching
	$cardImg.attr('src','https://placem.at/places?w=318&h=180&random=1&' + (new Date()).getTime()); 

});

$('#get-map-data').on('click', function() {
	$.getJSON("http://feeds.illinoisstate.edu/map/api/locations/ou?callback=?")
		
		.done(function(data) {

			console.log(data);
			var html = "<h2>" + data.name + "</h2>";
			html += "<h6>" + data.address + "</h6>";
			html += data.longdesc;
			$('#ajax').html(html);

		});

});
