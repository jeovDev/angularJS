var application = angular.module("applications", ['ngRoute']);

application.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/home', {
    templateUrl : 'views/home.html'
  })
  .when('/directory', {
    templateUrl : 'views/directory',
    controller : 'dataController'
  })
  .otherwise({
    redirectTo: '/home'
  });
}]);

application.controller("dataController.html", [
  "$scope",
  function ($scope) {
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

    $scope.employees = [
      {
        firstname: "Jane",
        lastname: "doe",
        Age: 22,
        status: "married",
      },
      {
        firstname: "Jeovanne",
        lastname: "Lugo",
        Age: 28,
        status: "single",
      },
    ];
  },
]);
