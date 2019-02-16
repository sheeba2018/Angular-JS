  app.controller("FirstController", function($scope){
             $scope.persons=[{name:"John", age:45,email:"hohn@tshsg.com"},
                            {name:"DOjo", age:65,email:"dojo@tshsg.com"},
                             {name:"Alex", age:34,email:"alex123@tshsg.com"},
                             {name:"mark", age:55,email:"markmark@sdg.com"}]  
            });
            
app.controller("SecondController", function($scope){
             $scope.persons=[{name:"Jane", age:5,email:"hohn@tshsg.com"},
                            {name:"Ellen", age:5,email:"dojo@tshsg.com"},
                             {name:"Bobi", age:34,email:"alex123@tshsg.com"},
                             {name:"jesey", age:5,email:"markmark@sdg.com"}]  
            });


app.controller("ViewProduct",function($scope,$routeParams){
    $scope.productDetails={"name":"Nikon D3300","brand":"Nikon", "thumb_image_url":"http://images.amazon.com/images/P/B00HQ4W1QE.01.LZZZZZZZ"};
    
});
           