var myApp = angular.module('myApp', []);

myApp.controller('LibrosCtrl', 
function ($scope, $http) {
    var urlLibros = 'https://www.googleapis.com/books/v1/volumes?q=' + $scope.criterio;
    
    
    $scope.cargarLibros = function () { 
        $http.get(urlLibros)
        .then(function(success){
            console.log(success.data.items[1].id);
            var test = success.data.items;
            console.log(test[1].id);
        for(var i =0; i < test.lenght; i++){
           
            console.log(test.lenght);
        }              
         
        }, function(error){
          console.log(error);
        })
    };
});

//https://www.youtube.com/watch?v=bJ5K7IERMRE