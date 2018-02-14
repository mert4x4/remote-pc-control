var socket = io();


var Slider_VolumeLevel = document.getElementById("VolumeLevel");
var Button_VolumeSend = document.getElementById("sendVolumeValue");
var Label_VoiceLevel = document.getElementById("label_voiceLevel");

Button_VolumeSend.onclick = function(){socket.emit('IncomingData',{VolumeLevel:Slider_VolumeLevel.value});Label_VoiceLevel.style.color = "green";};
Slider_VolumeLevel.oninput = function(){
	Label_VoiceLevel.innerHTML = this.value;
	Label_VoiceLevel.style.color = "red";
}
