var app = angular.module('app',['ngRoute','ngAnimate']);
app.controller('ctrl', function($scope){
    $scope.menu = [
        {name:'Home', ref: '#/home'},
        {name:'About', ref: '#/about'},
        {name:'Events', ref: '#/events'},
        {name:'Contact', ref: '#/contact'},
        {name:'Sponsors', ref: '#/sponsors'}
    ];
});

app.config(function($routeProvider){
    $routeProvider
        .when('/home',
              {
                  templateUrl: 'pages/home.html'
              })
        .when('/about',
              {
                  templateUrl: 'pages/about.html'
              })
        .when('/events',
              {
                  templateUrl: 'pages/events.html'
              })
        .when('/contact',
              {
                  templateUrl: 'pages/contact.html'
              })
        .when('/sponsors',
              {
                  templateUrl: 'pages/sponsors.html'
              })
        .otherwise({ redirectTo: '/home' });
});
$(document).ready(function(){
    setTimeout(function(){
    $('.preloader-left').css({'left':'-100%'});
    $('.preloader-right').css({'right':'-100%'});
    }, 1000);
});