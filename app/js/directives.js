'use strict';

/* Directives */

angular.module('qetly.directives', []).
  directive('leaflet', function ($rootScope) {
    return {
      restrict: 'E',
      replace: true,
      scope: {
      },
      link: function(scope, element, attrs) {
        scope.map = L.map(element[0]);
        scope.map.setView([50.73, -1.88], 14);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                maxZoom: 18,
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> ' + 
                             'contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
        }).addTo(scope.map);
        scope.map.on('click', function(ctx)
            {
                var p = ctx.latlng;
                L.marker([p.lat, p.lng]).addTo(scope.map).bindPopup(
                    'Name: <input type="text" value="' + '' + '" />' + "<br />" + 
                    'Description: <input type="text" value="' + '' + '" />' + "<br />" + 
                    '@' + p.lat + ', ' + p.lng
                    );
                points.push({"x":p.lat, "y":p.lng, "name":'Example one!', "description":'Test'});
            }
        );
        scope.map.on('popupclose', function(ctx)
            {
                //var marker = ctx.popup._source;
                //map.removeLayer(marker);
            }
        );
      }
    };
  });

