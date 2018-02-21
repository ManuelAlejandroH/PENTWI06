var myApp = angular.module('myApp', []);

myApp.controller('LibrosCtrl', 
function ($scope, $http) {
    var urlLibros = 'https://www.googleapis.com/books/v1/volumes?q=isbn:9780262140874';
    
    
    $scope.cargarLibros = function () { 
        $http.get(urlLibros)
        .then(function(success){
          $scope.libro = success.data.kind;
        }, function(error){

        })
    };
});