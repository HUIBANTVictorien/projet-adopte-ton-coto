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
var app = angular.module('Adopt', ['ngRoute']);
app.run(function ($rootScope) {
  $rootScope.src_imgArticle = [];
  $rootScope.nameArticle = [];
  $rootScope.priceArticle = [];
  $rootScope.quantityArticle = [];
  $rootScope.subtotalArticle = [];
});
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
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/home', {templateUrl: 'partials/home.html', controller: 'article1Ctrl'})
  .when('/home', {templateUrl: 'partials/home.html', controller: 'article2Ctrl'})
  .when('/home', {templateUrl: 'partials/home.html', controller: 'article3Ctrl'})
  .when('/home', {templateUrl: 'partials/home.html', controller: 'article4Ctrl'})
  .when('/home', {templateUrl: 'partials/home.html', controller: 'article5Ctrl'})
  .when('/panier', {templateUrl: 'partials/panier.html'})
  .otherwise({redirectTo: '/home'});
}]);
app.controller('test',['$scope', '$rootScope', function($scope, $rootScope){
  //j'appelle ma fonction sendClick du bouton Envoyer
  $scope.showId = function(id){
    console.log(id);
};
  $scope.addPanier=function(){
    //push permet de récupérer tous les sujets du tableau subjectList
    var id = $scope.$index;
      console.log(id);
      var name = document.getElementById('name.'+id).innerHTML;
      $rootScope.nameArticle.push(name);
      console.log($rootScope.nameArticle);
  }
}]);
