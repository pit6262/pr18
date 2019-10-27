$(window).on('load', function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('html').addClass('ios');
	};
	$('body').removeClass('loaded');
});

$(function(){
	
	/* Burger */
	/* ---------------------------------------------- */

	$(".toggle-menu").on('click',function(){
	    $(this).find(".burger__icon").toggleClass("open");
	    $('.navbar').toggleClass('open')
	    $('.header').toggleClass('active')
	    return false;
	});

	$(".dl-toggle").on('click',function(){
	    $(this).toggleClass("active").next().slideToggle(200);
	    return false;
	});

	

	$(".overlay").on('click',function(){
	    $(this).removeClass('open')
	    return false;
	});

	$('.js-filter-list-toggle').click(function(event) {
        event.preventDefault();
        namebl = $(this).html();
        nameblTitle = $(this).data('title');
        $(this).toggleClass('active')
        if(namebl == nameblTitle){
            $(this).html('Показать меньше');
            $(this).parents('.filter-list').find('.fl-d').slideToggle(400);
        }else{
           $(this).html(nameblTitle);
           $(this).parents('.filter-list').find('.fl-d').slideToggle(400);
        }
        return false;
    });

	$(".sort__button").on('click', function(){
		$(".sort__button").removeClass('active')
	    $(this).addClass('active')
	    return false;
	});

	$(".sidebar-block__arrow").on('click', function(){
		$(this).toggleClass('active')
	    $(this).parents('.sidebar-block').find('.sidebar-block__body').slideToggle(400);
	    $('.sidebar .styler').trigger('refresh');
	    return false;
	});

	var instances = OverlayScrollbars(document.querySelectorAll(".main__map-aside"), { 

		overflowBehavior : {
			x : "hidden",
			y : "scroll"
		},
	}); 

	$(".js-view-map").on('click', function(){
		$('.main__wrap').hide();
		$('.main__map').show();
		$('.res-block').show();
		var sidebar = $('.sidebar');
		var mainMapAside = $('.main__map-aside .os-content');
		var target = $(this).attr('href'),
            bl_top = $(target).offset().top;
			$('body,html').animate({scrollTop: bl_top}, 500);
		$(sidebar).appendTo(mainMapAside);

		$('.sidebar .styler').trigger('refresh');
	    return false;
	});

	$(".show-list").on('click', function(){
		$('.main__wrap').show();
		$('.main__map').hide();
		$('.res-block').hide();
		var sidebar = $('.sidebar');
		var mainMapAside = $('.main__wrap .main__row');
		$(sidebar).prependTo(mainMapAside);
		$('.sidebar .styler').trigger('refresh');
		
		
	    return false;
	});



 	$('input[name=ko1]').click(function () {
	    if (this.id == "ko1") {
	        $(".ko1").show();
	        $('.styler').trigger('refresh');
	    } else {
	        $(".ko1").hide();
	    }
	});

	$('input[name=ko2]').click(function () {
	    if (this.id == "ko2") {
	        $(".ko2").show();
	        $('.styler').trigger('refresh');
	    } else {
	        $(".ko2").hide();
	    }
	});

	$('input[name=ko3]').click(function () {
	    if (this.id == "ko3") {
	        $(".ko3").show();
	        $('.styler').trigger('refresh');
	    } else {
	        $(".ko3").hide();
	    }
	});

   
	

	/* Shide */
	/* ---------------------------------------------- */
	
	$('.shide').on('click',function(){
        if($(this).find('.far').hasClass('fa-eye')){
            $(this).find('.far').addClass('fa-eye-slash').removeClass('fa-eye');
            $(this).parents('.form-field--shide').find('.form-input').attr('type', 'text')
        }else{
           $(this).find('.far').addClass('fa-eye').removeClass('fa-eye-slash');
           $(this).parents('.form-field--shide').find('.form-input').attr('type', 'password')
        }
		return false;
	});

	/* Dropdown */
	/* ---------------------------------------------- */

	$(".dropdown-button").on('click',function(){
		var thisDropdown = $(this).parents('.dropdown').find(".dropdown-block");
		$('.dropdown-block').not(thisDropdown).hide();
	    $(this).parents('.dropdown').toggleClass('open').find(".dropdown-block").slideToggle(0);
		return false;
	});

	$(document).on('click', function(event){
      if( $(event.target).closest(".dropdown").length ) 
        return;
      $(".dropdown .dropdown-block").hide();
      $('.dropdown').removeClass('open')
      event.stopPropagation();
    });


	/* Counter */
	/* ---------------------------------------------- */
	$('.js-minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 0 ? 0 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.js-plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});



	/* Tabs */
	/* ---------------------------------------------- */
	$('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return false
	});

	/* Plugins */
	/* ---------------------------------------------- */

	/* Styler */
    if($('.styler').length){
        $('.styler').styler({
        	singleSelectzIndex: 6,
        });
    };

    /* Slick slider */
    if($('.popular-inner__slider').length){
        $('.popular-inner__slider').slick({
        	dots: true,
        	prevArrow: '<button class="slick-arrow slick-prev"><i class="far fa-arrow-left"></i></button>',
        	nextArrow: '<button class="slick-arrow slick-next"><i class="far fa-arrow-right"></i></button>',
        });
    };



    if($('.gallery-slider').length){
        $('.gallery-slider').slick({
        	slidesToShow: 3,
        	slidesToScroll: 1,
        	infinite: false,
        	prevArrow: '<button class="slick-arrow slick-prev"><i class="far fa-arrow-left"></i></button>',
        	nextArrow: '<button class="slick-arrow slick-next"><i class="far fa-arrow-right"></i></button>',
        	responsive: [
        		{
        			breakpoint: 767,
        			settings: {
        				slidesToShow: 2,
        			}
        		},
        		{
        			breakpoint: 559,
        			settings: {
        				slidesToShow: 1,
        			}
        		}
        	]
        });
    };

    if($('.popup-gallery').length){
        $('.popup-gallery').slick({
        	slidesToShow: 1,
        	slidesToScroll: 1,
        	fade: true,
        	adaptiveHeight: true,
        	asNavFor: '.popup-gallery-nav',
        	prevArrow: '<button class="slick-arrow slick-prev"><i class="far fa-arrow-left"></i></button>',
        	nextArrow: '<button class="slick-arrow slick-next"><i class="far fa-arrow-right"></i></button>',
        	responsive: [
        	
        		{
        			breakpoint: 768,
        			settings: {
        				arrows: false,
        				
        			}
        		}
        	]
        });


		$('.popup-gallery-nav').slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			asNavFor: '.popup-gallery',
			arrows: false,
			focusOnSelect: true,
			responsive: [
        		{
        			breakpoint: 992,
        			settings: {
        				slidesToShow: 5,
        			}
        		},
        		{
        			breakpoint: 768,
        			settings: {
        				slidesToShow: 4,

        			}
        		},
        		{
        			breakpoint: 559,
        			settings: {
        				slidesToShow: 3,

        			}
        		}
        	]
		});
    };

    


    /* Slider range */
    if($('#slider-range').length){
	    $( "#slider-range" ).slider({
			range: true,
			min: 1000,
			max: 20000,
			values: [ 3000, 15000 ],
			slide: function( event, ui ) {
				$( "#f-range1" ).val( 'от ' + ui.values[ 0 ].toLocaleString() + ' т');
				$( "#f-range2" ).val( 'до ' + ui.values[ 1 ].toLocaleString() + ' т');

			}
		});
		$("#f-range1").on('change', function() {
	    	$("#slider-range").slider('values',0,$(this).val());
		});
		$("#f-range2").on('change', function() {
		    $("#slider-range").slider('values',1,$(this).val());
		});
	};

	/* Fancybox */
	
    if($('[data-fancybox]').length){
        $("[data-fancybox]").fancybox({
    		autoFocus: false,
    		touch: false,
    		autoFocus: false,
  			backFocus : false,
    		buttons: [
    			// "zoom",
    			//"share",
    			// "slideShow",
    			//"fullScreen",
    			//"download",
    			// "thumbs",
    			"close"
    		],
    		afterLoad: function( instance, slide ) {
    			$('.popup-gallery').slick('refresh');
    			$('.popup-gallery-nav').slick('refresh');
    		}
    		
    	});
    }    
    
	

});