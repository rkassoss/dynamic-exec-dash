(function () {
    'use strict';

    define('home',function(){
        function home() {
            homeController.$inject = ['qlikService'];
            function homeController(qlikService){
                var vm = this;
                vm.radioModel = 'sales';

                vm.theraputicAreas = [
                    {
                        name:'Oncology',
                        state: 'oncology',
                        qlikid:'jTJajS'
                    },{
                        name:'Urology',
                        state:'urology',
                        qlikid:'unfjHf'
                    },{
                        name:'Cardiovascular',
                        state:'cardio',
                        qlikid: 'pFnjh'
                    }
                    
                ];

                vm.resize = function () {
                    qlikObject.resize();
                }

                vm.$onInit = function() {
                }
    
                vm.$onDestroy = function() {
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