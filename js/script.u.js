var app = angular.module('app',['ngRoute','ngAnimate']);
app.controller('ctrl', function($scope){
    $scope.menu = [
        {name:'Home', ref: '#/home'},
        {name:'About', ref: '#/about'},
        {name:'Events', ref: '#/events'},
        {name:'Campus Ambassador', ref: '#/cba'},
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
        .when('/cba',
              {
                  templateUrl: 'pages/cba.html'
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
    $('body').css({"overflow-y":"hidden"});
    setTimeout(function(){
    $('#tsharp').css({'margin-left':'-150px','margin-top':'-150px'});
    $('#vsharp').css({'margin-right':'-150px','margin-bottom':'-150px'});
    }, 0801);
    setTimeout(function(){
   $('#tsharp').css({'left':'-100%','top':'-100%'});
    $('#vsharp').css({'right':'-100%','bottom':'-100%'});
        $('#tsharp').fadeOut(1000);
        $('#vsharp').fadeOut(1000);
    }, 2600);
    setTimeout(function(){
    $('.door-left').css({'left':'-100%'});
    $('.door-right').css({'right':'-100%'});
    }, 2700);
    setTimeout(function(){
    $('body').css({"overflow-y":"auto"});
    }, 3700);
    
});