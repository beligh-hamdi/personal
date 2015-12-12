(function() {
    'use strict';

    angular.module('app.nav', [
        'ngMaterial',
        'ui.router'
    ]);

})();


/* Controller: NavController */
(function() {
    'use strict';

    angular.module('app.nav').controller("NavController", NavController);

    NavController.$inject = ['$mdSidenav'];

    function NavController($mdSidenav) {
        var vm = this;
        vm.close = close;
        vm.toggleLeft = buildToggler('left');
        vm.isOpenLeft = isOpenLeft;
        vm.title = 'Sessions';

        function close() {
            $mdSidenav('left').close().then(function () {});
        };


        function buildToggler(navID) {
            return function() {
                $mdSidenav(navID).toggle().then(function () {

                });
            }
        }

        function isOpenLeft() {
            return $mdSidenav('left').isOpen();
        }

    }

})();