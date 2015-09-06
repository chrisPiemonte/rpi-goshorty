"use strict";angular.module("clientApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","chartjs"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/stats",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("clientApp").controller("HeaderController",["$scope","$location",function(a,b){a.isActive=function(a){return a===b.path()}}]),angular.module("clientApp").controller("MainCtrl",["$scope","$http",function(a,b){a.longUrl="",a.custom="",a.btn="GO!",a.takeShort=function(){var c=b.post("/rest/go-shorty",{longUrl:a.longUrl,custom:a.custom});c.success(function(b){console.log("Inserted!"),a.rispostaJson=b,a.shortUrl="http://localhost:4567/"+a.rispostaJson.shortUrl,a.err=""}),c.error(function(b){a.rispostaJson=b||"request failed",a.err=a.rispostaJson.err,a.shortUrl=""})}}]),angular.module("clientApp").controller("AboutCtrl",["$scope","$http",function(a,b){a.shortUrl="here",a.getStats=function(){var c=b.get("/rest/stats/"+a.shortUrl);c.success(function(b){console.log("lets stats!"),a.rispostaJson=b}),c.error(function(b){a.rispostaJson=b||"request failed",a.err=a.rispostaJson.err,a.shortUrl=""})};var c=[{value:20,color:"#878BB6",highlight:"#FF5A5E",label:"chrome"},{value:40,color:"#4ACAB4"},{value:10,color:"#FF8153"},{value:30,color:"#FFEA88"}],d={segmentShowStroke:!1,animateScale:!0},e=document.getElementById("browserStats").getContext("2d");new Chart(e).Pie(c,d);this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("clientApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="jumbotron"> <h2>Statistic</h2> <p class="lead"> <br> Insert the short url<input type="text" value="here" ng-model="shortUrl"> mai friend</p> <p><a class="btn btn-lg btn-success" ng-click="getStats()">Go!<span class="glyphicon glyphicon-ok"> </span></a></p> <div ng-show="rispostaJson"> <p>short: {{rispostaJson.numClicks}}</p> </div> </div> <canvas id="browserStats" width="400" height="200"></canvas>'),a.put("views/main.html",'<!--<div class="row marketing">\n  <h1>Welcome to Go-shorty!</h1>\n            <form>\n            <p class="lead">Insert long url:<input type="text" ng-model="longUrl"></p>\n            <p>Insert custom url:<input type="text" ng-model="custom"></p> \n            <input type="button" value="GO!" ng-click="takeShort()">\n            </form>\n            <div ng-show="rispostaJson"><p>short: {{rispostaJson}}</p></div>\n</div>\n--> <p align="center"><img src="images/logo.0249c5d7.png" class="img-responsive"></p> <div class="jumbotron"> <form role="form"> <div class="row marketing"> <div class="form-group"> <!--<p><h2>Welcome to Go-shorty!</h><br></p>--> <p> <input type="text" ng-model="longUrl" placeholder="Insert a long URL" class="form-control input-lg"> </p> <p> <input type="text" ng-model="custom" placeholder="Add custom text" class="form-control input-lg"> </p> <p> <a class="btn btn-lg btn-success" ng-href="#/" ng-click="takeShort()">go <span class="glyphicon glyphicon-ok"></span> </a> </p> <p> <div ng-show="shortUrl" class="alert alert-success">{{shortUrl}}</div> </p> <p> <div ng-show="err" class="alert alert-danger">{{err}}</div> </p> </div> </div> </form> </div>')}]);