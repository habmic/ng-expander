/**
 * Created by HaberMic on 3/30/15.
 */
angular.module('angular-expander',[]);

angular.module('angular-expander').directive('expander', function(){

    return {
        restrict: 'E',
        transclude: true,
        template: '<div ng-click="toggle()">{{angular_expander_title}} <ng-transclude ng-show="showMe"></ng-transclude></div>',

        link: function(scope, element, attrs) {
            scope.showMe = false;
            scope.toggle = function toggle() {
                scope.showMe = !scope.showMe;
            }

            if( attrs["show"] == "true" || attrs["show"] == "True"){
                scope.toggle();
            }

            if(attrs["title"]){
                scope.angular_expander_title = attrs["title"];
            }
        }
    };
});