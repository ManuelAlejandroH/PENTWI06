var myApp = angular.module('myApp', []);

myApp.controller('LibrosCtrl', 
function ($scope, $http) {  
    
    $scope.cargarLibros = function () { 
        
        var urlLibros = 'https://www.googleapis.com/books/v1/volumes?q=' + $scope.criterio;
        $http.get(urlLibros)
        .then(function(success){          
        $scope.titulos = success.data.items;  
        
        for(var i =0; i < success.data.items.length; i++){           
            console.log(success.data.items[i].volumeInfo.title);
        }              
         console.log($scope.titulos);
        }, function(error){
          console.log(error);
        })
    };
});