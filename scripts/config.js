(function() {
    angular
        .module("Axeish")
        .config(function ($routeProvider) {
            $routeProvider
                .when("/",
                    {
                        templateUrl: "views/dir.html",
                        controller: "Appcontroller"
                    })

                .when("/resume",
                    {
                        templateUrl: "views/resume/resume.html",
                        controller: "ResumeController"
                    })
                .when("/projects",
                    {
                        templateUrl: "views/projects/projects.html",
                        controller: "ResumeController"
                    })
                .when("/art",
                    {
                        templateUrl: "views/art/art.html",
                        controller: "ArtController",
                        controllerAs: 'ctrl'

                    })
        })
    })();