
    // $(document).ready(function () {
    //   $('[data-toggle="tooltip"]').tooltip();
    // })


    // $(document).ready(function () {
    //   $('#mycarousel').carousel({ interval: 3000 });
    //   $('#carousel-pause').click(function () {
    //     $('#mycarousel').carousel('pause');
    //   });
    //   $('#carousel-play').click(function () {
    //     $('#mycarousel').carousel('cycle');
    //   });
    // })

    // For carousel button
    $(function() {
      $('#mycarousel').carousel({ interval: 3000 });
      $('#carouselButton').on("click", function(){
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
          $('#mycarousel').carousel('pause');
          $('#carouselButton').children('span').removeClass('fa-pause');
          $('#carouselButton').children('span').addClass('fa-play');
        } else {
          $('#mycarousel').carousel('cycle');
          $('#carouselButton').children('span').removeClass('fa-play');
          $('#carouselButton').children('span').addClass('fa-pause');
        }
      })
    })

    $(function() { 
      $('#modalLogin').on("click", function() {
        $('#loginModal').modal('show')
      })
    })

    $(function()  {
      $('#modalReserve').on("click", function() {
        $('#reservemodal').modal('show')
      })
    })

