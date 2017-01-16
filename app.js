angular.module("Axeish",["ngRoute"])


/*
(function () {
    angular.module("axeish")
        .config(function ($routeProvider) {
            $routeProvider
                .when("/jio",
                    {
                        templateUrl: "views/dir.html",
                        controller: "Appcontroller"
                    })

                .when("/resume",
                    {
                        templateUrl: "views/resume/resume.html",
                        controller: "ResumeController"
                    })
                .when("/art",
                    {
                        templateUrl: "views/art/art.html",
                        controller: "ArtController"

                    })
        })
*/
        .controller("ResumeController",function($scope){
            $scope.message = "askol";
        })
        .controller("ArtController",function($scope){
            $scope.message ="art askol";
        })
        .controller("Appcontroller",function($scope){
            var myprofile = {
                firstname: "Ashish",
                lastname: "Kumar",
                Dob: "06-09-1989",
                Location: "Boston",
                Profile: "Images/az.jpg"
            };
            $scope.message = myprofile;
        });

/*
})();*/
