/**
 * Created by hudi on 2016/3/5.
 */
define(function (require, exports, module) {
    var Slick = require('vendor/slick.min');
    var main = {
        init: function () {
            var self = this;
            self.events();

            Swipe($(".swipe")[0], {
                auto: 3000,
                continuous: true,
                callback: function (index) {
                    var pos = $(".swipe nav li");
                    pos.removeClass('on');
                    pos.eq(index).addClass('on');
                }
            });
            $('.center').slick({
                centerMode: true,
                centerPadding: '1.8rem',
                slidesToShow: 1,
                arrows: false
            });

        },
        events: function () {
            $(window).scroll(function () {
                var height = $(window).height();
                if ($(window).scrollTop() > height) {
                    $(".toTop").show();
                }
                else {
                    $(".toTop").hide();
                }
            });

            $(".toTop").click(function () {
                $('body,html').animate({scrollTop:0},800);
                $(".toTop").hide();
            });
        }
    }


    function init() {
        main.init();
    }

    module.exports = {
        init: init
    }
});

