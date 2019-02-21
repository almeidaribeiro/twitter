function setBtnState() {
	const text = document.getElementById("messageArea").value;
	if (text === ""){
		document.getElementById("button").disabled = true; 
	} else {
		document.getElementById("button").disabled = false;
	}
}

messageArea.addEventListener("keyup", textSize);

function textSize(event){
	messageArea.style.cssText = "height:auto; padding:0";
	messageArea.style.cssText = "height:" + messageArea.scrollHeight + "px";
}

function updateCounter(){
	const text = document.getElementById("messageArea").value;

	let counter = 140;

	counter = 140 - text.length;

	if (text.length > 140){
		document.getElementById("button").disabled = true;
	} 
	if (text.length > 120 && text.length <= 130){
		document.getElementById("counter").style.color = "yellow";
	} 
	else if (text.length > 130) {
	document.getElementById("counter").style.color = "red";
	} else{
		document.getElementById("counter").style.color = "black";
	}

	document.getElementById("counter").innerHTML = counter;
}

document.getElementById("messageArea").addEventListener("keyup", function(){
	setBtnState();
	
	updateCounter();

	textAreaResize()
});


document.getElementById("button").addEventListener("click", function () {
	let message = document.getElementById("messageArea");
	let messageOutput = document.getElementById("result");
	
	let day = new Date();
	let dayString = String(day);

	let newTweet = document.createElement("p");
	let newDay = document.createElement("div");
	
	newTweet.innerHTML = message.value;
	newDay.innerHTML = dayString.slice(0,21);

	
	newTweet.appendChild(newDay);
	messageOutput.prepend(newTweet);


	document.getElementById("button").disabled = true;
	document.getElementById("counter").innerHTML = 140;
	message.value = "";
});


