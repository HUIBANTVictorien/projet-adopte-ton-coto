/* scroll automatic */
$('a').on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
  }
});
// Module angular
var app = angular.module('Adopt', []);
app.controller('article1Ctrl', function($scope, $http) {
  $http.get("json/1.json").then(function (response) {
    $scope.article1 = response.data;
  });
});
app.controller('article2Ctrl', function($scope, $http) {
  $http.get("json/2.json").then(function (response) {
    $scope.article2 = response.data;
  });
});
app.controller('article3Ctrl', function($scope, $http) {
  $http.get("json/3.json").then(function (response) {
    $scope.article3 = response.data;
  });
});
app.controller('article4Ctrl', function($scope, $http) {
  $http.get("json/4.json").then(function (response) {
    $scope.article4 = response.data;
  });
});
app.controller('article5Ctrl', function($scope, $http) {
  $http.get("json/5.json").then(function (response) {
    $scope.article5 = response.data;
  });
});
