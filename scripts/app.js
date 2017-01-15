var myapp=angular
      .module("axeish",[])
      .controller('myctrl',function($scope) {
    var myprofile = {
        firstname: "Ashish",
        lastname: "Kumar",
        Dob: "06-09-1989",
        Location: "Boston"
    };
    $scope.message = myprofile;
});