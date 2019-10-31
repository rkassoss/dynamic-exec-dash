(function () {
    'use strict';

    define('urology', function(){


        function urology() {

            function urologyController(){
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
                controller: urologyController,
                controllerAs: 'uc',
                templateUrl: './app/views/urology/urology.component.html'
            }
        }
        return urology();
    });

} ());