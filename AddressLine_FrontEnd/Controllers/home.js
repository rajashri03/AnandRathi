app.controller("homeCtrl",function($scope,$http){
    //Resigter js-------------------------------------------------
   $scope.InsertDetails=function(addressline,pincode,city,district,state,country){
    let longAddr = addressline;

let addr = ["","",""];

for(let i = 0; i < 3 && longAddr.length > 0; i++){

    if(longAddr.length < 55 || i == 3)
    {
        addr[i] = longAddr;
        break;
    }
    
    let cut = 55;
    while(longAddr[cut] !== " " && cut > 0)
        cut--;
    if(cut == 0) 
      cut = 55;
    
    addr[i] = longAddr.slice(0, cut);
    longAddr = longAddr.slice(cut + 1);
}

console.log(addr);
       var data={
        addressline1:addr[0],
        addressline2:addr[1],
        addressline3:addr[2],
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