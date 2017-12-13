$( document ).ready( function() {
	
	// ANIMATIONS ON SCROLL

	// HEADER

	// $( ".shop-btn" ).addClass( "animate-1 animate-delay-a fadeInRight" );
	// $( ".schedule-btn" ).addClass( "animate-1 animate-delay-b fadeInRight" );
	// $( ".view-btn" ).addClass( "animate-1 animate-delay-c fadeInRight" );


	// CONNECT SECTION

	$( ".form-animate" ).waypoint( function( direction ) {
		$( ".form-animate" ).addClass( "animate-0-75 bounceIn" );
	}, {
		offset: "65%"
	});


	// EVOLUTION SECTION

	$( ".turbo-img" ).waypoint( function( direction ) {
		$( ".turbo-img" ).addClass( "animate-1 fadeInRight" );
	}, {
		offset: "85%"
	});

	$( ".turbo-text" ).waypoint( function( direction ) {
		$( ".turbo-text" ).addClass( "animate-1 fadeInLeft" );
	}, {
		offset: "85%"
	});

	$( ".int-img" ).waypoint( function( direction ) {
		$( ".int-img" ).addClass( "animate-1 fadeInLeft" );
	}, {
		offset: "85%"
	});

	$( ".int-text" ).waypoint( function( direction ) {
		$( ".int-text" ).addClass( "animate-1 fadeInRight" );
	}, {
		offset: "85%"
	});

	
	// FOOTER

	$( ".fa-facebook-square" ).waypoint( function( direction ) {
		$( ".fa-facebook-square" ).addClass( "animate-1 fadeInRight" );
	}, {
		offset: "85%"
	});

	$( ".fa-twitter-square" ).waypoint( function( direction ) {
		$( ".fa-twitter-square" ).addClass( "animate-1 fadeInRight" );
	}, {
		offset: "85%"
	});

	$( ".fa-youtube-square" ).waypoint( function( direction ) {
		$( ".fa-youtube-square" ).addClass( "animate-1 fadeInRight" );
	}, {
		offset: "85%"
	});

	$( ".fa-google-plus-square" ).waypoint( function( direction ) {
		$( ".fa-google-plus-square" ).addClass( "animate-1 fadeInRight" );
	}, {
		offset: "85%"
	});

} );