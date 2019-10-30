(function () {
    'use strict';

    define('home',function(){
        function home() {
            homeController.$inject = ['qlikService'];
            function homeController(qlikService){
                var vm = this;
                
            }
    
            return {
                bindings: {},
                controller: homeController,
                controllerAs: 'home',
                templateUrl: extPath + '/app/views/home/home.component.html'
            }
        }
        return home();
    });


    

} ());