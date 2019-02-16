          (function(){
              
              var module=angular.module("GitHubUsers", []);
              
              
              module.service("getRepos",['$http','$log', function($http,$log){
                  
                   var resp;
                  $http.get("https://api.github.com/users").then(function(response){
                      resp=response.data;
                  });
                  return resp;
                  
              }]);
              
              
        // if I am not using Any angular in-built or custom services, i can directly create a function
              // module.controller("GetUserDetails", function($scope){});
                module.controller("GetUserDetails",['$scope','$http', function($scope,$http){ 
                    $scope.showUsers=false;
                    $scope.showRepos=false;
                    
                    
                  $scope.getUsers=function(){
                  $scope.showUsers=true; //the content will be shown
                  $scope.showRepos=false; //false will hide
                  $http.get("https://api.gitHub.com/users").then(function(response){
                  $scope.users=response.data;
                   });  
                  };
                                                              
                //method for Repos      
               $scope.getRepos=function(){
                    $scope.showRepos=true;   //the content will be shown , 
                    $scope.showUsers=false; //false will hide in this way we are showing only one table content when they click. intially two button will show they can select.
                   if($scope.repo=='')
                      alert("please enter the valid key word");
                   else
                  {
         
                 $http.get("https://api.gitHub.com/users/" + $scope.repo + '/repos').then(function(response){                    $scope.repos=response.data;
                    });  
                 }
             }
          }     
       
        ]);
              
          }()
          );
   