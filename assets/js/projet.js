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
app.controller('cartNormaux',['$scope', '$rootScope', function($scope, $rootScope){
  $scope.addPanier=function(){
    var id = $scope.$index;
    var name = document.getElementById('name'+id).innerHTML;
    var price = document.getElementById('price'+id).innerHTML;
    var quantity = document.getElementById('quantity'+id).value;
    quantity = parseInt(quantity);
    price = parseInt(price);
    if (quantity <= 0) {
      quantity = 0;
    }
    var subTotal = price * quantity;
    var img = document.getElementById('img'+id).src;
    $rootScope.nameArticle.push(name);
    $rootScope.priceArticle.push(price);
    $rootScope.quantityArticle.push(quantity);
    $rootScope.subtotalArticle.push(subTotal);
    $rootScope.src_imgArticle.push(img);
  }
  $rootScope.getTotal = function(){
    var total = 0;
    for(var i =0; i < $rootScope.subtotalArticle.length; i++){
      var product = $rootScope.subtotalArticle[i];
      total += (product);
    }
    return total;
  }
}]);
app.controller('cartDormeur',['$scope', '$rootScope', function($scope, $rootScope){
  $scope.addPanier=function(){
    var id = $scope.$index;
    var name = document.getElementById('named'+id).innerHTML;
    var price = document.getElementById('priced'+id).innerHTML;
    var quantity = document.getElementById('quantityd'+id).value;
    quantity = parseInt(quantity);
    var subTotal = price * quantity;
    var img = document.getElementById('imgd'+id).src;
    $rootScope.nameArticle.push(name);
    $rootScope.priceArticle.push(price);
    $rootScope.quantityArticle.push(quantity);
    $rootScope.subtotalArticle.push(subTotal);
    $rootScope.src_imgArticle.push(img);
  }
}]);
app.controller('cartCoto',['$scope', '$rootScope', function($scope, $rootScope){
  $scope.addPanier=function(){
    var id = $scope.$index;
    var name = document.getElementById('namec'+id).innerHTML;
    var price = document.getElementById('pricec'+id).innerHTML;
    var quantity = document.getElementById('quantityc'+id).value;
    quantity = parseInt(quantity);
    var subTotal = price * quantity;
    var img = document.getElementById('imgc'+id).src;
    $rootScope.nameArticle.push(name);
    $rootScope.priceArticle.push(price);
    $rootScope.quantityArticle.push(quantity);
    $rootScope.subtotalArticle.push(subTotal);
    $rootScope.src_imgArticle.push(img);
  }
}]);
app.controller('cartDieu',['$scope', '$rootScope', function($scope, $rootScope){
  $scope.addPanier=function(){
    var id = $scope.$index;
    var name = document.getElementById('nameg'+id).innerHTML;
    var price = document.getElementById('priceg'+id).innerHTML;
    var quantity = document.getElementById('quantityg'+id).value;
    quantity = parseInt(quantity);
    var subTotal = price * quantity;
    var img = document.getElementById('imgg'+id).src;
    $rootScope.nameArticle.push(name);
    $rootScope.priceArticle.push(price);
    $rootScope.quantityArticle.push(quantity);
    $rootScope.subtotalArticle.push(subTotal);
    $rootScope.src_imgArticle.push(img);
  }
}]);
app.controller('cartBreton',['$scope', '$rootScope', function($scope, $rootScope){
  $scope.addPanier=function(){
    var id = $scope.$index;
    var name = document.getElementById('nameb'+id).innerHTML;
    var price = document.getElementById('priceb'+id).innerHTML;
    var quantity = document.getElementById('quantityb'+id).value;
    quantity = parseInt(quantity);
    var subTotal = price * quantity;
    var img = document.getElementById('imgb'+id).src;
    $rootScope.nameArticle.push(name);
    $rootScope.priceArticle.push(price);
    $rootScope.quantityArticle.push(quantity);
    $rootScope.subtotalArticle.push(subTotal);
    $rootScope.src_imgArticle.push(img);
  }
}]);
