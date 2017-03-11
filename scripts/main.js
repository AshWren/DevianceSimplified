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

    var allEntries = [];

    function loadDiv() {

       

            

            var entryId = $(this).closest('.panel').data('entryid');

            var entry = searchEntries(entryId);

            var fullTemplate = $("#art-dropdown").html();
            var hbs = Handlebars.compile(fullTemplate);

            var compiledHTML = hbs(entry);
            
            var dropDown = $('#trial');
            dropDown.html(compiledHTML);

        





    }

    function searchEntries(id) {
        for (var i = 0; i < allEntries.length; i++) {
            if (allEntries[i].id == id) {
                return allEntries[i];
            }
        }
    }
    console.log(allEntries);


loadDiv();


});