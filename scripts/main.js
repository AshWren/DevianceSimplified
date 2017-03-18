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



    var divLoaded = false;

    var url = $.get("entries.json", function (result) {
        allEntries = result;
    });

    var allEntries = url;

    function loadDiv() {
        var isOpen = $(this).find(".dropDown").hasClass("open");
        $(".open").slideUp().removeClass("open");
        if (isOpen === false) {
            var entryId = $(this).data('entryid');
            var entry = searchEntries(entryId);
            var fullTemplate = $("#art-dropdown").html();
            var hbs = Handlebars.compile(fullTemplate);
            var compiledHTML = hbs(entry);
            var dropDown = $(this).find(".dropDown").addClass("open");
            dropDown.html(compiledHTML).slideDown();
        }

    };

    function searchEntries(id) {
        for (var i = 0; i < allEntries.length; i++) {
            if (allEntries[i].id == id) {
                return allEntries[i];
            }
        }
    }

    $('.art-ind').on('click', loadDiv);


    // Category Selector

   cleanUp();

    function cleanUp() {

         /*$('#dig-art').removeClass('active');
         $('#trad-art').removeClass('active');
         $('#phot').removeClass('active');
         $('#tat').removeClass('active');
         $('#drag').removeClass('active');
         $('#craft').removeClass('active');

         $(".dig-art").html("Digital Art");
         $(".trad-art").html("Traditional Art");
         $(".phot").html("Photography");
         $(".tat").html("Tattoos");
         $(".drag").html("Dragons");
         $(".craft").html("Crafts"); */

        $(".dropDown").hide();

     }; 

    function showSection(idClicked) {
        switch (idClicked) {
            case "dig-art-cat":
                $('#dig-art').fadeIn();
                $('#dig-art-cat').addClass("active");
                break;
            case "trad-art-cat":
                $('#trad-art').fadeIn();
                $('#trad-art-cat').addClass("active");
                break;
            case "phot-cat":
                $('#phot').fadeIn();
                $('#phot-cat').addClass("active");
                break;
            case "tat-cat":
                $('#tat').fadeIn();
                $('#tat-cat').addClass("active");
                break;
            case "drag-cat":
                $('#drag').fadeIn();
                $('#drag-cat').addClass("active");
                break;
            case "craft-cat":
                $('#craft').fadeIn();
                $('#craft-cat').addClass("active");
                break;
        };
    };

    function hideSection(idClicked) {
        switch (idClicked) {
            case "dig-art-cat":
                $('#dig-art').fadeOut();
                $('#dig-art-cat').removeClass("active");
                break;
            case "trad-art-cat":
                $('#trad-art').fadeOut();
                $('#trad-art-cat').removeClass("active");
                break;
            case "phot-cat":
                $('#phot').fadeOut();
                $('#phot-cat').removeClass("active");
                break;
            case "tat-cat":
                $('#tat').fadeOut();
                $('#tat-cat').removeClass("active");
                break;
            case "drag-cat":
                $('#drag').fadeOut();
                $('#drag-cat').removeClass("active");
                break;
            case "craft-cat":
                $('#craft').fadeOut();
                $('#craft-cat').removeClass("active");
                break;
        };
    };

    $('#dig-art-cat').on('click', function (e) {
        e.preventDefault();
        if ($('#dig-art-cat').hasClass("active")) {
            $(".dig-art").html("Digital Art");
            hideSection('dig-art-cat');
        } else {
            cleanUp();
            $(".dig-art").html("<h3>[ Digital Art ]</h3>");
            showSection('dig-art-cat');
        }
    });

    $('#trad-art-cat').on('click', function (e) {
        e.preventDefault();
        if ($('#trad-art-cat').hasClass("active")) {
            $(".trad-art").html("Traditional Art");
            hideSection('trad-art-cat');
        } else {
            cleanUp();
            $(".trad-art").html("<h3>[ Traditional Art ]</h3>");
            showSection('trad-art-cat');
        }
    });

    $('#phot-cat').on('click', function (e) {
        e.preventDefault();
        if ($('#phot-cat').hasClass("active")) {
            $(".phot").html("Photography");
            hideSection('phot-cat');
        } else {
            cleanUp();
            $(".phot").html("<h3>[ Photography ]</h3>");
            showSection('phot-cat');
        }
    });

     $('#tat-cat').on('click', function (e) {
        e.preventDefault();
        if ($('#tat-cat').hasClass("active")) {
            $(".tat").html("Tattoos");
            hideSection('tat-cat');
        } else {
            cleanUp();
            $(".tat").html("<h3>[ Tattoos ]</h3>");
            showSection('tat-cat');
        }
    });

     $('#drag-cat').on('click', function (e) {
        e.preventDefault();
        if ($('#drag-cat').hasClass("active")) {
            $(".drag").html("Dragons");
            hideSection('drag-cat');
        } else {
            cleanUp();
            $(".drag").html("<h3>[ Dragons ]</h3>");
            showSection('drag-cat');
        }
    });

     $('#craft-cat').on('click', function (e) {
        e.preventDefault();
        if ($('#craft-cat').hasClass("active")) {
            $(".craft").html("Crafts");
            hideSection('craft-cat');
        } else {
            cleanUp();
            $(".craft").html("<h3>[ Crafts ]</h3>");
            showSection('craft-cat');
        }
    });

    

});