var app = angular.module('app-route', ['ngRoute'])
app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: './pages/index.html',
        controller: indexCtrl
    }).when('/about', {
        templateUrl: './pages/about.html'
    }).when('/cart', {
        templateUrl: './pages/cart.html'
    }).when('/login', {
        templateUrl: './pages/login.html'
    }).when('/product-detail', {
        templateUrl: './pages/product-detail.html'
    }).when('/product', {
        templateUrl: './pages/register.html'
    }).otherwise({
        templateUrl: './pages/404.html'
    })
});