/* Home Page /home/ */
	
	$(document).ready(function(){
		if ($(window).width() > 991 ) {
			const banner = document.getElementById('banner');
			const glow = document.getElementById('glow');

			banner.addEventListener('mousemove', (e) => {
				const rect = banner.getBoundingClientRect();
				const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
				const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
				glow.style.setProperty('--mx', x + '%');
				glow.style.setProperty('--my', y + '%');
			});

			banner.addEventListener('mouseenter', () => {
				glow.style.opacity = '1';
			});

			banner.addEventListener('mouseleave', () => {
				glow.style.opacity = '0';
			});
		}
		
		// END Script pentru homepage testing
		$(".mobileItem1").addClass("active");
		
		if ($(window).width() > 767 ) {
			
			$(".ajax").colorbox({
				maxWidth:"760",
				scrolling: false, 
				onComplete : function() { 
					$(this).colorbox.resize(); 
				}
			});
		}
		
		if ($(window).width() < 767 ) {
			
			$(".ajax").colorbox({
				maxWidth:"90%",
				scrolling: false, 
				onComplete : function() { 
					$(this).colorbox.resize(); 
				}
			});
			
			jQuery(window).resize(function() {
				jQuery.colorbox.resize({width:"90%"});
			});
			
		}
	});
	
	$(window).on('resize',function(){
		
		if ($(window).width() > 991 ) {
			const banner = document.getElementById('banner');
			const glow = document.getElementById('glow');

			banner.addEventListener('mousemove', (e) => {
				const rect = banner.getBoundingClientRect();
				const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
				const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
				glow.style.setProperty('--mx', x + '%');
				glow.style.setProperty('--my', y + '%');
			});

			banner.addEventListener('mouseenter', () => {
				glow.style.opacity = '1';
			});

			banner.addEventListener('mouseleave', () => {
				glow.style.opacity = '0';
			});
		}
		
		if ($(window).width() > 767 ) {
			
			$(".ajax").colorbox({
				maxWidth:"760",
				scrolling: false, 
				onComplete : function() { 
					$(this).colorbox.resize(); 
				}
			});
		}
		
		if ($(window).width() < 767 ) {
			
			$(".ajax").colorbox({
				maxWidth:"90%",
				scrolling: false, 
				onComplete : function() { 
					$(this).colorbox.resize(); 
				}
			});
			
			jQuery(window).resize(function() {
				jQuery.colorbox.resize({width:"90%"});
			});
		}
		
	});
	
	function runNewSameHeights() {
		newSameHeight('.section3 .flexBoxTitle');
		newSameHeight('.section3 .flexBoxDescription');
		
		/* newSameHeight('.section5 .contentItem'); */
		
		newSameHeight('.section6 .flexContainerBox .flexBoxTitle');
		newSameHeight('.section6 .flexContainerBox .flexBoxDescription');

		newSameHeight('.section7 .flexBoxTitle');
		newSameHeight('.section7 .flexBoxDescription');
	}

	document.addEventListener('DOMContentLoaded', function() {
		setTimeout(runNewSameHeights, 100);
	});	

	window.addEventListener('load', runNewSameHeights);
	window.addEventListener('resize', runNewSameHeights);
	
	/* START Embed VIDEO */

	var player;
	var done = false;
	var ytApiLoaded = false;

	document.querySelector('.introPagePlayBox').addEventListener('click', function() {
		document.querySelector('.wrapVideoBannerVideo').classList.add("load");
		initPlayer();
	});

	document.getElementById('closeVideo').addEventListener('click', function() {
		// Opreste video
		if (player && typeof player.stopVideo === 'function') {
			player.stopVideo();
		}

		// Ascunde elementele
		document.getElementById('video').classList.remove('active');
		document.querySelector('.wrapVideoBannerVideo').classList.remove('active');

		// Reseteaza player-ul si flag-ul
		player = null;
		done = false;

		// Curata iframe-ul pentru urmatoarea initializare
		document.getElementById("linkFullBox").innerHTML = "<img class='imgResponsive center-block' src='/resources/en/site_pages/homepage-img-video.png' alt='2Checkout payments'>";
	});

	function initPlayer() {
		// Reseteaza containerul
		document.getElementById("linkFullBox").innerHTML = "<div id='player'></div>";

		if (!ytApiLoaded) {
			// Prima data - incarca API-ul YouTube
			var tag = document.createElement('script');
			tag.src = "https://www.youtube.com/iframe_api";
			var firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
			ytApiLoaded = true;
		} else {
			// API-ul e deja incarcat, cream player-ul direct
			createPlayer();
		}
	}

	/* Apelata automat de YouTube API la prima incarcare */
	function onYouTubeIframeAPIReady() {
		createPlayer();
	}

	function createPlayer() {
		player = new YT.Player('player', {
			height: '388px',
			width: '100%',
			videoId: '2tJz42k1CA4',
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
			},
			playerVars: { rel: 0, showinfo: 0, ecver: 2 }
		});
	}

	function onPlayerReady(event) {
		event.target.playVideo();
	}

	function onPlayerStateChange(event) {
		if (event.data == YT.PlayerState.PLAYING && !done) {
			done = true;
			document.querySelector('.wrapVideoBannerVideo').classList.replace("load", "active");
			document.getElementById('video').classList.add('active');
		}
	}

	function stopVideo() {
		if (player) player.stopVideo();
	}

	/* END Embed VIDEO */
