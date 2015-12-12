(function() {
    'use strict';

    angular.module('personalApp', [
        'ngMaterial',
        'ui.router',
        'app.nav',
        'app.pages'
    ]);

})();

/* Config: AppConfig */
(function() {
    'use strict';

    angular.module('personalApp').config(config);

    config.$inject = ['$urlRouterProvider'];

    function config($urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
    };

})();