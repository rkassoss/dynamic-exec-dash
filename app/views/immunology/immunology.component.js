(function () {
    'use strict';

    define('immunology',function(){

        function immunology() {

            function immunologyController(){
                var vm = this;
                
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
                controller: immunologyController,
                controllerAs: 'ic',
                templateUrl: './app/views/immunology/immunology.component.html'
            }
        }
        return immunology();
    });
} ());