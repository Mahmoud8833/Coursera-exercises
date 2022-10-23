
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
    $(document).ready(() => {
      $('#mycarousel').carousel({ interval: 3000 });
      $('#carouselButton').click(() => {
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

    $(document).ready(() => {
      $('#modalLogin').click(() => {
        $('#loginModal').modal('show')
      })
    })

    $(document).ready(() => {
      $('#modalReserve').click(() => {
        $('#reservemodal').modal('show')
      })
    })

