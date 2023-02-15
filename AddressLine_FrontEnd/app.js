var app=angular.module("AddressData",['ngRoute']);

app.config(["$routeProvider",function($routeProvider){
    
$routeProvider.
when("/Home",{
    templateUrl:"Components/home.html",
    controller:"homeCtrl"
}).
otherwise({
redirectTo:"/Home"
});
}]);












//$routeprivder-services





