var socket = io();


var Slider_VolumeLevel = document.getElementById("VolumeLevel");
var Button_VolumeSend = document.getElementById("sendVolumeValue");
var Label_VoiceLevel = document.getElementById("label_voiceLevel");
var Button_mute = document.getElementById("button_mute");
var Button_next = document.getElementById("button_nextTrack");
var Button_previous = document.getElementById("button_previousTrack");
var Button_startStop = document.getElementById("button_pausePlay");
label_voiceLevel.style.color = "yellow";

Button_VolumeSend.onclick = function(){Label_VoiceLevel.innerHTML = Slider_VolumeLevel.value; socket.emit('Channel_VolumeLevel',{VolumeLevel:Slider_VolumeLevel.value});Label_VoiceLevel.style.color = "green";};
Button_mute.onclick = function(){socket.emit('Channel_OtherInfo',{mode:0});};
Button_next.onclick = function(){socket.emit('Channel_OtherInfo',{mode:3});};
Button_previous.onclick = function(){socket.emit('Channel_OtherInfo',{mode:5});};
Button_startStop.onclick = function(){socket.emit('Channel_OtherInfo',{mode:4});};

Slider_VolumeLevel.oninput = function(){
	Label_VoiceLevel.innerHTML = this.value;
	Label_VoiceLevel.style.color = "red";
}
