var myImage = document.querySelector('img');

myImage.onmouseover = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/Hopstarter-Software-Mozilla-Firefox.ico'){
		myImage.setAttribute('src','images/PNG_transparency_demonstration_1.png');
	} else {
		myImage.setAttribute('src','images/Hopstarter-Software-Mozilla-Firefox.ico');
	}
}

var myButton = document.querySelector('button');
var mytitle = document.querySelector('h2');

function setUserName(){
	var myName = prompt('please input your name.');
	localStorage.setItem('name',myName);
	mytitle.textContent = "Hello! " + myName;
}
if(!localStorage.getItem('name')){
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	mytitle.textContent = "Hello! " + storedName;
}

myButton.onclick = function() {
	setUnserName();
}
