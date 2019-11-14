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
                    var modalInstance = $uibModal.open({
                        animation: true,
                        component: 'expandModal',
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
                        kpi.model.layout.showTitles = false;
                        vm.title = kpi.model.layout.title;
                        kpi.model.Validated.bind(function(){
                            kpi.model.layout.showTitles = false;
                            vm.title = kpi.model.layout.title;
                        });
                        if (vm.miniChart) {
                            qlikService.getApp().visualization.get(vm.miniChart).then(function(chart){
                                chartObject = chart;
                                chart.model.layout.showTitles = false;
                                chart.model.Validated.bind(function(){
                                    chart.model.layout.showTitles = false;
                                });
                                chart.show(vm.miniChart, {noSelections: true});
                            });
                        }
                        kpi.show(vm.mainKpi, {noSelections: true});
                    });
                }

                vm.$onInit = function() {
                    setTimeout(function() {
                        getObjects();
                    }, 300);
                }

                vm.$onDestroy = function() {
                    kpiObject.close();
                    if (chartObject) chartObject.close();
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