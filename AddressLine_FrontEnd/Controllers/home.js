app.controller("homeCtrl",function($scope,$http){
    //Resigter js-------------------------------------------------
   $scope.InsertDetails=function(addressline,pincode,city,district,state,country){
   var data={
            addressline:addressline,
               pincode:pincode,
               city:city,
               district:district,
               state:state,
               country:country
           }
           var alladdress = addressline.split(" ");
          
var addressline1="",addressline2="",addressline3="";
                    var maxwords = 0,maxlength1=0, maxlength2=0;
                    alladdress.forEach(addline => {
                        maxlength1 += addline.length;
                        maxlength2 += addline.length;
                        if(maxwords<3)
                        {
                            addressline1 = addline ;
                            addressline2 = data.city+" "+data.state + " " + data.district;
                        }
                        if (maxwords < 5 && maxlength1 <= 55)
                            {
                                addressline1 += addline + " ";
                                maxwords++;
                                maxlength2 = 0;
                            }
                            else if (maxlength2 <= 55)
                            {
                            addressline2 += addline + " ";
                            }
                            else
                            {
                            addressline3 += addline + " ";
                            }
                        
                    });
                    
       var addressmodel={
        addressline1:addressline1,
        addressline2:addressline2,
        addressline3:addressline3,
        pincode:data.pincode,
        city:data.city,
        district:data.district,
        state:data.state,
        country:data.country
       }
      console.log(JSON.stringify(addressmodel));
       //call the service
       $http.post("https://localhost:44343/api/Address",JSON.stringify(addressmodel))
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