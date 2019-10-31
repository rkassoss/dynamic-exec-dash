(function () {
    'use strict';

    define('infectious', function(){


        function infectious() {

            function infectiousController(){
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
                controller: infectiousController,
                controllerAs: 'ic',
                templateUrl: './app/views/infectious/infectious.component.html'
            }
        }
        return infectious();
    });

} ());