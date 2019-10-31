(function () {
    'use strict';

    define('oncology',function(){

        function oncology() {

            function oncologyController(){
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
                controller: oncologyController,
                controllerAs: 'oc',
                templateUrl: './app/views/oncology/oncology.component.html'
            }
        }
        return oncology();
    });

} ());