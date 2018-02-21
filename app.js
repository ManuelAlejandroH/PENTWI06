var myApp = angular.module('myApp', []);

myApp.controller('LibrosCtrl', 
function ($scope, $http) {
    var urlLibros = 'https://www.googleapis.com/books/v1/volumes?q=' + $scope.criterio;
    var titulo = '';
    
    $scope.cargarLibros = function () { 
        $http.get(urlLibros)
        .then(function(success){
     
           
               $scope.titulo = success;
         
        }, function(error){

        })
    };
});

//https://www.youtube.com/watch?v=bJ5K7IERMRE