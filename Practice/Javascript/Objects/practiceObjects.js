
<!DOCTYPE html>
<html lang="en" ng-app='myCoolApp'>

<head>
    <meta charset="UTF-8">
    <title>Controlling Users</title>
    <link rel="stylesheet" href="main.css">
    <!-- REMEMBER TO INITIALIZE A BOWER PROJECT AND INSTALL ANGULAR! -->
    <script src="bower_components/angular/angular.js" charset="utf-8"></script>
</head>

<body>
    <h1>Controlling Users</h1>
    <!-- Form to add a new user -->
    <div ng-controller='usersController'>
      <form ng-submit='createUser()'>
        <input type="text" ng-model='user.firstName' placeholder="First Name">
        <input type="text" ng-model='user.lastName' placeholder="Last Name">
        <input type="text" ng-model='user.favoriteLanguage' placeholder="Favorite Language">
        <input type="submit" value="add user">
      </form>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Favorite Language</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr ng-repeat='userObj in users'>
            <td>{{userObj.firstName}}</td>
            <td>{{userObj.lastName}}</td>
            <td>{{userObj.favoriteLanguage}}</td>
            <td><button ng-click='deleteUser(userObj)'>Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <script>
        var myApp = angular.module('myCoolApp', []);
        myApp.controller('usersController', ['$scope', function($scope){
          $scope.createUser = function(){
            $scope.users.push($scope.user);
          }

          $scope.deleteUser = function(userToDelete){
            $scope.users = $scope.users.filter( function(userObj){
              return userObj !== userToDelete;
            })
          }

          $scope.users = [
            {
              firstName: "Charlie",
              lastName: "Mead",
              favoriteLanguage: "JavaScript"
            },
            {
              firstName: "Mike",
              lastName: "Hannon",
              favoriteLanguage: "Python"
            },
            {
              firstName: "Sara",
              lastName: "Wong",
              favoriteLanguage: "Ruby"
            }
          ];
        }]);

    </script>
</body>

</html>
