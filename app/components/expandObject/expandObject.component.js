(function () {
    'use strict';

    define('expandObject', function(){


        function expandObject() {
            expandObjectController.$inject = ['qlikService','$uibModal'];
            function expandObjectController(qlikService, $uibModal){
                var vm = this;
                var object;

                vm.closeModal = closeModal;
                
                function closeModal() {
                    vm.dismiss({$value: 'cancel'});  
                }

                vm.$onInit = function () {
                    console.log(vm.resolve);
                    qlikService.getApp().getObject(
                        document.getElementById('modal_object'),
                        vm.resolve.qlikId,
                        { noInteraction: false, noSelections: true }).then(function(vis){
                        console.log(vis);
                        object = vis;
                        vm.title = vis.layout.title;
                    });
                    qlikObject.resize();
                };

                vm.$onDestroy = function() {
                    vm = null;
                    object.close();
                }
            }

            return {
                bindings: {
                    resolve: '<',
                    close: '&',
                    dismiss: '&'
                },
                controller: expandObjectController,
                controllerAs: 'eo',
                templateUrl: './app/components/expandObject/expandObject.component.html'
            }
        }
        return expandObject();
    });

} ());