app.controller("homeCtrl", function ($scope, $http) {
    //Resigter js-------------------------------------------------
    $scope.InsertDetails = function (addressline, pincode, city, district, state, country) {
        var data = {
            addressline: addressline,
            pincode: pincode,
            city: city,
            district: district,
            state: state,
            country: country
        }
        if (addressline.length > 165) {
            $scope.errormsg = "plz enter 165 char only";
        }

        var addressline1 = "", addressline2 = "", addressline3 = "";
        var maxwords = 0, maxlength1 = 0, maxlength2 = 0;
        
    var myStr = addressline.replace(/  +/g, ' ');
        var alladdress = myStr.split(" ");

        if (alladdress.length < 3) {
            addressline1 = addressline + " " + data.city + " " + data.state;
            addressline2 = data.district + " " + data.country;
        }
        else {
            if (alladdress.length > 5) {
                alladdress.forEach(addline => {
                    maxlength1 += addline.length;
                    maxlength2 += addline.length;

                    if (maxwords < 5 && maxlength1 <= 55) {
                        addressline1 += addline + " ";
                        maxwords++;
                        maxlength2 = 0;
                    }
                    else if (maxlength2 <= 55) {
                        addressline2 += addline + " ";
                    }
                    else {
                        addressline3 += addline + " ";
                    }

                });
            }
            else if (alladdress.length >= 3 && alladdress.length<= 5) {
                addressline1 = addressline;
                addressline2 = data.city + " " + data.state;
            }
        }

        var addressmodel = {
            addressline1: addressline1,
            addressline2: addressline2,
            addressline3: addressline3,
            pincode: data.pincode,
            city: data.city,
            district: data.district,
            state: data.state,
            country: data.country
        }
        console.log(JSON.stringify(addressmodel));
        //call the service
        $http.post("https://localhost:44343/api/Address", JSON.stringify(addressmodel))
            .then(function (response) {
                console.log(response);

                if (response.data) {
                    $scope.message = "User added Successfully";
                    $scope.newdata = response.data.data;
                    $scope.Getall();
                    console.log($scope.newdata);
                }
            }, function (error) {
                console.log(error)
            })
    };
    $scope.Getall=function(){
        $http.get("https://localhost:44343/api/Address/AllAddress")
        .then(function (response) {
            console.log(response);

            if (response.data) {
                $scope.addressdata = response.data;
            }
        }, function (error) {
            console.log(error)
        })
    }
})

