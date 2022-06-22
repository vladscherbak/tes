         // Слайдер
            var $carousel = $('.slick').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                dots: false,
                infinite: false,
                prevArrow: $('.slick-prev'),
                nextArrow: $('.slick-next'),

            });
            // Фильтрация
            $('[data-filter=".idx-2"]').click(function(e) {
                $carousel.slick('slickUnfilter');
                $carousel.slick('slickFilter', $('.idx-2'));

                console.log('click 2');
            });

            $('[data-filter=".idx-1"]').click(function(e) {
                $carousel.slick('slickUnfilter');
                $carousel.slick('slickFilter', $('.idx-2'));

                console.log('click 1');
            });

            $('[data-filter="*"]').click(function(e) {
                $carousel.slick('slickUnfilter');
                $carousel.slick('slickFilter', $('.element-item'));

                console.log('*');
            });

            // Скролл
            $(window).load(function() {
                $(".mcs-horizontal").mCustomScrollbar({
                    axis: "x",
                    theme: "dark-thick",
                    autoExpandScrollbar: true,
                    advanced: {
                        autoExpandHorizontalScroll: true
                    },
                    updateOnContentResize: true,
                    scrollbarPosition: 'outside',
                    scrollInertia: 300
                });
            });
