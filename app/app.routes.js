define('routes',function(){
    function routeConfig($locationProvider, $stateProvider, $urlRouterProvider){
        $stateProvider
        .state('home', {
            url: '/',
            template: '<home></home>',
            title: 'Home'
        });
        $urlRouterProvider.otherwise('/');
    }
    routeConfig.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
    return routeConfig;
});