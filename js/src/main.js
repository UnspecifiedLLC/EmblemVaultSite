jQuery(document).ready(function($){

	$('#features .box').matchHeight({byRow: true});

	/*-------------------------------------
	Sticky Nav
	-------------------------------------*/

	var lastScrollTop = 0

	$(window).on('scroll resize', function(){
		var st = $(window).scrollTop();

		if(st > ($(window).height() / 4)){
			if(st < lastScrollTop) {
				$('body').addClass('sticky-nav');
			}else{
				$('body').removeClass('sticky-nav');
			}			
		}else{
			$('body').removeClass('sticky-nav');
		}

		lastScrollTop = st;

	}).trigger('scroll');

	$('header.main').clone().prependTo('body').addClass('clone');

	/*-------------------------------------
	What Is Emblem
	-------------------------------------*/

	$('#what-is-emblem .boxes .box').on('click', function(){
		
		if($(this).hasClass('active')){
			$('#what-is-emblem .boxes .box.active').add('#what-is-emblem .boxes.active').removeClass('active')
		}else{
			$('#what-is-emblem .boxes .box.active').add('#what-is-emblem .boxes.active').removeClass('active')
			$(this).toggleClass('active');
		}
		
		if($('#what-is-emblem .boxes .box.active').length){
			$('#what-is-emblem .boxes').addClass('active');
		}
	})

	/*-------------------------------------
	Scrolling Arrow Buttons
	-------------------------------------*/

	$('.scrolling-arrow-button a[href="#features"]').on('click', function(){
		$("html, body").animate({ scrollTop: "3500px" });
	})

	$('.scrolling-arrow-button a[href="#what-is-emblem"]').on('click', function(){
		$("html, body").animate({ scrollTop: "4800px" });
	})

	/*-------------------------------------
	Page Load
	-------------------------------------*/

	$(window).on('load', function(){
		setTimeout(function(){
			$('body').addClass('page-loaded');
		},2000);
	});

	/*-------------------------------------
	Mobile Navigation
	-------------------------------------*/

	$('.mobile-gui .burger').on('click', function(){
		if($('body').hasClass('mobile-menu-active')){
			$('body').removeClass('mobile-menu-active');
		}else{
			$('body').addClass('mobile-menu-active');
		}
	});

	/*-------------------------------------
	Intro Animation (Machine)
	-------------------------------------*/	

	// Part One: Coin enters machine and machine scans coin

	var $machine = $('.machine'),
		$doorLeft = $machine.find('.door-left .sprite'),
		coinClasses = ['litecoin', 'media', 'bitcoin', 'folder', 'ethereum'],
		classIndex = 0;

	function machine(timeOffset){

		var machineAnimation = new TimelineMax(),
			$largeCoin = $('<span class="sprite large-coin"><span class="sprite belt-line"></span></span>'),
			seekTime = timeOffset || 0,
			$emblemCoin = $('<span class="sprite emblem-coin"><svg xmlns="http://www.w3.org/2000/svg" width="37.7" height="45.2" viewBox="0 0 37.7 45.2"> <path class="shadow" d="M26.7 36.5c5.7 1.9 5.2 5.2-1.1 7.2s-16 2-21.7.1c-5.7-1.9-5.2-5.2 1.1-7.2s16-2 21.7-.1z" fill="rgba(23, 48, 79, 1)" /> <path class="st1" d="M37.6 25.2c-.5 10.6-7.6 16.9-16 14.1s-14.7-13.9-14.2-24.5c.4-10.7 7.6-17 15.9-14.1s14.8 13.8 14.3 24.5z" fill="#99772C" /> <path class="st2" d="M34.9 25.7c-.5 10.6-7.6 16.9-16 14.1s-14.7-13.8-14.3-24.5c.5-10.6 7.6-16.9 16-14.1s14.7 13.9 14.3 24.5z" fill="#D5B865" /> <path class="st3" d="M33 25.1c-.4 9.4-6.7 14.9-14 12.4s-13-12.2-12.6-21.5 6.7-14.9 14-12.4 13.1 12.1 12.6 21.5z" stroke="#EFE4C4" stroke-width="1.032" stroke-miterlimit="10" fill="none" /> <g stroke="#1A2147" stroke-width="1.185" stroke-miterlimit="10" fill="none"> <path class="st4" d="M21.9 15l-3.5-6-7.2 6.4 3.5 5.9M14.8 12.2l2 3.4M24.4 19.2l3.5 5.9-7.3 6.4-3.5-5.9M24.2 28.3l-2-3.4M24.1 24.6l3.9-3.4-6.4-11.1-3.9 3.4M24.8 15.6l-2.2 2M21.4 27l-3.9 3.4-6.5-11 3.9-3.5M14.3 24.9l2.2-2" /> <path class="st4" d="M19.4 24.2l-3-5 3.3-2.9 2.9 5z" /></g></svg></span>'),
			$doorRight = $machine.find('.door-right .sprite'),
			$beltLine = $('<span class="sprite belt-line" />');
			$platform = $machine.find('.platform'),
			$tube = $machine.find('.tube');

		machineAnimation.timeScale(1.5);

		classIndex++;

		if(classIndex >= coinClasses.length){
			classIndex=0;
		}

		$emblemCoin.appendTo($machine);
		$beltLine.appendTo($machine);
		$largeCoin.addClass(coinClasses[classIndex]).appendTo($machine);

		machineAnimation
			.to($largeCoin, 2, {x:78, y:40, delay:2, ease: Power0.easeNone})
			.to($largeCoin, 2, {x:198, y:112, delay:2, ease: Power0.easeNone})
			.to($largeCoin, 2, {x:318, y:176, delay:2, ease: Power0.easeNone})
			.to($largeCoin, 2, {x:438, y:243, delay:2, ease: Power0.easeNone})
			.to($largeCoin, 2, {x:558, y:311, delay:2, ease: Power0.easeNone})
			.to($largeCoin, 2, {x:678, y:377, delay:2, ease: Power0.easeNone})
			.add(function(){
				setTimeout(function(){
					$largeCoin.find('.belt-line').remove();
				},2000)
			})

			.add('movementTwo')
			.to($largeCoin, 2, {x:798, y:444, delay:2, ease: Power0.easeNone}, 'movementTwo')
			.set($largeCoin.find('.belt-line'), {'display': 'none'}, 'movementTwo')

			.to($doorLeft, 2, {y:-150, ease: Power0.easeNone})
			.to($largeCoin, 2, {x:918, y:514, ease: Power0.easeNone})

			.add(function(){
				machine();
			})
			
			.add('emblemAppear')
			.add('coinDrop')
			
			.to($doorLeft, 2, {y:0, ease: Power0.easeNone, onComplete:function(){
				$largeCoin.remove();

			}},'emblemAppear')

			// Part 2
			
			.set($emblemCoin, {'z-index': 7}, 'emblemAppear')
			.fromTo($emblemCoin, .25, {opacity:0, y:-5, x:-26}, {opacity:1, y:10, x:18, ease: Power0.easeNone}, 'emblemAppear')
			
			.fromTo($emblemCoin.find('.shadow'), 1, {fill:'rgba(23, 48, 79, 0)'}, {fill:'rgba(23, 48, 79, 1)'}, 'coinDrop')
			.to($emblemCoin, 1, {y:68, ease: Bounce.easeOut}, 'coinDrop')
			
			.add('doorOpen')
			.set($beltLine, {'opacity': 1}, 'doorOpen')
			.set($emblemCoin, {'z-index': 12, delay:1.2}, 'doorOpen')
			.to($doorRight, 2, {y:-150, ease: Power0.easeNone}, 'doorOpen')
			.to($emblemCoin, 2, {x:147.5, y:133, ease: Power0.easeNone}, 'doorOpen')
			.to($beltLine, 2, {x:147.5, y:84, ease: Power0.easeNone}, 'doorOpen')
			
			.to($doorRight, 2, {y:0, ease: Power0.easeNone})

			.add('doorClose')
			.to($emblemCoin, 2, {'z-index': 12, opacity:1, x:295, y:214, ease: Power0.easeNone}, 'doorClose')
			.to($beltLine, 2, {x:295, y:166, ease: Power0.easeNone}, 'doorClose')

			.add('movementThree')
			.set($beltLine, {'display': 'none', delay:3.45}, 'movementThree')
			.to($emblemCoin, 2, {x:442.5, y:298, delay:2, ease: Power0.easeNone}, 'movementThree')
			.to($beltLine, 2, {x:442.5, y:248, delay:2, ease: Power0.easeNone}, 'movementThree')

			.to($emblemCoin, 2, {x:590, y:378, delay:2, ease: Power0.easeNone})

			.add('liftCoin')
			.to($emblemCoin, 2, {y:240, ease: Power0.easeNone},'liftCoin')
			.to($platform, 2, {y:-130, ease: Power0.easeNone},'liftCoin')
			.to($tube, 1, {x:-75, y:-41, ease: Power0.easeNone})

			.add('coinSuck')
			.to($emblemCoin, 1, { x:1591, y:797, ease: Power0.easeNone, onComplete:function(){
				$emblemCoin.remove();
				$beltLine.remove();
			}},'coinSuck')

			.to($emblemCoin.find('.shadow'), .2, {fill:'rgba(23, 48, 79, 0)', x:1133, y:500, opacity: 0, ease: Power1.easeInOut},'coinSuck')
			.add('resetLiftTube')
			.to($tube, 2, {x:0, y:0, ease: Power0.easeNone},'resetLiftTube')
			.to($platform, 2, {y:0, ease: Power0.easeNone},'resetLiftTube')


		machineAnimation.seek(seekTime);
		//machineAnimation.pause();

	}

	$(window).on('load', function(){
		machine();
		machine(8);
		machine(16);
		machine(24);
		machine(32.00001);
		machine(39.99999);
		machine(50);
	})

	/*-------------------------------------
	Flickity
	-------------------------------------*/

	var $carousel = $('#interface .carousel').flickity();
	var flkty = $carousel.data('flickity');

	$('#interface .carousel').flickity();

	$('.carousel-container').addClass('settled');

	$('.slide-control.previous button').on( 'click', function() {
		$carousel.flickity('previous');
		setSlideData();
	});

	$('.slide-control.next button').on( 'click', function() {
		$carousel.flickity('next');
		setSlideData();
	});

	function setSlideData(){
		$('#interface .description div.active').removeClass('active')
		
		var current = flkty.selectedIndex + 1,
			total = flkty.cells.length,
			prev = $('.carousel-item.is-selected').prev().data('title') || $('.carousel-item:last-child').data('title'),
			next = $('.carousel-item.is-selected').next().data('title') || $('.carousel-item:first-child').data('title');

		// Set Numbers

		if(current == 1){
			$('.slide-control.previous .number').html((total) + '/' + total);
			$('.slide-control.next .number').html((current+1 ) + '/' + total);
		}else if(current == total){
			$('.slide-control.previous .number').html((current-1) + '/' + total);
			$('.slide-control.next .number').html('1' + '/' + total);
		}else{
			$('.slide-control.previous .number').html((current-1) + '/' + total);
			$('.slide-control.next .number').html((current+1 ) + '/' + total);
		}

		// Set Titles

		$('.slide-control.previous .title').html(prev);
		$('.slide-control.next .title').html(next);

		$('#interface .description div:nth-child(' + (current) + ')').addClass('active')
	}

	setSlideData();

	/*-------------------------------------
	Item Triggers
	-------------------------------------*/

	$.fn.itemTrigger = function(options) {
		var $item = $(this),
			offset;

		$(window).on('load resize', function(){
			if(options.triggerPoint == 'screenFirstQuarter'){
				offset = $item.offset().top - ($(window).height()/4);
			}

			if(options.triggerPoint == 'screenTop'){
				offset = $item.offset().top;
			}

			if(options.triggerPoint == 'screenCenter'){
				offset = $item.offset().top - ($(window).height()/2);
			}

			if(options.triggerPoint == 'inWindow'){
				offset = $item.offset().top - ($(window).height() - $item.outerHeight());
			}

			if(options.triggerPoint == 'fitsInWindow'){
				offset = $item.offset().top - ($(window).height() - ($item.outerHeight()*2));
			}
		}).trigger('resize');

		$(window).on('load scroll resize', function(){
			if($(window).scrollTop() > offset){
				if(!$item.hasClass('active')){
					$item.addClass('active');
				}
			}else if($(window).scrollTop() + $(window).height() < $item.offset().top){
				if($item.hasClass('active')){
					$item.removeClass('active');
				}
			}
		}).trigger('scroll')
	};

	$('#what-is-emblem header').itemTrigger({
		triggerPoint: 'inWindow'
	});

	/*-------------------------------------
	Feature Animation 1 (Fundable)
	-------------------------------------*/

	var fundable = new TimelineMax(),
		$ft1Coin = $('#feature-1 .coin'),
		$ft1Device = $('#feature-1 .device'),
		$ft1Tube = $('#feature-1 .tube');

	fundable
		.fromTo($ft1Device, .75, {y:85}, {y:0, delay:.5, ease: Power0.easeInOut})
		.to($ft1Tube, .75, {x:60, y:-33, ease: Power0.easeInOut})
		.add('coinAppear')
		.fromTo($ft1Coin, 1, {x:28, y:-10, opacity:0}, {x:-6, y:4, opacity:1, ease: Power1.easeInOut}, 'coinAppear')
		.add('coinLeave')
		.to($ft1Coin, 1, {x:-666, y:367, ease: Power1.easeIn}, 'coinLeave')
		.to($ft1Tube, .75, {x:0, y:0, ease: Power0.easeInOut})
		.to($ft1Device, .75, {y:85, ease: Power0.easeInOut, onComplete:function(){
			fundable.restart();
		}});

	//fundable.stop();

	/*-------------------------------------
	Feature Animation 2 (Sendable)
	-------------------------------------*/

	var sendable = new TimelineMax(),
		$ft2Coin = $('#feature-2 .coin'),
		$ft2Device = $('#feature-2 .device');

	sendable
		.fromTo($ft2Device, .75, {y:85}, {y:0, delay:.5, ease: Power0.easeInOut})
		.add('coinAppear')
		.fromTo($ft2Coin, 1, {y:0}, {y:930, ease: Power0.easeInOut}, 'coinAppear')
		.to($ft2Device, .75, {y:85, delay:.5, ease: Power0.easeInOut, onComplete:function(){
			sendable.restart();
		}});

	//sendable.stop();

	/*-------------------------------------
	Feature Animation 3 (Tradeable)
	-------------------------------------*/

	var tradeable = new TimelineMax(),
		$ft3Coin = $('#feature-3 .coin'),
		$ft3Device = $('#feature-3 .device'),
		$ft3Trading = $('#feature-3 .tube-trading');

	tradeable
		.set($ft3Coin, {opacity:0})
		.fromTo($ft3Device, .75, {y:85}, {y:0, delay:.5, ease: Power0.easeInOut})
		.set($ft3Coin, {opacity:1})
		.fromTo($ft3Coin, 1, {y:-530}, {y:50, ease: Power0.easeNone})
		.to($ft3Coin, 1.5, {y:-75, delay:1, ease: Power1.easeInOut})
		.fromTo($ft3Coin, 1, {x:0, y:-75}, {x:0, y:-60, yoyo:true, repeat:1, ease: Power1.easeInOut}, 'coinHover')
		.add('coinHover', 4)
		.add('tradingMove', 5)
		.to($ft3Trading, 1, {x:-73, y:-41, ease: Power0.easeInOut}, 'tradingMove')
		.to($ft3Coin, 1.5, {x:880, y:411, delay:.25, ease: Power1.easeInOut})
		.set($ft3Coin, {opacity:0}) 
		.to($ft3Trading, .75, {x:0, y:0, ease: Power0.easeInOut})
		.to($ft3Device, .75, {y:85, ease: Power0.easeInOut, onComplete:function(){
			tradeable.restart();
		}});

	//tradeable.stop();

	/*-------------------------------------
	Drawer Animation
	-------------------------------------*/

	var drawerClasses = ['one', 'two', 'three'];

	setInterval(function(){
		$('.what-is-emblem-3 .drawer-container').removeClass('active');

		setTimeout(function(){
			$('.what-is-emblem-3 .drawer-container.' + drawerClasses[Math.floor(Math.random()*drawerClasses.length)]).addClass('active');
		}, 20);

	}, 4000);

	/*-------------------------------------
	Detect CSS 'clip-path' (IE11)
	for tablet animation
	-------------------------------------*/

	var areClipPathShapesSupported = function () {

		var base = 'clipPath',
			prefixes = [ 'webkit', 'moz', 'ms', 'o' ],
			properties = [ base ],
			testElement = document.createElement( 'testelement' ),
			attribute = 'polygon(50% 0%, 0% 100%, 100% 100%)';

		// Push the prefixed properties into the array of properties.
		for ( var i = 0, l = prefixes.length; i < l; i++ ) {
			var prefixedProperty = prefixes[i] + base.charAt( 0 ).toUpperCase() + base.slice( 1 ); // remember to capitalize!
			properties.push( prefixedProperty );
		}

		// Interate over the properties and see if they pass two tests.
		for ( var i = 0, l = properties.length; i < l; i++ ) {
			var property = properties[i];

			// First, they need to even support clip-path (IE <= 11 does not)...
			if ( testElement.style[property] === '' ) {

				// Second, we need to see what happens when we try to create a CSS shape...
				testElement.style[property] = attribute;
				if ( testElement.style[property] !== '' ) {
					return true;
				}
			}
		}

		return false;
	};

	if ( !areClipPathShapesSupported() ) {
		$('html').addClass('no-clip-paths')
	}

	/*-------------------------------------
	Parallax Footer Image
	-------------------------------------*/

	$('.parallax').each(function(){
		var $this = $(this);
			$this.addClass('movement-modified');

		$(window).on('scroll resize', function(){
			var offset = ($this.find('.image').offset().top) - $(window).height();

			if($(window).scrollTop() > offset){
				if($(window).width() > 768){
					$this.find('.image > div').css('transform', 'translateY(' + ((-(offset - $(window).scrollTop())/10)) + 'px)')
				}
			}
		}).trigger('scroll')
	})

});