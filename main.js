$(document).on('ready', function() {
	
	$("#myButton1").click(function() {
		console.log("It worked!");

		$('body').append('<div>This is some text. Dont fuck around...');

	});

	$('#myButton2').click(function() {
		$('body').append('<h1>Hello</h1>');
	});

	$('#myButton3').click(function() {
$('body').append('<ul><li>list iem 1</li><li>list item 2</li><li>list item 3</li></ul>');
	});

// changes text on hover
	$('p').hover(function() {
		$(this).css('color', 'pink');
	}, function() {
		$(this).css('color', 'black');
	});

// append an exclamation point to end
	$('h1').append('!');
	$('h3').append('!');

	// confirm person wants to click that...
	$('a').click(function(e) {
		// e.preventDefault();
		var choice = confirm('Are you sure?');

		if (choice === false) {
			$(this).attr('href', '#');
			e.preventDefault();
		}
	});

	$('#myButton4').click(function() {
		$('body').append('<div class="overlay"><div class="popup"><button id="closePopup">Cancel</button></div></div>');

		$('#closePopup').click(function() {
			$('.overlay').remove();
		});
	});


});