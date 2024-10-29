var $ = jQuery.noConflict();

/* Script on ready
------------------------------------------------------------------------------*/
$(document).ready(function () {

    /*Fullpage script*/
    /*start*/
    var myFullpage = new fullpage('#fullpage', {
        verticalCentered: true,
        anchors: ['home', 'experience', 'contribution', 'impact', 'contact', 'footer'],
        menu: '#menu',
        licenseKey: 'C5F89390-5AB04A29-92799913-B72755E9',
        onLeave: function (origin, destination, direction) {
            if (direction == 'up') { }
            if (direction == 'down') {
                if (destination.index == 1) {
                    $('.main-header').addClass('hide');
                }
                setTimeout(function () {
                    $('.section svg').css('display', 'none');
                }, 200)
            }
        },
        afterLoad: function (origin, destination, direction) {
            if (direction == 'down') {
                if ($('section.active').hasClass('white-cell')) {
                    $('.main-header').addClass('color-change');
                } else {
                    $('.main-header').removeClass('color-change');
                }
                setTimeout(function () {
                    $('.section svg').css('display', 'block');
                }, 500)
                svg_animation();
            }
            if (direction == 'up') {
                if ($('section.active').hasClass('white-cell')) {
                    $('.main-header').addClass('color-change');
                } else {
                    $('.main-header').removeClass('color-change');
                }
            }
            menu_loop();
            if (destination.index == 0) {
                $('.main-header').removeClass('hide');
                $('.hamburger').removeClass('hide');
                $('.navigation ul li').eq(0).addClass('active');
                $('#fp-nav ul li').eq(0).addClass('active');
                $('.section [data-aos]').removeClass("aos-animate");
            }
            if (destination.index == 1) {
                $('.main-header').addClass('hide');
                $('.hamburger').addClass('hide');
                $('.navigation ul li').eq(1).addClass('active');
                $('#fp-nav ul li').eq(1).addClass('active');
            }
            if (destination.index == 2) {
                $('.main-header').addClass('hide');
                $('.hamburger').addClass('hide');
                $('.navigation ul li').eq(2).addClass('active');
                $('#fp-nav ul li').eq(2).addClass('active');
            }
            if (destination.index == 3) {
                $('.main-header').addClass('hide');
                $('.hamburger').addClass('hide');
                $('.navigation ul li').eq(3).addClass('active');
                $('#fp-nav ul li').eq(3).addClass('active');
            }
            if (destination.index == 4) {
                $('.main-header').addClass('hide');
                $('.hamburger').addClass('hide');
                $('.navigation ul li').eq(4).addClass('active');
                $('#fp-nav ul li').eq(4).addClass('active');
            }
            $('.section.active [data-aos]').addClass("aos-animate");
        }
    });
    /*end*/

    /* first time svg animation script */
    /* start */
    var mySVG = jQuery('#my_svg_element').drawsvg({
        duration: 4000,
        stagger: 20,
        easing: 'linear',
        reverse: true,
    });
    mySVG.drawsvg('animate');
    /* end */

    /* down arrow click script */
    /* start */
    $(document).on('click', '.down_arrow', function () {
        fullpage_api.moveTo('experience', 1);
    });
    /* end */

    /* Responsive Jquery Navigation */
    $('.hamburger').click(function (event) {
        $('#mobilenav').toggleClass('is-open');
    });
    $('#mobilenav .nav-backdrop, #mobilenav ul a').click(function () {
        $('#mobilenav').removeClass('is-open');
    });

    $('body').on('keyup', function (evt) {
        if (evt.keyCode == 27) {
            $('.hamburger.is-active').removeClass('is-active');
            $('#mobilenav.is-show').removeClass('is-show');
        }
    });

    var clickable = $('#menu').attr('link-clickable');
    $('#mobilenav li:has(ul)').addClass('has-sub');
    $('#mobilenav .has-sub>a').after('<em class="caret">');
    if (clickable == 'true') {
        $('#mobilenav .has-sub>a').addClass('trigger-caret').attr('href', 'javascript:;');
    } else {
        $('#mobilenav .has-sub>.caret').addClass('trigger-caret');
    }

    /* menu open and close on single click */
    $(document).on('click', '#mobilenav .has-sub>.trigger-caret', function (event) {
        var element = $(this).parent('li');
        if (element.hasClass('is-open')) {
            element.removeClass('is-open');
            element.find('li').removeClass('is-open');
            element.find('ul').slideUp(200);
        } else {
            element.addClass('is-open');
            element.children('ul').slideDown(200);
            element.siblings('li').children('ul').slideUp(200);
            element.siblings('li').removeClass('is-open');
            element.siblings('li').find('li').removeClass('is-open');
            element.siblings('li').find('ul').slideUp(200);
        }
    });

    /* Aos Animation */
    AOS.init({
        disable: 'mobile',
        once: false,
    });

});

/* SVG Animation function script call*/
/*start*/
function svg_animation() {
    $('.full_screen section').each(function () {
        if ($(this).hasClass('active')) {
            var svg_id = $(this).find('svg').attr('id');
            if (svg_id == "") { } else {
                var mySVG = jQuery('#' + svg_id).drawsvg({
                    duration: 4000,
                    stagger: 20,
                    easing: 'linear',
                    reverse: true,
                });
                mySVG.drawsvg('animate');
            }
        }
    });
}
/*end*/

/*main menu and side button*/
/*start*/
function menu_loop() {
    $('.navigation ul li').each(function () {
        $(this).removeClass('active');
    });
    $('#fp-nav ul li').each(function () {
        $(this).removeClass('active');
    });
}
/*end*/

/* Script on load
------------------------------------------------------------------------------*/
$(window).load(function () {

    setTimeout(function () {
        $('.hero-content').addClass('show');
    }, 3000);
    setTimeout(function () {
        $('.hero-section .hero_cap').addClass('show');
    }, 100);

});

/* Script on scroll
------------------------------------------------------------------------------*/
$(window).scroll(function () {

});

/* Script on resize
------------------------------------------------------------------------------*/
$(window).resize(function () {
    setTimeout(() => {
        AOS.refresh();
    }, 500);
});