var app = angular.module('chatApp',['ngMaterial']);
 app.controller('chatController',function ($scope) {
 	$scope.messages=[
 	{ sender:"BOT",
 		text:"Hi What can i do for you?",
 		time:"12:15"
 	},
 	 	{
 	 		sender:"USER",
 		text:"Hi",
 		time:"12:16"
 	}
 	 
 	
 	];

 var  exampleSocket =  new  WebSocket("ws://localhost:9000/chatSocket");

exampleSocket.onmessage  =   function  (event) {
       var jsonData = JSON.parse(event.data);
              console.log(jsonData);
              };
 });
