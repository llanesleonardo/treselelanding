$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    responsive: {
      0: {
        items: 2,
        lazyLoad: true,
        responsive: {},
        nav: true,
        navText: [" <- ", " -> "],
      },
      // breakpoint from 480 up
      480: {
        items: 2,
        lazyLoad: true,
        responsive: {},
        nav: true,
        navText: [" <- ", " -> "],
      },
      // breakpoint from 768 up
      768: {
        items: 4,
        lazyLoad: true,
        responsive: {},
        nav: true,
        navText: [" <- ", " -> "],
      },
      // breakpoint from 1020 up
      1020: {
        items: 5,
        lazyLoad: true,
        responsive: {},
        nav: true,
        navText: [" <- ", " -> "],
      },
    },
  });
});
