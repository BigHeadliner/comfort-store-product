$(function () {

  const hamburger = document.getElementById('menu__btn');
  const headerMenu = document.getElementById('menu__list');
  const menuLinks = document.querySelectorAll('.menu__link');

  hamburger.addEventListener('click', () => {
    headerMenu.classList.toggle('menu__list--active');
    hamburger.classList.toggle('menu__btn--open');
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      headerMenu.classList.remove('menu__list--active');
      hamburger.classList.remove('menu__btn--open');
    });

  });


  $('.ship__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/ship/prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/ship/next.svg" alt=""></button>',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1828,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false,
        }
      },

      {
        breakpoint: 1215,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
        }
      },

      {
        breakpoint: 874,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
        }
      },

      {
        breakpoint: 431,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          fade:true,
          autoplay: false,
        }
      },

      {
        breakpoint: 321,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          dots: true,
        }
      },
    ]

  })


  let $slider = $('.about-furniture__slider');

  if ($slider.length) {
    let currentSlide;
    let slidesCount;
    let sliderCounter = document.createElement('div');
    sliderCounter.classList.add('about-furniture__counter');

    let updateSliderCounter = function (slick, currentIndex) {
      currentSlide = slick.slickCurrentSlide() + 1;
      slidesCount = slick.slideCount;
      $(sliderCounter).text(currentSlide + '/' + slidesCount)
    };

    $slider.on('init', function (event, slick) {
      $slider.append(sliderCounter);
      updateSliderCounter(slick);
    });

    $slider.on('afterChange', function (event, slick, currentSlide) {
      updateSliderCounter(slick, currentSlide);
    });

    $slider.slick({
      prevArrow: '<button type="button" class="about-furniture-arrow about-furniture-prev"><img src="images/about-furniture/prev-arrow.svg" alt=""></button>',
      nextArrow: '<button type="button" class="about-furniture-arrow about-furniture-next"><img src="images/about-furniture/next-arrow.svg" alt=""></button>',
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  }


  $(".about-furniture__stars").rateYo({
    starWidth: "37px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
    starSvg: '<svg viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36.9068 12.5171L25.7491 10.8955L20.7613 0.783708C20.625 0.506852 20.4009 0.282731 20.1241 0.146501C19.4297 -0.196273 18.586 0.0893718 18.2388 0.783708L13.251 10.8955L2.09329 12.5171C1.78567 12.5611 1.50442 12.7061 1.28909 12.9258C1.02877 13.1934 0.885316 13.5533 0.89026 13.9266C0.895204 14.2999 1.04814 14.6559 1.31546 14.9165L9.38821 22.7871L7.48099 33.9009C7.43626 34.1594 7.46487 34.4253 7.56357 34.6684C7.66227 34.9115 7.82711 35.1221 8.03939 35.2763C8.25168 35.4305 8.50292 35.5221 8.76463 35.5407C9.02633 35.5594 9.28803 35.5044 9.52005 35.3819L19.5 30.1348L29.48 35.3819C29.7525 35.5269 30.0689 35.5752 30.3721 35.5225C31.1368 35.3906 31.6509 34.6655 31.5191 33.9009L29.6118 22.7871L37.6846 14.9165C37.9043 14.7012 38.0493 14.4199 38.0933 14.1123C38.2119 13.3433 37.6758 12.6314 36.9068 12.5171Z" fill="#DFC226"/></svg> '
  }); 
   
  $(".product-one__rating-stars").rateYo({
    starWidth: "39px",
    normalFill: "#ccccce",
    ratedFill: "#FDBC15",
    readOnly: true,
    starSvg: '<svg width="41" height="39" viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.542 2.2465C18.6772 1.81754 18.9457 1.44287 19.3085 1.17692C19.6712 0.910968 20.1093 0.767578 20.559 0.767578C21.0088 0.767578 21.4469 0.910968 21.8096 1.17692C22.1723 1.44287 22.4408 1.81754 22.5761 2.2465L26.2186 13.4482H37.9686C38.4345 13.4305 38.8933 13.5659 39.275 13.8336C39.6567 14.1013 39.9402 14.4866 40.0823 14.9307C40.2244 15.3747 40.2172 15.853 40.0618 16.2926C39.9065 16.7321 39.6115 17.1087 39.222 17.3648L29.6849 24.2777L33.3274 35.499C33.4714 35.9264 33.4751 36.3887 33.3377 36.8184C33.2004 37.248 32.9293 37.6225 32.5641 37.8872C32.1988 38.1518 31.7585 38.2928 31.3075 38.2894C30.8564 38.2861 30.4182 38.1386 30.057 37.8686L20.5003 30.8773L10.9632 37.8098C10.6019 38.0799 10.1637 38.2273 9.7127 38.2307C9.26165 38.234 8.82135 38.0931 8.45609 37.8284C8.09083 37.5638 7.81975 37.1893 7.68242 36.7596C7.5451 36.33 7.54873 35.8677 7.69279 35.4402L11.3353 24.219L1.7982 17.3061C1.40866 17.05 1.11367 16.6734 0.958313 16.2338C0.802956 15.7943 0.795772 15.3159 0.937858 14.8719C1.07994 14.4279 1.36349 14.0426 1.74517 13.7749C2.12684 13.5072 2.58567 13.3718 3.05154 13.3894H14.8015L18.542 2.2465Z" fill="#FDBC15"/></svg> '
  });

 
   
  
  var elem = document.querySelector('.collection__items');
  var iso = new Isotope(elem, {
    // options
    itemSelector: '.collection__item',
    layoutMode: 'fitRows',
    fitRows: {
      gutter: 25
    }

    });

    var elem = document.querySelector('.collection__items-1');
    var iso = new Isotope(elem, {
      // options
      itemSelector: '.collection__item',
      layoutMode: 'fitRows',
      fitRows: {
        gutter: 25
      }

  });


  $('.footer__top-btn').on('click', function(e){
    e.preventDefault();
  })

  $('.product-one__slider-big').slick({
     asNavFor: '.product-one__slider-nav',
     arrows: false,
     draggable: false,  

     responsive: [
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true, 
          fade: true
        }
      }, 
    ] 
  });
 
 
  
   

  $('.product-one__slider-nav').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/product-new-page/slider/next.svg" alt="next arrow"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/product-new-page/slider/prev.svg" alt="prev arrow"></button>',
    asNavFor: '.product-one__slider-big',
    focusOnSelect: true,
    slidesToScroll: 1,
    draggable: false, 
    variableWidth: true, 
    slidesToShow: 5,  

  }); 
   
  $('.product-one__tab').on('click', function (e) {
    e.preventDefault();
    $('.product-one__tab').removeClass('product-one__tab--active');
    $(this).addClass('product-one__tab--active');

    $('.product-one__content').removeClass('product-one__content--active');
    $($(this).attr('href')).addClass('product-one__content--active'); 
  });  
    


   $('.faq__question-top').on('click', function (){  
     $(this).next('.faq__question-content').slideToggle();
     $(this).children('.faq__decor-arrow').toggleClass('faq__decor-arrow--rotate'); 
   })    
    
   $('.faq__question-content').hide();  
    
   $(".reviews__rating").rateYo({
    starWidth: "31px",
    normalFill: "#FDBC15",  
    ratedFill: "#FDBC15",
    readOnly: true,
    starSvg: '<svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.1669 0.943568C12.7062 -0.300109 14.47 -0.300105 15.0093 0.943571L17.2834 6.18792C17.7323 7.22314 18.7085 7.93242 19.8318 8.03946L25.5222 8.58169C26.8717 8.71028 27.4167 10.3877 26.4005 11.2849L22.1156 15.0683C21.2698 15.8151 20.8969 16.9628 21.1422 18.0642L22.385 23.6436C22.6797 24.9668 21.2528 26.0035 20.0855 25.3143L15.1631 22.4082C14.1915 21.8346 12.9847 21.8346 12.0131 22.4082L7.09072 25.3143C5.9234 26.0035 4.49653 24.9668 4.79124 23.6436L6.03398 18.0642C6.2793 16.9628 5.9064 15.8151 5.06057 15.0683L0.775643 11.2849C-0.24051 10.3877 0.304509 8.71028 1.65397 8.58169L7.34438 8.03946C8.46766 7.93242 9.44391 7.22314 9.89281 6.18791L12.1669 0.943568Z" fill="#FDBC15"/></svg>'
  });
       
});