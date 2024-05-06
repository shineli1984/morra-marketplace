export const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 1000,
    dots: true,
    autoplay: true,
    fade : true,
    autoplaySpeed: 4000,
    responsive: [
        {
          breakpoint: 640,
          settings: {
            fade : false,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode : true,
            centerPadding : '20px'
          }
        }
      ]
  };

  export const settingsMain2 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 1000,
    dots: false,
    // autoplay: true,
    fade : true,
    autoplaySpeed: 4000,
    responsive: [
        {
          breakpoint: 640,
          settings: {
            fade : false,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  };

  export const settingsThumbs = {
    slidesToShow: 5,
    swipeToSlide: true,
    focusOnSelect: true,
    speed : 0,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: true,
          speed : 1000,
        }
      }
    ]
  };
// prpper



  export const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        }
      }
    ]
  };

  export var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };