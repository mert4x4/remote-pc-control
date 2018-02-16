var express = require('express');
var app = express();
var serv = require('http').Server(app);
app.use('/',express.static(__dirname + '/web_client'));
var io = require('socket.io')(serv,{});

const { spawn } = require('child_process');

serv.listen(2000);
console.log("server started");

 io.sockets.on('connection', function(socket){
	socket.on('Channel_VolumeLevel',function(data){
		console.log(data);
		spawn('./ExeFiles/SetMasterVolume.exe', [data.VolumeLevel]);
	});
	socket.on('Channel_OtherInfo',function(data){
		console.log(data);
		spawn('./ExeFiles/RemotePcControl.exe', [data.mode]);
	});
});
/*

//spawn('RemotePcControl.exe', ['0']);

*/

