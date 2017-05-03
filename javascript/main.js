$('.icon-search').click(function () {
	$(".input-search-container").toggle("slow");
});

$('.icon-menu').click(function () {
	$('.nav-menu').toggle('slow');
});

/*SLIDER*/
$(document).ready(function () {
	$('.image-presentation').slick({
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	});
});

/*najechanie kursorem na qwidget fb*/
var timer;
$(".widget-fb-follow").on("mouseenter", function () {
	timer = setTimeout(function () {
		$(".widget-fb-follow").addClass('bolded', 500);
	}, 300);
}).on("mouseleave", function () {
	clearTimeout(timer);
	$(".widget-fb-follow").removeClass('bolded', 500);
});

/*
 najechanie kursorem na widget twittera*/
$(".widget-twitter-follow").on("mouseenter", function () {
	timer = setTimeout(function () {
		$(".widget-twitter-follow").addClass('bolded', 500);
	}, 300);
}).on("mouseleave", function () {
	clearTimeout(timer);
	$(".widget-twitter-follow").removeClass('bolded', 500);
});

/*zmiana ikonki plus na zaptaszenie po kliknięciu i na odwrót + OBRÓT*/
$('.icon-plus').rotate({
	bind: {
		click: function () {

			$(this).toggleClass('icon-plus').toggleClass('icon-ok').rotate({
				angle: 0,
				animateTo: 360,
				duration: 2000
			})
		}
	}
});

/*counting likes*/
$('.counter').each(function () {
	$(this).prop('Counter',0).animate({
		Counter: $(this).text()
	}, {
		duration: 2500,
		easing: 'swing',
		step: function (now) {
			$(this).text(Math.ceil(now));
		}
	});
});
