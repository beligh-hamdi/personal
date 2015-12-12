(function() {
    'use strict';

    angular.module('app.pages', [
        'ngMaterial',
        'ui.router'
    ]);

})();


/* Config: PagesConfig */
(function() {
    'use strict';

    angular.module('app.pages').config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "app/modules/pages/home.html",
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .state('about', {
                url: "/about",
                templateUrl: "app/modules/pages/about.html"
            });
    };

})();



/* Controller: HomeController */
(function() {
    'use strict';

    angular.module('app.pages').controller("HomeController", HomeController);

    HomeController.$inject = ['$timeout'];

    function HomeController($timeout) {
        var vm = this;
        vm.search = search;
        vm.title = 'Sessions';
        vm.todos = [];

        function search() {
            /* */
        }


        pushList();

        function pushList(){
            var imagePath = "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/2/000/0c9/20e/1c64c6c.jpg";
            for (var i = 0; i < 50; i++) {
                vm.todos.push({
                    face: imagePath,
                    what: "Brunch this weekend?",
                    who: "Min Li Chan",
                    notes: "I'll be in your neighborhood doing errands."
                });
            }
        }

    }


})();








