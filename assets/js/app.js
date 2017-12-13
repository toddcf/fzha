$( document ).ready( function() {
	
	// ANIMATIONS ON SCROLL

	// HEADER

	// $( "#omnifood" ).waypoint( function( direction ) {
	// 	$( "#omnifood" ).addClass( "animate-1 fadeInUp" );
	// }, {
	// 	offset: "85%"
	// });
	// We actually aren't using "direction" in this case, because this animation will only happen once.

	$( "#shop" ).waypoint( function( direction ) {
		$( "#shop").addClass( "animate-1 animate-delay-a fadeInRight");
		$( "#schedule").addClass( "animate-1 animate-delay-b fadeInRight");
		$( "#view").addClass( "animate-1 animate-delay-c fadeInRight");
	}, {
		offset: "85%"
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

	
	// CONNECT SECTION
	$( "#connect-github" ).waypoint( function( direction ) {
		$( "#connect-github" ).addClass( "animate-1 bounceInUp" );
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