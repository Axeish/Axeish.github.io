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
            "-Q7HOmYseIw1K872L8D9oc31eEBRHnvyFCiVnn8BNo30nJhe6yqSOwtrrrzYJaBTbzdFSg",
            "https://lh3.googleusercontent.com/XxT7OKwWAl-l4dGc8COWvhWctRVIPn7RNAdH_1VmRmnrjJeeWKbvrtwaGHbKdjP"+
            "_8DeUyr67VBwCoL9d4toxQZsw55OLHKLpXOFPmdMrhQ0SK-L4uKCr2xYXANFmi9Sbz01yvw"


        ];

        ctrl.quillitem = [
            "https://lh3.googleusercontent.com/h9W4EA0ciMKbabtEItANwQzqBaIVdxg0zJ5ilr_rv93rJHWyvaE-wIflUV3kgcRUD2s3O68qoYaMFaF09M30neoS98q_BWypPCQwpW08zBXk9b6H3FKSBVsb9KlORuAZgq1EEQ",
            "https://lh3.googleusercontent.com/v7Vs1nZQRj8JAqTJxNhBb04ufBJdYVvEIxY49XsbkxePrniI1sdP04pmXUjvQm5TM1-YErvYpKR5-PJUbKRITcWsAj_1RHCke72qxF2paDqyNfnJadODsOV8IyPxma5jCT43jg",
            "https://lh3.googleusercontent.com/6KZIxpaJiinEbIcCeWkAirrUFHwmy-LYzVN-pg491MU9jXrzit-JxRK-Nwjohdus34weVhGG5AcfiQ6z8NaZNbq3VG6T7VJFsVFSrqBYEUoFEoN0ymTmaLx5RoP3yCUOIvpqXA",
            "https://lh3.googleusercontent.com/UBiGugpUh-2XmmSBIVb3Yn-H9F0OItbaFp5QvTBLcgZ7yEAfIZZ6dXMtqn9PMAoncgeBUmr_RKD5C335lnlyhr2_QjXu7cTUc19A2icvLPqs1i5A6YYwsBCFStL5bLxt73UKUw",
            "https://lh3.googleusercontent.com/WGzIMa8VSfmXhCKTnM6yP027PN6m89mVmPcaitwmutGrU3aK5hsXCgIuf2mDTTVAjaWgOS2qNql7hwxFEEUkBnMRie2YonWMM6M1T_s4ENK4UGgn98FspoBsJe_i_2uhmE0vAA",
            "https://lh3.googleusercontent.com/pDRdQJXo70Xu3MNBjC0DQivc52tVUnT8k4FHJhecgclkAkSo05VRvh_JxOtAjlK-lxaJ3j1pA7iQvMY8ur4mFsSyL03GLsZ6N-F3J6sCDp9bZoa55YQE7Jl5TjCX9I9x_SRjaA",
            "https://lh3.googleusercontent.com/Vr-pTUmR0GDvi783zACj7WBli78SlHyvFChNGN23nEBQrmteajLFi4b4TT2_MpqifUkRE4bT8b-uy8DZ1Ovt1_SbOrFtFDQTpxBXfUXQVOLGZrHV2WG_fX_MXk6NXe2PGSaGkg",
            "https://lh3.googleusercontent.com/9YOZRUi_T-lFs55h1nFMeD_5xQE5ZpZmXyeUprAIb-uId4NcmPly47Hz7iaUXZznOPcYzYQVc8E0a0QDujSYqHWDFlPK6DpUGuw58oRTCLdxT44MiZSBYVNCJWRwTRHk02_7mA",
            "https://lh3.googleusercontent.com/kMLoI3TnXMOfzawghOFHuaMLOj3pnsaZA0jna6wJ0mrPaKPiuS-TCtElwhc7a1XPwfOP-GBNuz7TJGB_WxtWt85kzrZ1zxtYQdcY5yvk8ISC4jqaPcpJTy_QDIV7N31ddUZ8Ug",
            "https://lh3.googleusercontent.com/ajRr8iu4mKmK9XLwZ3Vysz5aPzycm4TfuYcbZaPJGoOY8X9cTmHE4cfJdq2TGnJ90P3MyRjH_uGBLRPMQmbWeqbkdVIUawktmPi40_hbl1B5fxFOprT5zQ01g29XqpkermGO8g",
            "https://lh3.googleusercontent.com/Q2K1CaMT7Q-WKsOId8SD4gZeS7lwB53z8yUXYISHYIOtEIdDgtElbJysCxl-kY60IsbnMLJzIaVaQeCEJFcu7AXYdhiJhJlEbBVgMfLZP9vVWRH0aG0gbnhTRwdKcfvxKCnqkw",
            "https://lh3.googleusercontent.com/_PEcHXRHG_3p6tVnk4c6E5o1BNQjuHJWvLVvXmEbx8WDzMhVaLfRi9ROtvmCBWPs7qZqPf1HW_Z-IfPaE5JWqtkapePzErZlSBdfNr0LlBAGNZXCQie-E2KdQTUcgoFnICXAZg",
            "https://lh3.googleusercontent.com/E4D1VAava8EjdHlwphNMphY04oGdqamzJZ2W4wikDnLqbGmY8j0Q1ZToDse04KQ2y-0GxmF68i7VLXbZa12ajoGeRzLGEur-r0AtN7B_CdC8T8Nr7ZZctnJtyyyasTnm-QCMQw",
            "https://lh3.googleusercontent.com/Qsq0BctPBU-pRXvzytTyoxDB9P2gRNXmHPNAX74cRKnlHO4oB7iD9GAwusJL7-dgn3i_6al1OxHK6dDnPao1ScWXVIVkIQ8gRWnUz0hf5QbChbKfI1Z4KEwQ4g9pfp5mH6GoPA",
            "https://lh3.googleusercontent.com/lZIYS6dGJQPYm6TMZzTwepshB3JuRaSr7SL6gTiCEmJM2KPzJD9BZ2xVtZ7_pjH_E2KjMVqHvImyNCLIvMZFqS2LgFzjTXHhf-EdqVvTTkxA1XWyXels16BcFTWFoYdl1Ivc_w",
            "https://lh3.googleusercontent.com/qsXuVym2yGw-p_CS-OpnOwk5lP1FgNcwZCpRQVN6o6JPTD7ByfVg_OWN1qL0EpsdLqQy1IqLq0srKoejvCDSImyRBaUxA16mmDrdv6YIhZmoqBMx5Az08enRfhgZnUb1-yfD4w",
            "https://lh3.googleusercontent.com/rUIZeetSMKHSKSt6Y60VDSTIdjkhBoP09qVK7UbTQ2Y7vM58NwZg8YEegVFyEbCRvhz-gfhGM-TyTb6_GEgRskLiLt2F44A8PaCAl_gn2n4ssiugz1JL-zfpnqKqSfwQ4GGOpA",
            "https://lh3.googleusercontent.com/W7lgfIO14c39UWLaVSvm31mcDOz25eblinI0YPPlodPgc-ItHMMEjtxFc7BU-WtUPrS2qZhJDG_EFWu5QWp8oARoruD075DZGJ5Yx572GM-93rr5Fo_ZrM0Q5lIljFt2W0IWgQ",
            "https://lh3.googleusercontent.com/-SZpRJYkQ8Ij6wxTNxcqw_c3UMyn8JFkaj7y0i4fOxLr1Z7OKm_3qIMAG2sqzYj7djBk7asZ4Fmu4ojg5uphq7o0COVugw69iro_ZEfz8Z12T2IisCiIL872362LgrQkAh0vmg",
            "https://lh3.googleusercontent.com/39e9wElDjLRPm-gEwfuD-3X8Yx9BvvWXax2LiPTexdBc-WK9nGDcihua3CkYqk-a1lTz8LVrA4A8XRV9flfz4FscLuzNmnKEbfALYJNXtRquHZe5fmsEqnOwCzKchzn-yCUGFw",
            "https://lh3.googleusercontent.com/0tHPbdrlmUnnq26RdJjJseNmK7wKx9XQenMa-V7yfLEA0a9DS9oKn97zL8l8aOxzC4EPM3XCxWQXbUVdpmzaXR0ijMiETzelXARmKVqxvF5sejuLubp141--WLX0CKsOmrhlkA",
            "https://lh3.googleusercontent.com/9-zg98rCNCesnGueT5Ylz3DJQwv2lCO9NqCtS3f6Fq9fNft3evFWa1CGCCC9ZXfQCYvUW6Um8mpxsj5h_lBwR0wiBpyxryLGQ9LalorJMTfkYeojYaNgSAe83ZVTWgdljjJzHg",
            "https://lh3.googleusercontent.com/0UCuOwKyjznfdOt5Uzzl2kpXhXlYyzt0AEuiEMDLQzVNebYiZK73WZEMhmTlwFlUb_j9d-EdrnIh4cdH4dErwEaEOvHIm2xyQK1syHlWpKwhZh4lw14voudyY4Q5Y5mntt-OjA",
            "https://lh3.googleusercontent.com/2gi3D_AfwmnE-krGvYCE_enbaaD9VNcD-qSPNlJM_XSYjcekrVtXRt2_Xa7XszI7ZflIc__7QN92rSPLNeaRNAoiHR2D8YDMvR_2IXxXKDtCuRrk0kiGvVLiIe3DsAOMAaAoQA",
            "https://lh3.googleusercontent.com/D-x7XA2cu6epnj2kYgrXqlLeJGDbXdoH6wbs7iUtUr00-qHW9cZnyGzxfz8pz-9HnKabqaPJtn4bpd-clDKELuUkWBO8AqvRe2cGy6GBtDn-b6LwzHsromzC7TNy8MZ9dHJxSw",
            "https://lh3.googleusercontent.com/TPokVTNx3CpIK4DTXOHQN46swb9iC8DHvURHKWChluYydSGSUuqja6XDY3itP4AoQyghDXHZtZ97gnssp5qgBrWbKvr3J3eOT618dF5_FBkVOFNi-jKHfuK9wtcPMXQPDWDzrQ",
            "https://lh3.googleusercontent.com/zRoMAUVvsS407s2lzytd9WteWSJUTZqnZq79B1lPqn5pfHPVoB9iab4mQFQ5CpJMq1yj5iEgiEWoiOPw0lWroE3iX4kZyIXhp68FAW9WfKu-nmIx4PTq3NOiZckoXojNw5MC7w",
            "https://lh3.googleusercontent.com/MderiSEfZ7f3qMQSSxgWR7PRi6GaJi-03Usgv1ZwBB1DZBN7k_8OsVEv67YUBj5dICrEWB5sXsV07L2z82uHa6-VJqXPvACQzWTml21UMdhyuZGSm4OZ_GhppDjXiujqxU_dVA",
            "https://lh3.googleusercontent.com/C--LNgZ8Z3zS6Tuwfo-JJyUw5jalEM94_AH_gA6GS4X__pWdTgYt7of65LS-o66JlXKLQLQmJkLv141Qd-BabmqFOgtT33MdesO8BKfDnC3ZZs3lf0kZnQqULsPVnXjLjSP87Q",
            "https://lh3.googleusercontent.com/DeyV69Feh7-kmtWMeUBA3OTAd3CVPLzVnkMu5ILGROkz8Z4_WAe5ip3T4rgalxvy0qY_1BOqFKFGAnH0RGbRd1ZHx7CDBoThcm5BFjGrqh8xqYfT7xgBij9ilausQLSTTINtNg",
            "https://lh3.googleusercontent.com/wm5mImIMlAeAE1debyFXEbKkXW7wUznkaS_SBuEZjdJbvGvd7e2e-3S3Eo2hmF-xKE1kytmuMADgo_InMCuFDwGRocSWVreHVYuabHicBxE0vBI1xrHK1BzYNUxHbE_LVAopFQ"
        ];

        ctrl.digital = [
            "https://lh3.googleusercontent.com/1QTSax3cLscyw2eh2mLTTkYLguYzGYLT69ATIHQq8kk9KJkj7pqD81uwOFqnkgVP5E4ixCODWbboNMAKBUpEa-EqGMqJ6KFQPmHwSTSZEstY9lZl1-y27vlBXQrtci4oQ070sA",
            "https://lh3.googleusercontent.com/G4P_BLe0EdPx17Xc0-_GnOqhyuoNj9QiyGqWAxehd3Cb_PC-E5F39rYJN-mt8-7Kl5K5IaHa-V6_9QvwVqlt1NQoqbPJRQlUHXohpgCkkNnUlQr26o1fmeCPzkYW94CqztzYBQ",
            "https://lh3.googleusercontent.com/tuezXmZ4DyLc8m7Pi9iAt3djbtTIYUaddI8j7Gl4LGIWe3vqAXKl1YJr6tLkXCXwU-IDfoI0EXBaaf9YJ1x47mpq-rX7aN-gd672FsFqGbXsNMk74ZMVKwPEcF_RQj4ANLv4pw",
            "https://lh3.googleusercontent.com/y8l1-MQE_m6mU2t-G11qUfYPOF6SbQEIQdJQq6078jgI8m-qI-SV1dmXeN_qsEeOwErWngvl7BntooEfNutd9wgxwQFCO_pyANenojKR8L9-bnekFONZC_Gl_2ZhMekvto6n8Q"
        ]

        ctrl.artitems=shuffleArray(ctrl.folkishitem.concat(ctrl.quillitem));
        ctrl.artitems.unshift(ctrl.digital[2]);

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
                ctrl.artitems.unshift(ctrl.digital[2]);
                ctrl.arttitle ="All of my Artworks";
            }
            if (tag =='d'){
                ctrl.artitems = shuffleArray(ctrl.digital);
                ctrl.arttitle ="Digital Painting";
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