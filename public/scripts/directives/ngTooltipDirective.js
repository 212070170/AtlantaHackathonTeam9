/**
 * Created by fabioalmeida on 9/28/16.
 */
/*global define */
define(['angular', './module','jquery'], function(angular, directives,$) {
    'use strict';

    /* Directives  */
    directives.directive('ngTooltip', [ function() {
        return {
            restrict: 'A',
            replace: false,
            link: function (scope, element, attrs) {
                if($('.tooltip').length == 0){
                    $('body').append("<div class='tooltip' style='position:absolute; max-width:300px; text-align:center;border:1px solid #CCC; padding:10px; border-radius:10px; background-color: #000; color:#FFF; opacity: 0.8; display:none;font-family: ge-sans'>xxx</div>");
                }
                element.bind("mousemove", function (event) {
                    var w = $(element).css('width').replace("px","");
                    var offset = w/3;
                    $('.tooltip').text(attrs.ngTooltip);
                        $('.tooltip').css({
                            display:'block',
                            left:  event.pageX - offset,
                            top:   event.pageY+25
                        });
                });
                element.bind("mouseout", function (event) {
                    $('.tooltip').css({
                        display:'none',
                        left:  0,
                        top:   0
                    })
                });
            }
        }
    }]);

    return directives;
});