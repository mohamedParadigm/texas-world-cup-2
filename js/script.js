/*----------------------------------------------------------------

	Template Name: Hayley - Creative Personal Onepage HTML Template

	-------------------------------------------------------------------------------*/

/**************************************************************
	
	Main Js Activation
	01. Preloader
	02. Menu
	03. Header Shadow 
	04. Pagepiling
	05. Carousels
	06. Forms
	__ End Js Activation

***************************************************************/

(function ($) {
  "use strict";

  /*-------------------------------------------------------------------------------
	  Preloader
	-------------------------------------------------------------------------------*/
  $(window).on("load", function () {
    if ($(".preloader").length) {
      $(".preloader").fadeOut("slow");
    }
  });

  /*-------------------------------------------------------------------------------
	  Menu
	-------------------------------------------------------------------------------*/

  $(".a-nav-toggle, .menu-main a").on("click", function () {
    if ($("html").hasClass("body-menu-opened")) {
      $("html").removeClass("body-menu-opened").addClass("body-menu-close");
      $("#pp-nav").show();
    } else {
      $("html").addClass("body-menu-opened").removeClass("body-menu-close");
      $("#pp-nav").hide();
    }
  });

  /*-------------------------------------------------------------------------------
	  Header Shadow
	-------------------------------------------------------------------------------*/

  $(".pp-scrollable").scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".header").addClass("header-shadow");
    } else {
      $(".header").removeClass("header-shadow");
    }
  });

  /*-------------------------------------------------------------------------------
	  Pagepiling
	-------------------------------------------------------------------------------*/

  if ($(".a-pagepiling").length) {
    $(".a-pagepiling").pagepiling({
      scrollingSpeed: 280,
      menu: "#menu, #menuMain",
      anchors: [
        "VideoBanner",
        "StepsGuide",
        "passion",
        "ready-to-order"
      ],
      loopTop: false,
      loopBottom: true,
      navigation: {
        position: "right",
      },
      onLeave: function () {
        $(".header").removeClass("header-shadow");
        if ($(".pp-scrollable.active").scrollTop() > 0) {
          $(".header").addClass("header-shadow");
        } else {
          $(".header").removeClass("header-shadow");
        }
        if ($(".slide-dark-footer").hasClass("active")) {
          $("body").addClass("body-copyright-light");
        } else {
          $("body").removeClass("body-copyright-light");
        }
        if ($(".slide-dark-bg").hasClass("active")) {
          $("body").addClass("body-bg-dark");
        } else {
          $("body").removeClass("body-bg-dark");
        }
        $(".a-carousel-projects").trigger("refresh.owl.carousel");
      },
    });
  }

  /*-------------------------------------------------------------------------------
	  Forms
	-------------------------------------------------------------------------------*/
  // Material
  if ($(".a-form-group").length) {
    $(".a-form-group .form-control").each(function () {
      if (
        $(this).val().length > 0 ||
        $(this).attr("placeholder") !== undefined
      ) {
        $(this).closest(".a-form-group").addClass("active");
      }
    });
    $(".a-form-group .form-control").focus(function () {
      $(this).closest(".a-form-group").addClass("active");
    });
    $(".a-form-group .form-control").blur(function () {
      if ($(this).val() == "" && $(this).attr("placeholder") == undefined) {
        $(this).closest(".a-form-group").removeClass("active");
      }
    });
    $(".a-form-group .form-control").change(function () {
      if ($(this).val() == "" && $(this).attr("placeholder") == undefined) {
        $(this).closest(".a-form-group").removeClass("active");
      } else {
        $(this).closest(".a-form-group").addClass("active");
      }
    });
  }

  /*-------------------------------------------------------------------------------
	  Lazy Load Images
	-------------------------------------------------------------------------------*/
  const observer = lozad(); // lazy loads elements with default selector as '.lozad'
  observer.observe();
})($);
