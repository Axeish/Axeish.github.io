(function () {
    'use strict';

    angular
        .module('Axeish')
        .controller('ArtController', Controller)
        .controller('ModalInstanceCtrl', Instance);

    function Controller($uibModal , $log) {
        var ctrl = this;
        ctrl.items = ['item1', 'item212', 'item3'];

        ctrl.folkishitem= ["https://lh3.googleusercontent.com/kvnKsSa2mcEm3k7cLp8YtEl_OazKgKBK-Gt0DEKJqaog6SnyYT"+
        "gRptsDzJE8zEVe_0hvxNZNeV-JSxEasvN04VCeh4g3BVFOewjQvLeUTUbMc-JdR9b4c-oYhsc9K4SOoDRZQQ",
            "https://lh3.googleusercontent.com/ijh9-mtB3u_HS_T0XdxV0xW2Jm-HRCJClVVl4pWyLXK2S5XXthyBLZ4wN6F3TpBqZZ"+
            "PGk0iVTdIOiapjzszk-NXayGmj3jg_9rK55xALAXDqPRHRVCwfZkRBCuhtClPFHmKAUA",
            "https://lh3.googleusercontent.com/038MSse9t2z7KfdBgR0boSBtnamRXdMYE_2LopCH6ZTs2bYwh1GsUL-qlziL5qRyJ9C"+
            "Gd-1Ge8LOJo8ApXG9NQqBx74bxrOTJvSGEm9Cu0PbD0wiamqU0enighGehm3um8Ea-A",
            "https://lh3.googleusercontent.com/ROiAibG8v-8JWed309oMfw8NHeDwelgG4PJg5wwJYUfQABUHYEes7Kih1cI3VTRju9B1"+
            "4u2PFcepSZq2xbggqPRGL1xjQpeO6Ie9LwlzeVMYiWTZk8EQmYtIKxzcGb0gKiDBjw",
            "https://lh3.googleusercontent.com/nbSZuGJaz9qFT3yHjxiJX_xn8E-BSDLjW4AW30Jhl8xPNRhB6tejVA0p6l4dRnN_Ro2fa"+
            "rdehh5hDPAr4aM11mCv58epqEPcIqtW4QXyMiI-kFO7lI3Lc_wHPKjS3L8Cdxlxgw",
            "https://lh3.googleusercontent.com/ZH0vDhMtfN5p5BkkG42QH4dJSaS1UyVAMXxv8xbZtXM2HF_eSCn5ZnTkI-vGYMZlwDHCnC"+
            "Vz6dzzRd3k-CZoGW6G5ZFkJhvG2aU9Q76h-7zrVFemuoHWqQgGd_f_KPw8IVc4Bg",
            "https://lh3.googleusercontent.com/ZxG6kCDQZse_qb06keXXX-Jk3iUOiIHVtVIGPwtzn1OXak3AH8iBOkEZ-nqTQjEe0V-L-y1"+
            "jBx8qMFK5lMJPG_TBaeQHCXur5htzaPAdeA4Vux11PLgWW4xnCD0i975mPICY3g",
            "https://lh3.googleusercontent.com/HgIK56ezr_c5836s5B-jNymT8shZImmisxYxxabPh9cubYpClU3xstxC64QG33leh"+
            "RMbOio_SPNPBa9bqLM1bucb_z6yFtjsZyjjfB4bl8JW4PO_2BLB6ZqadDQBJvYtGgEeRg",
            "https://lh3.googleusercontent.com/CfVZR3rRZ3o1N5_dBnjXSV1UzU7oN3p7gywLfQ6yZnEoWe_Ky3WZC_c-804JbIkX"+
            "-Q7HOmYseIw1K872L8D9oc31eEBRHnvyFCiVnn8BNo30nJhe6yqSOwtrrrzYJaBTbzdFSg"


        ];

        ctrl.quillitem = [
            "https://lh3.googleusercontent.com/h9W4EA0ciMKbabtEItANwQzqBaIVdxg0zJ5ilr_rv93rJHWyvaE-wIflUV3kgcRUD2s3O6"+
            "8qoYaMFaF09M30neoS98q_BWypPCQwpW08zBXk9b6H3FKSBVsb9KlORuAZgq1EEQ",
            "https://lh3.googleusercontent.com/v7Vs1nZQRj8JAqTJxNhBb04ufBJdYVvEIxY49XsbkxePrniI1sdP04pmXUjvQm5TM1-YErv"+
            "YpKR5-PJUbKRITcWsAj_1RHCke72qxF2paDqyNfnJadODsOV8IyPxma5jCT43jg",
            "https://lh3.googleusercontent.com/6KZIxpaJiinEbIcCeWkAirrUFHwmy-LYzVN-pg491MU9jXrzit-JxRK-Nwjohdus34weVhG"+
            "G5AcfiQ6z8NaZNbq3VG6T7VJFsVFSrqBYEUoFEoN0ymTmaLx5RoP3yCUOIvpqXA",
            "https://lh3.googleusercontent.com/UBiGugpUh-2XmmSBIVb3Yn-H9F0OItbaFp5QvTBLcgZ7yEAfIZZ6dXMtqn9PMAoncgeBUmr"+
            "_RKD5C335lnlyhr2_QjXu7cTUc19A2icvLPqs1i5A6YYwsBCFStL5bLxt73UKUw",
        ];

        ctrl.artitems=shuffleArray(ctrl.folkishitem.concat(ctrl.quillitem));

        ctrl.arttitle = "All Works";

        ctrl.listctrl = function (tag) {
            if (tag=='f'){
                 ctrl.artitems = shuffleArray(ctrl.folkishitem);
                 ctrl.arttitle ="Folk Art Illustration(Vector)";
            }
            if (tag =='q'){
                ctrl.artitems = shuffleArray(ctrl.quillitem);
                ctrl.arttitle =" Quilling Paper Craft";
            }
            if (tag =='A'){
                ctrl.artitems = shuffleArray(ctrl.folkishitem.concat(ctrl.quillitem));
            }
        }

        ctrl.animationsEnabled = true;

        ctrl.open = function (link,id) {
            var parentElem = undefined;
            var modalInstance = $uibModal.open({
                animation: ctrl.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: link,
                controller: 'ModalInstanceCtrl',
                controllerAs: 'ctrl',
                size: 'lg',
                appendTo: parentElem,
                resolve: {
                    id: function(){
                        return id;
                    },
                    artitems: function () {
                        return ctrl.artitems;
                    },
                    arttitle: function(){
                        console.log(ctrl.arttitle);
                        return ctrl.arttitle;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                ctrl.selected = selectedItem;
                /*ctrl.arttitle = arttitle;*/
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };





    }
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    function Instance($uibModalInstance, artitems, arttitle, id){
        var ctrl = this;
        ctrl.arttitle = arttitle;
        ctrl.id =id;
        ctrl.artitems = artitems;
        ctrl.selected = {
            item: ctrl.artitems[0]
        };
        ctrl.prev= function(){
             ctrl.id = (ctrl.id-1 + ctrl.artitems.length)%ctrl.artitems.length;
             console.log("inside prev function");
             document.getElementById("show").src = artitems[ctrl.id];
        };
        ctrl.next=function(){
            ctrl.id = (ctrl.id+1 + ctrl.artitems.length)%ctrl.artitems.length;
            console.log("inside prev function");
            document.getElementById("show").src = artitems[ctrl.id];
        };
        ctrl.ok = function () {
            $uibModalInstance.close(ctrl.selected.item);
        };

        ctrl.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }

})();