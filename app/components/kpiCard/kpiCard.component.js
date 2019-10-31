(function () {
    'use strict';

    define('kpiCard',function(){
        function kpiCard() {
            kpiCardController.$inject = ['qlikService','$uibModal'];
            function kpiCardController(qlikService,$uibModal){
                var vm = this;
                var kpiObject, chartObject;
                vm.expand = expand;

                function expand() {
                    console.log(vm.miniChart);
                    var modalInstance = $uibModal.open({
                        animation: true,
                        component: 'expandObject',
                        size: 'lg',
                        resolve: {
                            qlikId: function () {
                                return vm.miniChart
                            }
                        }
                    });
                }

                function getObjects() {
                    qlikService.getApp().visualization.get(vm.mainKpi).then(function(kpi){
                        kpiObject = kpi;
                        kpi.show(vm.mainKpi);
                        qlikService.getApp().visualization.get(vm.miniChart).then(function(chart){
                            chartObject = chart;
                            chart.show(vm.miniChart);
                        });
                    });
                }

                vm.$onInit = function() {
                    setTimeout(function() {
                        getObjects();
                    }, 300);
                }

                vm.$onDestroy = function() {
                    mainObject.close();
                    chartObject.close();
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