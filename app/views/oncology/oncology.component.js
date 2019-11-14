(function () {
    'use strict';

    define('oncology',function(){

        function oncology() {
            oncologyController.$inject = ['qlikService','$uibModal'];
            function oncologyController(qlikService,$uibModal){
                var vm = this;
                vm.activeProduct = null;
                vm.products = [
                    {
                        name: "Xtandi",
                        mainKpis: [
                            {
                                kpi: "XgRKXN",
                                chart: "xzpTKPz"
                            }, 
                            {
                                kpi: "YUvqwT",
                                chart: "YhtnkNc"
                            }
                        ],
                        hiddenKpis: ["unfjHf","pFnjh"],
                        hiddenCharts: ["DmGqm","mpzBxZx","jNfJdS"]
                    },
                    {
                        name: "Tarceva",
                        mainKpis: [
                            {
                                kpi: "jTJajS",
                                chart: "epFtmk"
                            }
                        ],
                        hiddenKpis: [],
                        hiddenCharts: ["BmfQbz","mVPztHm","NeLVr"]
                    },
                    {
                        name: "Xospata",
                        mainKpis: [
                            {
                                kpi: "hmbZUQ",
                                chart: "nvqpV"
                            }
                        ],
                        hiddenKpis: [],
                        hiddenCharts: ["NaKQwM","ZxDKp","ARNmpdM"]
                    }
                ];

                vm.expand = function(qlikId){
                    console.log(qlikId);
                    var modalInstance = $uibModal.open({
                        animation: true,
                        component: 'expandModal',
                        size: 'lg',
                        resolve: {
                            qlikId: function () {
                                return qlikId;
                            }
                        }
                    });
                }

                vm.handleObjects = function(productIndex) {
                    console.log(vm.activeProduct, productIndex);

                    vm.hiddenObjects = vm.products[productIndex].hiddenKpis.concat(vm.products[productIndex].hiddenCharts);
                    
                    // remove existing objects, open relevant only to activbe product.
                    // fix - right now allobjects are being called
                    if(destroyableObjects.length){
                        _.each(destroyableObjects, function(model){
                            console.log('destorying object', model);
                            // model.close();
                        });
                    }

                    _.each(vm.hiddenObjects, function(a){
                        qlikService.getApp()
                        .visualization.get(a).then(function(vis){
                            console.log('getting object', vis);
                            destroyableObjects.push(vis);
                            console.log(destroyableObjects);
                            vis.model.layout.showTitles = false;
                            vis.model.Validated.bind(function(){
                                vis.model.layout.showTitles = false;
                            });
                            vis.show(a, {noSelections: true});
                        });
                    });
                }
                
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