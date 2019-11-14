define('routes',function(){
    function routeConfig($locationProvider, $stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');
        $locationProvider.hashPrefix(''); 
        $stateProvider
        .state('home', {
            url: '/',
            template: '<home></home>',
            title: 'Astellas Pharma US'
        })
        .state('oncology', {
            url: '/oncology',
            template: '<oncology></oncology>',
            title: 'Oncology'
        })
        .state('urology', {
            url: '/urology',
            template: '<urology></urology>',
            title: 'Urology'
        })
        .state('cardio', {
            url: '/cardio',
            template: '<cardio></cardio>',
            title: 'Cardiovascular'
        })
        .state('immunology', {
            url: '/immunology',
            template: '<immunology></immunology>',
            title: 'Immunology'
        })
        .state('infectious', {
            url: '/infectious-disease',
            template: '<infectious></infectious>',
            title: 'Infectious Disease'
        });
    }
    routeConfig.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
    return routeConfig;
});