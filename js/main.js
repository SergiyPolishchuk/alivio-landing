$(function () {

  $('.video__play-btn').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

      $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('active');
    });

});