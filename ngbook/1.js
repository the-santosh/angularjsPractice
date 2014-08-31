var app = angular.module('app', []);

app.controller('appController', function($scope) {
    $scope.firstName = 'Santosh';
    $scope.$watch('lastName', function(newVal, oldVal){
        console.log('newVal='+newVal+'  oldVal'+oldVal);
    });
    
    setTimeout(function(){
        $scope.lastName  = 'Sonarikar';
        $scope.$digest();
    }, 1000);
});
