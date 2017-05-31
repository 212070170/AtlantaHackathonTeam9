/**
 * Created by fabioalmeida on 9/29/16.
 */
define(['angular', './module'], function (angular, filters) {
    'use strict';
    filters.filter('highlight_matches', ['$sce',function ($sce) {
        return function(searched,m,not_m){
            if(searched != undefined){
                var s1 = searched.split("\'");
                var s = searched.split(" ");
                var output = "";
                searched = searched.replace(/"/g,"");
                for(var i =0; i < not_m.length; i++){
//                    if(m.indexOf(s[i]) > -1){
//                        console.log("Found: ",m.indexOf(s[i]) > -1,s[i]);
//                        searched = searched.replace(new RegExp("\\b"+s[i]+"\\b","gi"),"<span class='kw-fnd'>"+s[i]+"</span>");
//
//                    }
                    if(searched.indexOf(not_m[i].replace(/"/g,"")) > -1){
                        searched = searched.replace(new RegExp("\\b"+not_m[i].replace(/"/g,"")+"\\b","gi"),"<span class='kw-nt-fnd'>["+not_m[i].replace(/"/g,"")+"]</span>");

                    }
                }

            }

            return $sce.trustAsHtml(searched);
        }
    }]);

    return filters;
});
