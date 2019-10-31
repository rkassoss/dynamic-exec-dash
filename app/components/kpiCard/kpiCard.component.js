(function () {
    'use strict';

    define('kpiCard',function(){
        function kpiCard() {
            kpiCardController.$inject = ['qlikService'];
            function kpiCardController(qlikService){
                var vm = this;
                var mainObject;
                var objectsToDestroy = [];


                function getMainKpi() {
                    qlikService.getApp().visualization.get(vm.mainKpi).then(function(vis){
                        mainObject = vis;
                        vis.show(vm.mainKpi);
                    });
                }

                vm.$onInit = function() {
                    setTimeout(function() {
                        getMainKpi();
                    }, 300);
                }

                vm.$onDestroy = function() {
                    mainObject.close();
                }
            }
    
            return {
                bindings: {
                    mainKpi: '@',
                    miniChart: '@',
                    styleAtt: '@'
                },
                controller: kpiCardController,
                controllerAs: 'kc',
                templateUrl: './app/components/kpiCard/kpiCard.component.html'
            }
        }

        return kpiCard();
    });


    

} ());