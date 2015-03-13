angular.module('EmpListApp')
.controller('HomeCtrl', function ($scope) {

    // Hardcoded Array of Departments & Employees
    $scope.departments = [
      {"id": 0, "name": "Design"},
      {"id": 1, "name": "Frontend"},
      {"id": 2, "name": "Backend"},
      {"id": 3, "name": "JavaScript"},
      {"id": 4, "name": "Android"},
      {"id": 5, "name": "Ios"}
    ];

    $scope.employees = [
      {"id": 0, "firstName": "Mario", "lastName": "Perić", "email": "mario.peric@comp.com", "city": "Zagreb", "department": "Ios"},
      {"id": 1, "firstName": "John", "lastName": "Marić", "email": "john.maric@comp.com", "city": "Zagreb", "department": "Android"},
      {"id": 2, "firstName": "Luka", "lastName": "Douglas", "email": "luka.douglas@comp.com", "city": "Split", "department": "Design"},
      {"id": 3, "firstName": "Maja", "lastName": "Baja", "email": "maja.baja@comp.com", "city": "Zagreb", "department": "Javascript"},
      {"id": 4, "firstName": "John", "lastName": "Doe", "email": "john.doe@comp.com", "city": "Rijeka", "department": "Design"},
      {"id": 5, "firstName": "Carl", "lastName": "Clark", "email": "carl.clark@comp.com", "city": "Zagreb", "department": "Design"},
      {"id": 6, "firstName": "Edward", "lastName": "Norton", "email": "edward.norton@comp.com", "city": "Osijek", "department": "Design"}
    ];

  });
