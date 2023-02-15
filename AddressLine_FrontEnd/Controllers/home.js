app.controller("homeCtrl",function($scope,$http){
    //Resigter js-------------------------------------------------
   $scope.InsertDetails=function(addressline1,addressline2,addressline3,pincode,city,district,state,country){
       var data={
        addressline1:addressline1,
        addressline2:addressline2,
           addressline3:addressline3,
           pincode:pincode,
           city:city,
           district:district,
           state:state,
           country:country
       }
       console.log(JSON.stringify(data));
       //call the service
       $http.post("https://localhost:44343/api/Address",JSON.stringify(data))
       .then(function(response){
           console.log(response);
 
           if(response.data){
               $scope.message="User added Successfully";
               $scope.addressline1=response.data.addressline1;
               $scope.addressline2=response.data.addressline2;
               $scope.addressline3=response.data.addressline3;
               $scope.pincode=response.data.pincode;
               $scope.city=response.data.city;
               $scope.district=response.data.district;
               $scope.state=response.data.state;
               $scope.country=response.data.country;
           }
       },function(error){
           console.log(error)
       })
   };
 })