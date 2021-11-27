$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  dots: true,
  nav: true,
  dotsEach: true,
  autoplay: true,
  responsive:{
      0:{
          items:1
      },
      576:{
          items:2
      },
      992:{
          items:4
      }
  }
})