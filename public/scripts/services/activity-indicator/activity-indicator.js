/**
 * Created by fabioalmeida on 3/4/16.
 */

define(['angular', '../module','jquery'], function (angular, services,$) {
    'use strict';

    var ActivityIndicator = function() {
        // Point to the location of the CSS file
//        loadCSS("activity_indicator", "./scripts/services/activity-indicator/activity-indicator.css");
//        loadCSS("bounce", "./scripts/services/activity-indicator/bounce.css");
        require('./activity-indicator.css');
        require('./bounce.css');

        var pubsub = [];

        var start = function(options){
            loadingStatusElement(options);
        }

        var end = function(id){
            var what = null;

            if(id == null || id == undefined)
                 what = ".activity-indicator";
            else
                 what = "#"+id;

            setTimeout(function(){
                $(what).remove();
            },1000);
        }

        var loadingStatusElement = function(options){

            var opts = {
                lines: 13 // The number of lines to draw
                , length: 6 // The length of each line
                , width: 3 // The line thickness
                , radius: 8 // The radius of the inner circle
                , scale: 1 // Scales overall size of the spinner
                , corners: 1 // Corner roundness (0..1)
                , color: '#FFF' // #rgb or #rrggbb or array of colors
                , opacity: 0.25 // Opacity of the lines
                , rotate: 0 // The rotation offset
                , direction: 1 // 1: clockwise, -1: counterclockwise
                , speed: 1 // Rounds per second
                , trail: 60 // Afterglow percentage
                , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
                , zIndex: 2e9 // The z-index (defaults to 2000000000)
                , className: 'spinner' // The CSS class to assign to the spinner
//                , top: '50%' // Top position relative to parent
//                , left: '50%' // Left position relative to parent
                , shadow: false // Whether to render a shadow
                , hwaccel: false // Whether to use hardware acceleration
                , position: 'relative' // Element positioning
            }

        require(['jquery','../../bower_components/spinjs/dist/spin.min'], function($,Spinner) {
            options = options || {};
            var id = options.id == undefined? "activity-indicator" : ""+options.id;
            var message = options.message == undefined? "loading..." : ""+options.message;
            var type = options.type == undefined ? "spin" : options.type;
            console.log('TYPE: '+type);
            if(type == "spin") {
                var lse = "<div id='" + id + "' class='activity-indicator'>" +
                    "<div class='activity-indicator-background'></div>" +
                    "<div class='activity-indicator-outer-container'>" +
                    "<div class='activity-indicator-container animation-target'>" +
                    "<div class='activity-indicator-spinner'></div>" +
                    "<div class='activity-indicator-message'>" + message + "</div>" +
                    "</div>" +
                    "</div>" +
                    "</div>";
                $('body').append(lse);

                var target = document.getElementById(id).getElementsByClassName("activity-indicator-spinner")[0];;
                var spinner = new Spinner(opts).spin(target);
            }else if(type == "ellipsis"){
                var lse = "<div id='" + id + "' class='activity-indicator'>" +
                    "<div class='activity-indicator-background'></div>" +
                    "<div class='activity-indicator-outer-container'>" +
                    "<div class='activity-indicator-container animation-target'>" +
                    "<div class='loading_dots'>"+
                        "<span></span>"+
                        "<span></span>"+
                        "<span></span>"+
                    "</div>"+
                    "<div class='activity-indicator-message'>" + message + "</div>" +
                    "</div>" +
                    "</div>" +
                    "</div>";
                $('body').append(lse);

            }
         });

      }


        function loadCSS (cssId, cssPath) {
            var cssId = cssId;  // you could encode the css path itself to generate id..
            if (!document.getElementById(cssId)) {
                var head = document.getElementsByTagName('head')[0];
                var link = document.createElement('link');
                link.id = cssId;
                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.href = cssPath;
                link.media = 'all';
                head.appendChild(link);
            }
        };


        return {
            start:start,
            end:end

        };

    };

    services.factory('$activityIndicator', [ActivityIndicator]);
    return services;
});

