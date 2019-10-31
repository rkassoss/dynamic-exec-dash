(function () {
    'use strict';

    define('cardio', function(){

        function cardio() {

            function cardioController(){
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
                controller: cardioController,
                controllerAs: 'cc',
                templateUrl: './app/views/cardio/cardio.component.html'
            }
        }
        return cardio();
    });

} ());