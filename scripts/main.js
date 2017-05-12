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


    // Category Selector

    cleanUp();

    function cleanUp() {
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
            $(".dig-art").html("<h3 class='select'>Digital Art</h3>");
            hideSection('dig-art-cat');
        } else {
            cleanUp();
            $(".dig-art").html("<h3 class='select'>[&nbsp;Digital Art&nbsp;]</h3>");
            showSection('dig-art-cat');
        }
    });

    $('#trad-art-cat').on('click', function (e) {
        e.preventDefault();
        if ($('#trad-art-cat').hasClass("active")) {
            $(".trad-art").html("<h3 class='select'>Traditional Art</h3>");
            hideSection('trad-art-cat');
        } else {
            cleanUp();
            $(".trad-art").html("<h3 class='select'>[&nbsp;Traditional Art&nbsp;]</h3>");
            showSection('trad-art-cat');
        }
    });

    $('#phot-cat').on('click', function (e) {
        e.preventDefault();
        if ($('#phot-cat').hasClass("active")) {
            $(".phot").html("<h3 class='select'>Photography</h3>");
            hideSection('phot-cat');
        } else {
            cleanUp();
            $(".phot").html("<h3 class='select'>[&nbsp;Photography&nbsp;]</h3>");
            showSection('phot-cat');
        }
    });

    $('#tat-cat').on('click', function (e) {
        e.preventDefault();
        if ($('#tat-cat').hasClass("active")) {
            $(".tat").html("<h3 class='select'>Tattoos</h3>");
            hideSection('tat-cat');
        } else {
            cleanUp();
            $(".tat").html("<h3 class='select'>[&nbsp;Tattoos&nbsp;]</h3>");
            showSection('tat-cat');
        }
    });

    $('#drag-cat').on('click', function (e) {
        e.preventDefault();
        if ($('#drag-cat').hasClass("active")) {
            $(".drag").html("<h3 class='select'>Dragons</h3>");
            hideSection('drag-cat');
        } else {
            cleanUp();
            $(".drag").html("<h3 class='select'>[&nbsp;Dragons&nbsp;]</h3>");
            showSection('drag-cat');
        }
    });

    $('#craft-cat').on('click', function (e) {
        e.preventDefault();
        if ($('#craft-cat').hasClass("active")) {
            $(".craft").html("<h3 class='select'>Crafts</h3>");
            hideSection('craft-cat');
        } else {
            cleanUp();
            $(".craft").html("<h3 class='select'>[&nbsp;Crafts&nbsp;]</h3>");
            showSection('craft-cat');
        }
    });

    // Handlebars

    var url = $.get("entries.json", function (result) {
        allEntries = result;
    });

    var allEntries = url;

    var activeId = 0

    function loadDiv() {
        cleanUp();
        $('.dropDown.open').slideUp().removeClass("open");
        var dropDown = $(this).closest(".category").find(".dropDown");
        
        var isOpen = dropDown.hasClass("open");
        
        var div = $(this);

        var entryId = div.data('entryid');

        if (activeId !== entryId) {
            showDiv(buildTemplate());
        } else {
            activeId = 0;
        }

        function buildTemplate() {
            activeId = entryId;
            var entry = searchEntries(entryId);
            var fullTemplate = $("#art-dropdown").html();
            var hbs = Handlebars.compile(fullTemplate);
            var compiledHTML = hbs(entry);
            return compiledHTML;
        };

        function showDiv(compiledHTML) {
            dropDown.addClass("open");
            dropDown.html(compiledHTML);
            setUpSeeMore(dropDown);
            dropDown.slideDown();
        };

        function setUpSeeMore(holder) {
            var cutoff = 200;            
            var desc = holder.find('.dd-desc');
            var ddinfo = holder.find('.dd-info');
            var text = desc.text();
            if(text.length > cutoff){
                var textShort = text.substr(0, cutoff) + '...';
                holder.data('original', text);
                holder.data('short', textShort);
                desc.text(holder.data('short'));
                ddinfo.append('<div class="see-more">See More <i class="fa fa-chevron-down" aria-hidden="true"></i></div>');
 
                holder.find('.see-more').click(function (e) {
                     if (!ddinfo.hasClass('more')) {
                        desc.text(holder.data('original'));
                        ddinfo.addClass('more');
                        $(this).text('See Less').html('See Less <i class="fa fa-chevron-up" aria-hidden="true"></i>');
                    } else {
                        desc.text(holder.data('short'));
                        ddinfo.removeClass('more');
                        $(this).text('See More').html('See More <i class="fa fa-chevron-down" aria-hidden="true"></i>');
                    }
                });
           }
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

    // Search Bar

    function filterEntries() {

        var phrase = $("#searchAll").val();

        if (phrase === '') {
            return allEntries;
        }

        var filteredEntries = [];

        for (var i = 0; i < allEntries.length; i++) {
            var entry = allEntries[i];

            var isMatch = false;

            //search body
            var search = entry.art - name + ' ' + entry.artist - name + ' ' + entry.description + ' ' + entry.keywords

            if (phrase !== '' && search.indexOf(phrase) > -1) {
                isMatch = true;
            }

            if (isMatch === true) {
                filteredEntries.push(entry);
            }
        }
        return filteredEntries;

    };


    // Search Handlebars Divs

    function searchDiv(filteredEntries) {
        var searchCont = $('.search-container');

        var fullTemplate = $("#art-dropdown").html();
        var hbs = Handlebars.compile(fullTemplate);

        var x = "";

        for (var i = 0; i < filteredEntries.length; i++) {
            x = x + hbs(filteredEntries[i]);
        }

        $(".category").hide();

        searchCont.html(x).show();
    }

    $('#btnSearch').on('click', function () {
        var entries = filterEntries();
        searchDiv(entries);
    })
});