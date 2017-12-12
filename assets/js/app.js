$( document ).ready( function() {

	// BUTTON CLICK SCROLLING

	// Scroll To Top
	$( ".scroll-to-top" ).click( function() {
		
		$( "html, body" ).animate( { scrollTop: $( "#home" ).offset().top }, 1000 );

	});
	
	// Proficiencies
	$( ".scroll-to-proficiencies" ).click( function() {
		
		$( "html, body" ).animate( { scrollTop: $( "#proficiencies" ).offset().top }, 1000 );

	});

	// UI/UX
	$( ".scroll-to-ui-ux" ).click( function() {
		
		$( "html, body" ).animate( { scrollTop: $( "#ui-ux" ).offset().top }, 1000 );

	});

	// JavaScript
	$( ".scroll-to-javascript" ).click( function() {
		
		$( "html, body" ).animate( { scrollTop: $( "#javascript" ).offset().top }, 1000 );

	});

	// Education & Certificates
	$( ".scroll-to-certificates" ).click( function() {
		
		$( "html, body" ).animate( { scrollTop: $( "#certificates" ).offset().top }, 1000 );

	});

	// About
	$( ".scroll-to-about" ).click( function() {
		
		$( "html, body" ).animate( { scrollTop: $( "#about" ).offset().top }, 1000 );

	});

	// Connect
	$( ".scroll-to-connect" ).click( function() {
		
		$( "html, body" ).animate( { scrollTop: $( "#connect" ).offset().top }, 1000 );

	});

	// ANIMATIONS ON SCROLL

	// Omnifood
	$( "#omnifood" ).waypoint( function( direction ) {
		$( "#omnifood" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "85%"
	});
	// We actually aren't using "direction" in this case, because this animation will only happen once.

	$( "#omnifood .mini-logo" ).waypoint( function( direction ) {
		$( "#omnifood .mini-logo-a").addClass( "animate-0-75 fadeInRight");
		$( "#omnifood .mini-logo-b").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( "#omnifood .mini-logo-c").addClass( "animate-0-75 animate-delay-b fadeInRight");
	}, {
		offset: "95%"
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

	$( "#connect-linkedin" ).waypoint( function( direction ) {
		$( "#connect-linkedin" ).addClass( "animate-1 bounceInUp" );
	}, {
		offset: "85%"
	});

	$( "#connect-resume" ).waypoint( function( direction ) {
		$( "#connect-resume" ).addClass( "animate-1 bounceInUp" );
	}, {
		offset: "85%"
	});

} );