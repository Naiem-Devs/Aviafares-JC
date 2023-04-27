(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // owlCarousel
  $(".reviews_slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false,
    autoplay:true,
    autoplayTimeout:3000,
    smartSpeed: 1000,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 50,
        margin: 20
      },
      430: {
        items: 1,
        stagePadding: 70,
        margin: 20
      },
      767: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });

  (function( $ ){
    $.fn.mySelectDropdown = function(options) {    
      return this.each(function() {  
        var $this = $(this);
        
        $this.each(function () {
          var dropdown = $("<div />").addClass("f-dropdown selectDropdown");
          
          if($(this).is(':disabled')) 
            dropdown.addClass('disabled');
  
          $(this).wrap(dropdown);
  
          var label = $("<span />").append($("<span />")
            .text($(this).attr("placeholder"))).insertAfter($(this));
          var list = $("<ul />");
  
          $(this)
            .find("option")
            .each(function () {
              var image = $(this).data('image');
              if(image) {
                list.append($("<li />").append(
                  $("<a />").attr('data-val',$(this).val())
                  .html(
                    $("<span />").append($(this).text())
                  ).prepend('<img src="'+image+'">')
                ));
              } else if($(this).val() != '') {
                list.append($("<li />").append(
                  $("<a />").attr('data-val',$(this).val())
                  .html(
                    $("<span />").append($(this).text())
                  )
                ));
              }
            });
  
          list.insertAfter($(this));
  
          if ($(this).find("option:selected").length > 0 && $(this).find("option:selected").val() != '') {
            list.find('li a[data-val="' + $(this).find("option:selected").val() + '"]').parent().addClass("active");
            $(this).parent().addClass("filled");
            label.html(list.find("li.active a").html());
          }
        });
  
        if(!$(this).is(':disabled')) {
          $(this).parent().on("click", "ul li a", function (e) {
            e.preventDefault();
            var dropdown = $(this).parent().parent().parent();
            var active = $(this).parent().hasClass("active");
            var label = active
              ? $('<span />').text(dropdown.find("select").attr("placeholder"))
              : $(this).html();
  
            dropdown.find("option").prop("selected", false);
            dropdown.find("ul li").removeClass("active");
  
            dropdown.toggleClass("filled", !active);
            dropdown.children("span").html(label);
  
            if (!active) {
              dropdown
                .find('option[value="' + $(this).attr('data-val') + '"]')
                .prop("selected", true);
              $(this).parent().addClass("active");
            }
  
            dropdown.removeClass("open");
          });
  
          $this.parent().on("click", "> span", function (e) {
            var self = $(this).parent();
            self.toggleClass("open");
          });
  
          $(document).on("click touchstart", function (e) {
            var dropdown = $this.parent();
            if (dropdown !== e.target && !dropdown.has(e.target).length) {
              dropdown.removeClass("open");
            }
          });
        }
      });
    };
  })( jQuery );
  
  $('select.f-dropdown').mySelectDropdown();
  


  // AOS.init({
  //   mirror: true,
  //   duration: 1500,
  //   initClassName: 'aos-init',
  //   once: true,
  // });

  
})(jQuery);
