(function () {
    "use strict";
    var windowWidth = $(window).width();

    function magicLinePositionChangeMainmenu() {
        $magicLineMainMenu.stop().animate({
            left: $magicLineMainMenu.data("origLeft"),
            width: $magicLineMainMenu.data("origWidth")
        });
    }
    function magicLinePositionChangeSubmenu() {
        $magicLineSubMenu.stop().animate({
            top: $magicLineSubMenu.data("origTop"),
            height: $magicLineSubMenu.data("origHeight")
        });
    }

    if (windowWidth >= 768) {
        var $el, leftPos, newWidth, topPos, newHeight;

        if ($('.navbar-nav').hasClass('magic_menu')) {
            /* Add Magic Line markup via JavaScript, because it ain't gonna work without */
            $(".navbar-nav,.drop_down_list").append("<li class='magic-line'></li>");
            $(".navbar-nav,.drop_down_list").append("<li class='magic-line2'></li>");

            /* Cache it */
            var $magicLineMainMenu = $(".navbar-nav>.magic-line,.navbar-nav>.magic-line2");
            var $magicLineSubMenu = $(".drop_down_list>.magic-line,.drop_down_list>.magic-line2");

            $(".navbar").on("activate.bs.scrollspy", function () {
                $magicLineMainMenu
                    .stop().animate({
                        left: $(".navbar-nav .active").position().left + 10,
                        width: $(".navbar-nav .active").width() - 20
                    }, 100, "swing")
                    .data("origLeft", $(".navbar-nav .active").position().left + 10)
                    .data("origWidth", $(".navbar-nav .active").width() - 20);
            });

            $(".navbar-nav>li").hover(function () {
                $el = $(this);
                leftPos = $el.position().left + 10;
                newWidth = $el.width();

                $magicLineMainMenu.stop().animate({
                    left: leftPos,
                    width: newWidth - 20
                });
            }, magicLinePositionChangeMainmenu);

            /*magic line for submenu*/
            $magicLineSubMenu
                .height($(".drop_down_list .sub_active").height() - 10)
                .css("top", $(".drop_down_list .sub_active a").position().top + 5)
                .data("origTop", $magicLineSubMenu.position().top)
                .data("origHeight", $magicLineSubMenu.height());


            $(".drop_down_list >li").hover(function () {
                $el = $(this);
                topPos = $el.position().top + 5;
                newHeight = $el.height();

                $magicLineSubMenu.stop().animate({
                    top: topPos,
                    height: newHeight - 10
                });
            }, magicLinePositionChangeSubmenu);

        }

    }
    else {
        /* for mobile menu */
        var $dropdownMenu = $('.has_dropdown .drop_down'),
            $hasdropdown = $('.has_dropdown>a'),
            $hasSubmenu = $('.has_submenu>a'),
            $submenu = $('.submenu');

        /* initially hide the dropdown menu */
        $dropdownMenu.slideUp('slow');
        $submenu.slideUp('slow');


        /* slide down dropdwn menu */
        $hasdropdown.removeAttr('href');
        $hasSubmenu.removeAttr('href');
        $hasdropdown.on('click', function (event) {
            // $(this).removeAttr('href');
            $('.caret').not($(this).children('.caret')).removeClass('rotate');
            $(this).children('.caret').toggleClass('rotate');
            $('.drop_down').not($(this).siblings('.drop_down')).slideUp(500);
            $(this).parent('.has_dropdown').children('.drop_down').slideToggle(500);
        });
        $hasSubmenu.on('click', function () {
            /*$(this).removeAttr('href');*/
            $('.right_caret').not($(this).children('.right_caret')).removeClass('rotate');
            $(this).children('.right_caret').toggleClass('rotate');
            $('.submenu').not($(this).siblings('.submenu')).slideUp(500);
            $(this).parent('.has_submenu').children('.submenu').slideToggle(500);
        });

        $('#for_mobile > ul > li > a[href]').on('click', function () {
            $('button.navbar-toggle').click();
        });
    }

    /* set the height of the hero section */
    var windowHeight = $(window).height();
    if (windowHeight < 600) {
        if (!$('.hero_content > .slider_content').hasClass('.slider_content_style2')) {
            $('.hero_content').addClass('custom-height');
            $('.hero_section_style2 .hero_content').removeClass('custom-height');
        }
    }


    /* bootstrap scrollspy */
    $('.single_page').scrollspy({ target: '#for_mobile', offset: 89 });


    /*smoothscroll*/
    if (!$('.menu-area').hasClass('menu_style_2')) {
        $('.navbar-nav > li > a[href^="#"]').bind('click', function (event) {
            var $anchor = $(this);
            var headerH = '83';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        });
    }


    /* margin remove on scroll */
    if ($('.menu-area .navbar').hasClass('detuched_nav')) {
        if ($('.menu-area .detuched_nav').offset().top > 117) {
            $('.menu-area .detuched_nav').css('margin-top', '0');
        }
    }


    // menu and scroll top js
    $(window).scroll(function () {

        var navbar = $('.menu-area .detuched_nav'),
            pageBottom = $('#mini_footer').offset().top,
            distanceFromTop = $(document).scrollTop(),
            goTop = $('.scroll_top');
        if (distanceFromTop > 117) {
            navbar.css('margin-top', '0');
            goTop.fadeIn(400);
        }
        else {
            navbar.css('margin-top', '30px');
            goTop.fadeOut(400);
        }

        var miniFooterOffsetTop = distanceFromTop + $(window).height();
        if (miniFooterOffsetTop >= pageBottom) {
            goTop.addClass('expand');
        }
        else {
            goTop.removeClass('expand');
        }
    });



    // click event to scroll to next section
    $('.scroll_down a').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 2000, 'easeInOutCirc');
    });

    //Click event to scroll to top
    $('.scroll_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });



    // custom nav trigger function for owl casousel
    function customTrigger(slideNext, slidePrev, targetSlider) {
        $(slideNext).on('click', function () {
            targetSlider.trigger('next.owl.carousel');
        });
        $(slidePrev).on('click', function () {
            targetSlider.trigger('prev.owl.carousel');
        });
    }



    /*========= all sliders js =========*/
    // hero slider
    var hero_slider = $('.hero_slider');
    hero_slider.owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            991: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    //custom nav trigger for hero slider
    customTrigger(".hero_slider_control .right_arrow", ".hero_slider_control .left_arrow", hero_slider);

    // home index2 hero carousel
    $('.index-2 .hero_slider').owlCarousel({
        dots: true
    });

    /* team  member info sliders */
    var teamMemberInfo = $('.team_member_info_slider');
    teamMemberInfo.owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        autoplay: false,
        items: 1,
        dots: true
    });

    /*team  member image sliders */
    var teamMemberImage = $('.team_member_image_slider');
    teamMemberImage.owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        autoplay: false,
        items: 1,
        dots: true
    });

    /*team slider thumbnail*/
    var teamThumbnail = $('.team_thumbnail_slider');
    teamThumbnail.owlCarousel({
        items: 3,
        loop: true,
        dots: true,
        center: true
    })
    /* custom nav trigger for team slider*/
    customTrigger(".team_slider_control .right_arrow", ".team_slider_control .left_arrow", teamMemberImage);
    customTrigger(".team_slider_control .right_arrow", ".team_slider_control .left_arrow", teamThumbnail);

    /* TEAM SLIDER ALL TRANSLATE TOGETHER */
    function teamTranslated(selectedSlider, target1, target2) {
        selectedSlider.on('translate.owl.carousel', function (property) {
            target1.find('.owl-dot:eq(' + property.page.index + ')').click();
            target2.find('.owl-dot:eq(' + property.page.index + ')').click();
        });
    }
    teamTranslated(teamMemberInfo, teamMemberImage, teamThumbnail);
    teamTranslated(teamMemberImage, teamMemberInfo, teamThumbnail);
    teamTranslated(teamThumbnail, teamMemberInfo, teamMemberImage);


    /* testimonial slider */
    var testimonial_slider = $('.testimonial_slider');
    testimonial_slider.owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        margin: 30,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            991: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });
    /* custom nav trigger for testimonial slider*/
    customTrigger(".clinet_slider_control .right_arrow", ".clinet_slider_control .left_arrow", testimonial_slider);


     /* testimonial slider */
     var doctor_slider = $('.doctor_slider');
     doctor_slider.owlCarousel({
         loop: true,
         nav: false,
         autoplay: false,
         margin: 30,
         dots: false,
         responsive: {
             0: {
                 items: 1
             },
             991: {
                 items: 4
             },
             1000: {
                 items: 4
             }
         }
     });
     /* custom nav trigger for testimonial slider*/
     customTrigger(".clinet_slider_control .right_arrow", ".clinet_slider_control .left_arrow", doctor_slider);



    /* Organization client slider */
    $('.client_organization').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        autoplay: true,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            767: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    /* case stidy image slider */
    $('.project_slider').owlCarousel({
        loop: true,
        dots: true,
        autoplay: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /* portfolio venobx js */
    $('.venobox').venobox({
        numeratio: true
    });
    /* How we work */
    var step = $(".steps");
    step.mouseover(function () {
        var step_number = $(this).attr('data-item');
        $('.item_' + step_number).addClass('active');
        $('path[class^=item_]').not('.item_' + step_number).removeClass('active');
    });

    step.mouseleave(function () {
        var step_number = $(this).attr('data-item');
        $('.item_' + step_number).removeClass('active');
        $('.item_3').addClass('active');
    });

    $(function () {
        $('.icon').mouseover(function () {
            var classes = $(this).attr('class');
            var getClass = classes.split(" ");
            var itemNumber = getClass[0];

            $('.' + itemNumber + '.stroke').addClass('active');
            $('path[class^=item_]').not('.' + itemNumber).removeClass('active');
        });

        $('.icon').mouseleave(function () {
            var classes = $(this).attr('class');
            var getClass = classes.split(" ");
            var itemNumber = getClass[0];

            $('.' + itemNumber + '.stroke').removeClass('active');
            $('.item_3').addClass('active');
        });

    });


    /*COUNTER UP*/
    $('.counts').counterUp({
        delay: 10,
        time: 1000
    });

    /* pricing table js*/
    var pricingTable = $('.single_price_table');
    pricingTable.on('mouseover', function () {
        pricingTable.removeClass('active');
    });
    pricingTable.on('mouseleave', function () {
        $('.premium').addClass('active');
    });



    // Replace all SVG images with inline SVG
    $('img.svg').each(function () {
        var $img = $(this),
            imgID = $img.attr('id'),
            imgClass = $img.attr('class'),
            imgURL = $img.attr('src');

        $.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass);
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });


    /* reveal animation on viewport */
    var $revealClass = $('.reveal');
    $revealClass.css({
        'animation-name': 'none',
        'visibility': 'hidden'
    });

    $revealClass.waypoint(function (direction) {
        var animationName = $(this).attr('data-reveal-anim'),
            animDelay = $(this).attr('data-anim-delay'),
            animDuration = $(this).attr('data-anim-duration');

        $(this).css({
            'animation-name': animationName,
            'data-anim-duration': animDuration,
            '-webkit-animation-delay': animDelay,
            '-moz-animation-delay': animDelay,
            'animation-delay': animDelay,
            'visibility': 'visible'
        });
    }, {
        offset: '90%'
    });


    //       /*smooth scroll js */
    //        var is_chrome = navigator.userAgent.indexOf('Chrome') > -1,
    //            is_explorer = navigator.userAgent.indexOf('MSIE') > -1,
    //            is_firefox = navigator.userAgent.indexOf('Firefox') > -1,
    //            is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
    //
    //        if((is_chrome)||(is_explorer)||(is_firefox)||(is_opera)){
    //            $.arrowSmoothscroll({
    //                step: 150,
    //                speed: 1000,
    //                ease: 'easeOutQuad'
    //            });
    //        }

    /* preloader js */
    $(window).load(function () {
        $('.preloader-container').fadeOut(1000);
        $('.preloader-bg').delay('500').fadeOut(1000);

        /*isotope and packery*/
        $('.portfolio_items').isotope({
            layoutMode: 'packery',
            itemSelector: '.grid_item'
        });

        /*portfolio sorting*/
        $('.filter_list').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $('.portfolio_items').isotope({ filter: filterValue });
            $(this).addClass('active');
            $('.filter_list li').not(this).removeClass('active');
        });

    });

    var $cameraSlider = $('.camera_wraper');
    if ($cameraSlider.length) {
        /*camera slider*/
        $cameraSlider.camera({
            height: '660px',
            pagination: false,
            thumbnails: false,
            loader: false,
            playPause: false,
            fx: 'random',
        });
    }


    //Demo Color Box
    var colorBox = $('.colorDemo');
    function ColorDemoOption(trigger) {
        var colorTrigger = $(trigger),
            body = $('body');
        colorTrigger.on('click', function () {
            var CCcolor = $(this).data('color'),
                colorList = colorTrigger.map(function () {
                    return $(this).data('color');
                }).get();
            colorList = colorList.join(' ');
            body.removeClass(colorList).addClass(CCcolor);
            colorTrigger.removeClass('active');
            $(this).addClass('active');
        });
    }

    ColorDemoOption('.colorDemo ul.primary li');
    ColorDemoOption('.colorDemo ul.secondary li');
    $('.colorDemo > i.icofont-settings').on('click', function () {
        colorBox.toggleClass('open');
    });
    //ColorBox Time Out
    setTimeout(function () {
        colorBox.toggleClass('open');
    }, 3000);

})(jQuery)
