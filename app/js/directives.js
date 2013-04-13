'use strict()';

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
        // TODO calculate this from points shown
        scope.map.setView([50.73, -1.88], 14);
        scope.points = [];
        scope.updatePoint = undefined;

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                maxZoom: 18,
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> ' + 
                             'contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
        }).addTo(scope.map);
        scope.map.on('click', function(ctx)
            {
                var p = ctx.latlng;
                var marker = L.marker([p.lat, p.lng]);
                /*
                'Name: <input type="text" ' + ' />' + "<br />" + 
                'Description: <input type="text" value="' + '' + '" />' + "<br />" + 
                '@' + p.lat + ', ' + p.lng
                */
                marker.addTo(scope.map).bindPopup('<b>Untitled</b>');
                scope.points[p.lat + ',' + p.lng] = {
                    "x" : p.lat,
                    "y" : p.lng,
                    "name" : "Untitled",
                    "description" : ''
                };
                $rootScope.$emit("pointsChanged", scope.points);
            }
        );
        scope.map.on('popupclose', function(ctx)
            {
                var marker = ctx.popup._source;
                var point = scope.points[marker._latlng.lat + ',' + marker._latlng.lng];
                console.log("You have closed a popup of node " + point.name);
                //map.removeLayer(marker);
            }
        );
      }
    };
  });

