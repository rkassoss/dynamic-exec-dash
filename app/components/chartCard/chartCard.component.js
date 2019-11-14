(function () {
    'use strict';


        define( 'chartCard',function () {
            
            function chartCard() {
                chartCardController.$inject = ['dataService','qlikService','$uibModal'];
                function chartCardController(dataService,qlikService,$uibModal) {
                    var vm = this;
                    var theObject;

                    vm.qsVersion = "Apr18";

                    vm.exportToExcel = exportToExcel;
                    vm.expand = expand;
       
                    function exportToExcel() {
                        vm.model.exportData()
                            .then(function(reply){
                                console.log(reply);
                                var baseUrl = (config.isSecure ? "https://" : "http://") + config.host + (config.port ? ":" + config.port : "");
                                var link = reply.qUrl;
                                window.open(baseUrl+link,'_blank');
                            });
                    }

                    function expand() {
                        var modalInstance = $uibModal.open({
                            animation: true,
                            component: 'expandModal',
                            size: 'lg',
                            resolve: {
                                qlikId: function () {
                                    return vm.qlikId;
                                }
                            }
                        });
                    }

                    function getQlikObject() {
                        qlikService.getApp()
                        .visualization.get(vm.qlikId).then(function(vis){
                            vis.show(vm.qlikId, {noSelections: true});
                            theObject = vis;
                            vm.model = vis.model;
                        });
                    }
                    
                    vm.$onInit = function() {
                        setTimeout(function() {
                            getQlikObject();
                        }, 300)
                    }


                    vm.$onDestroy = function() {
                        console.log('destroy');
                        theObject.close();
                    }


                    vm.$onChanges = function(changes) {
                        
                    }

                }
                return {
                    bindings: {
                        qlikId: '@',
                        qlikTitle: '@',
                        objectClass: '@',
                    },
                    controller: chartCardController,
                    controllerAs: 'cc',
                    templateUrl: './app/components/chartCard/chartCard.component.html'
                }
            }

            return chartCard();
        });
} ());