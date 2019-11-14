(function () {
    'use strict';

    define('expandModal', function(){


        function expandModal() {
            expandModalController.$inject = ['qlikService','$uibModal'];
            function expandModalController(qlikService, $uibModal){
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
                        { noSelections: true }).then(function(vis){
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
                controller: expandModalController,
                controllerAs: 'em',
                templateUrl: './app/components/expandModal/expandModal.component.html'
            }
        }
        return expandModal();
    });

} ());