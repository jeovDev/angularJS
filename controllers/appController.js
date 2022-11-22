// const angular = require("angular");

var application = angular.module("applications", ['ngRoute']);

application.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){
  $routeProvider
  .when('/home', {
    templateUrl : 'views/home.html'
  })
  .when('/directory', {
    templateUrl : 'views/directory.html',
    controller : 'dataController'
  })
  .otherwise({
    redirectTo: '/home'
  });
}]);

application.controller("dataController", [
  "$scope","$http",
  function ($scope,$http) {
    $scope.submitForm = function () {
     
        $scope.employees.push(
          {
            firstname: $scope.newfirstname,
            lastname: $scope.newlastname,
            Age: parseInt($scope.newage),
            status: $scope.newstatus,
          }
        );
        
        $scope.newfirstname = "";
        $scope.newlastname = "";
        $scope.newage = "";
        $scope.newstatus = "";
    
    };
 
$http.get('data/employees.json').then(function(response){
  $scope.employees = response.data;
  console.log(response.data);
});

    // $scope.employees = [
    //   {
    //     firstname: "Jane",
    //     lastname: "doe",
    //     Age: 22,
    //     status: "married",
    //   },
    //   {
    //     firstname: "Jeovanne",
    //     lastname: "Lugo",
    //     Age: 28,
    //     status: "single",
    //   },
     
    // ];
    // console.log(angular.toJson($scope.employees));
  },
]);
