$(document).ready(function () {
    // Slick
    $('.slick').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
      
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Handlebars

    var url = "entries.json"  

    $.get(url, function(result){
        var templateHtml = $('#art-dropdown').html();
        var hbs = Handlebars.compile(templateHtml);

        var obj = {
            entry: result
        }

        var html = hbs(obj);

        $('#trial').append(html);
    });  
  
});