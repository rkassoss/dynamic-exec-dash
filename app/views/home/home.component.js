(function () {
    'use strict';

    define('home',function(){
        function home() {
            homeController.$inject = ['qlikService'];
            function homeController(qlikService){
                var vm = this;
                vm.radioModel = 'sales'

                vm.$onInit = function() {
                  
                }
    
    
                vm.$onDestroy = function() {
                    console.log('destroy');
                }
    
                vm.$onChanges = function(changes) {
                    
                }
                
            }
    
            return {
                bindings: {},
                controller: homeController,
                controllerAs: 'home',
                templateUrl: './app/views/home/home.component.html'
            }
        }
        return home();
    });


    

} ());