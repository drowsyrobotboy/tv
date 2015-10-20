var app = angular.module('app',['ngRoute','ngAnimate']);
app.controller('ctrl', function($scope){
    $scope.menu = [
        {name:'Campus Ambassador', ref: '#/cba'},
        {name:'Contact', ref: '#/contact'},
        {name:'Sponsors', ref: '#/sponsors'}
    ];
    $scope.submenu = [
        {name:'Paper/Poster Presentation', ref: '#/ppt'},
        {name:'Pro Designer', ref: '#/prodesigner'},
        {name:'Auto Quotient', ref: '#/autoquotient'},
		{name:'Illuminati', ref: '#/illuminati'},
        {name:'Rover', ref: '#/rover'},
        {name:'Follow Me', ref: '#/followme'},
        {name:'Real Steel', ref: '#/realsteel'},
        {name:'Robo Soccer', ref: '#/robosoccer'},
        {name:'Robo Golf', ref: '#/robogolf'},
        {name:'Robo Xtreme', ref: '#/roboxtreme'},
        {name:'Robo Racer', ref: '#/roboracer'},
        {name:'Mech Googled', ref: '#/googled'},
        {name:'Workshop', ref: '#/workshop'}
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
        .when('/followme',
              {
                  templateUrl: 'pages/events/followme.html'
              })
        .when('/googled',
              {
                  templateUrl: 'pages/events/googled.html'
              })
        .when('/autoquotient',
              {
                  templateUrl: 'pages/events/autoquotient.html'
              })
		.when('/illuminati',
              {
                  templateUrl: 'pages/events/illuminati.html'
              })
        .when('/ppt',
              {
                  templateUrl: 'pages/events/ppt.html'
              })
        .when('/prodesigner',
              {
                  templateUrl: 'pages/events/prodesigner.html'
              })
        .when('/realsteel',
              {
                  templateUrl: 'pages/events/realsteel.html'
              })
        .when('/robogolf',
              {
                  templateUrl: 'pages/events/robogolf.html'
              })
        .when('/roboracer',
              {
                  templateUrl: 'pages/events/roboracer.html'
              })
        .when('/robosoccer',
              {
                  templateUrl: 'pages/events/robosoccer.html'
              })
        .when('/roboxtreme',
              {
                  templateUrl: 'pages/events/roboxtreme.html'
              })
        .when('/workshop',
              {
                  templateUrl: 'pages/events/workshop.html'
              })
        .when('/rover',
              {
                  templateUrl: 'pages/events/rover.html'
              })
        .otherwise({ redirectTo: '/home' });
});

var myimages=new Array()
function preloadimages(){
    for (i=0;i<preloadimages.arguments.length;i++){
        myimages[i]=new Image();
        myimages[i].src=preloadimages.arguments[i];
    }
}
$(document).ready(function(){
    preloadimages('images/bg.gif','images/overlay.png','images/logo-home.png','images/mgit.jpg','images/mct.png','images/robosoccer.jpg','images/realsteel.jpg','images/realsteel-arena.jpg','images/roboxtreme.jpg','images/followme.jpg');
    $('.spinner').fadeOut("slow");
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
