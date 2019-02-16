  (function(){
      
      var module=angular.module("GitHubUsers", []);
           
                  
     module.service('$getUserDetails', ['$http','$log', function($http, $log, callbackFunction){
                
        this.getData=function( callbackFunction){
          $http.get("https://api.github.com/users").then( callbackFunction);

                  };
                                   
              }]);
      
      
                 
     module.service('$getReposDetails',['$http','$log', function($http, $log, callbackFunction){
                
        this.getData=function(repos, callbackFunction){
       //  $http.get("https://api.gitHub.com/users/"+ repos + '/repos').then( callbackFunction);
$http.get("https://api.gitHub.com/users/"+ repos + '/repos').then( callbackFunction);
                  };
                                   
              }]);
      
   
     module.factory('$getServiceDetails',['$http','$log', function($http, $log){
         
         userDetailsFunc=function(callbackFunction){
             $http.get("http://api.github.com/users").then(callbackFunction);
         };
         
          repoDetailsFunc=function(repos, callbackFunction){
             $http.get("http://api.github.com/users/"+ repos + '/repos').then(callbackFunction);
         };
         
         return {
             
             getUserDetails: userDetailsFunc,
             getReposDetails:  repoDetailsFunc
         }
     }]); 
                 
module.controller("GetUserDetails",['$scope','$http','$log','$getUserDetails','$getReposDetails', '$getServiceDetails', function($scope,$http,$log,$getUserDetails,$getReposDetails,$getServiceDetails){             

                    $scope.showUsers=false;
                    $scope.showRepos=false;
                                        
                  $scope.getUsers=function(){
                  $scope.showUsers=true; 
                  $scope.showRepos=false;
                      
                      
                $getServiceDetails.getUserDetails(function(response){
                      $scope.users=response.data;
                      });
                      $log.debug("after the execution of service");
                  };
                                                              
                //method for Repos      
               $scope.getRepos=function(){
                    $scope.showRepos=true;   //the content will be shown , 
                    $scope.showUsers=false; //false will hide in this way we are showing only one 
                   if($scope.repo=='')
                      alert("please enter the valid key word");
                   else
                  {
                      console.log("insede the log function");
         
    // $http.get("https://api.gitHub.com/users/" + $scope.repo + '/repos').then(function(response){
                      $getServiceDetails.getReposDetails($scope.repo, function(response){
                      $scope.repos=response.data;
                          
                    }); 
                       $log.debug("after the execution of repo");
                 }
             }
              
         }
        ]);
              
       }()
  );
   