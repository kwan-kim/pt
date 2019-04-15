$(document).ready(function(){
  $('.slide1').bxSlider({
    mode:'horizontal',
    speed:500,
    controls:true,
    pager:false,
    onSliderLoad: function(currentIndex){
      let current = currentIndex + 1
      // $('.slideNumber1').text(`${current} / ${slideNumber}`)
      $('.slideNumber1').text(current + '/' + this.getSlideCount())
    },
    onSlideAfter: function($slideElement, oldIndex, newIndex){
      let current = newIndex + 1
      // $('.slideNumber1').text(`${current} / ${slideNumber}`)
      $('.slideNumber1').text(current + '/' + this.getSlideCount())
    }
  });

  $('.slide2').bxSlider({
    mode:'horizontal',
    speed:500,
    controls:true,
    pager:false,
    onSliderLoad: function(currentIndex){
      let current = currentIndex + 1
      // $('.slideNumber1').text(`${current} / ${slideNumber}`)
      $('.slideNumber2').text(current + '/' + this.getSlideCount())
    },
    onSlideAfter: function($slideElement, oldIndex, newIndex){
      let current = newIndex + 1
      // $('.slideNumber1').text(`${current} / ${slideNumber}`)
      $('.slideNumber2').text(current + '/' + this.getSlideCount())
    }
  });

  $('.slide3').bxSlider({
    mode:'horizontal',
    speed:500,
    controls:true,
    pager:false,
    onSliderLoad: function(currentIndex){
      let current = currentIndex + 1
      // $('.slideNumber2').text(`${current} / ${slideNumber}`)
      $('.slideNumber3').text(current + '/' + this.getSlideCount())
    },
    onSlideAfter: function($slideElement, oldIndex, newIndex){
      let current = newIndex + 1
      // $('.slideNumber2').text(`${current} / ${slideNumber}`)
      $('.slideNumber3').text(current + '/' + this.getSlideCount())
    }
  });

  $('.bx-prev').html('<i class="fas fa-caret-left"></i>')
  $('.bx-next').html('<i class="fas fa-caret-right"></i>')
});
