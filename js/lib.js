//function to get URL parameters
function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

//set hidden parameter from GET URL
function setHiddenParamaters(){
	var qt = getURLParameter("qt");
	var rd = getURLParameter("rd");
	var av = getURLParameter("av");

	var qtAnswered = getURLParameter("qt-ans");
	var rdAnswered = getURLParameter("rd-ans");
	var avAnswered = getURLParameter("av-ans");

	if(qt == null){
		document.getElementById("qt").value = 0;	
	}else{
		document.getElementById("qt").value = qt;
	}
	if(rd == null){
		document.getElementById("rd").value = 0;	
	}else{
		document.getElementById("rd").value = rd;
	}
	if(av == null){
		document.getElementById("av").value = 0;	
	}else{
		document.getElementById("av").value = av;	
	}

	if(qtAnswered == null){
		document.getElementById("qt-ans").value = 0;	
	}else{
		document.getElementById("qt-ans").value = qtAnswered;
	}
	if(rdAnswered == null){
		document.getElementById("rd-ans").value = 0;	
	}else{
		document.getElementById("rd-ans").value = rdAnswered;
	}
	if(avAnswered == null){
		document.getElementById("av-ans").value = 0;	
	}else{
		document.getElementById("av-ans").value = avAnswered;
	}
	
}

//function to check id class name exists in a HTML element
function hasClass(tagName, cls) {
	var element = document.getElementsByTagName(tagName)[0];
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function clearInputRadio(radioName){
	var ele = document.getElementsByName(radioName);
    for(var i=0;i<ele.length;i++){
    	ele[i].checked = false;
    }
}

//clear all input fields in the form
function clearForm(){

	if(document.getElementById("question-3-text") != null){
		clearInputRadio("option-left");
		clearInputRadio("option-right");
		var text1 = document.getElementById("text-1");
		var text2 = document.getElementById("text-2");
		text1.innerHTML = "$_____";
		text2.innerHTML = "_____";
		text1.className = "";
		text2.className ="";
	}else{
		clearInputRadio("option");
	}
}


//get radio value
function getRadioValue(theRadioGroup)
{
    var elements = document.getElementsByName(theRadioGroup);
    for (var i = 0, l = elements.length; i < l; i++)
    {
        if (elements[i].checked)
        {
        	return elements[i].value;
        }
    }
}

//get radio value
function getRadioDataValue(theRadioGroup)
{
    var elements = document.getElementsByName(theRadioGroup);
    for (var i = 0, l = elements.length; i < l; i++)
    {
        if (elements[i].checked)
        {
        	return elements[i].dataset.val;
        }
    }
}

//function to draw plotted line graph
function drawGraph(){
	//line with slope
	var c = document.getElementById("graph");
	var ctx = c.getContext("2d");
	ctx.moveTo(10,190);
	ctx.lineTo(160,40);
	ctx.stroke();

	//Y Axis
	ctx.moveTo(10,0);
	ctx.lineTo(10,190);
	ctx.stroke();

	//X- Axis
	ctx.moveTo(10,190);
	ctx.lineTo(200,190);
	ctx.stroke();

	//arrow Y Axis -left
	ctx.moveTo(10,0);
	ctx.lineTo(0,10);
	ctx.stroke();

	// arrow Y Axis right
	ctx.moveTo(10,0);
	ctx.lineTo(20,10);
	ctx.stroke();

	//arrow X Axis -left
	ctx.moveTo(200,190);
	ctx.lineTo(190,180);
	ctx.stroke();

	// arrow X Axis right
	ctx.moveTo(200,190);
	ctx.lineTo(190,200);
	ctx.stroke();

	// point x2, y2
	ctx.beginPath();
	ctx.arc(150, 50, 2, 0, 2 * Math.PI, true);
	ctx.fillStyle = 'red';
	ctx.fill()
	ctx.stroke();

	// point x1, y1
	ctx.beginPath();
	ctx.arc(50, 150, 2, 0, 2 * Math.PI, true);
	ctx.fillStyle = 'red';
	ctx.fill()
	ctx.stroke();

	// write co-ordinates on canvas wih grey color
	ctx.fillStyle = 'grey';
	ctx.fillText("(x2, y2)",150,70);
	ctx.fillText("(x1, y1)",50,170);
}


function submitQuestion(questionNumber){
	var val = getRadioValue("option");
	var quantScore = document.getElementById("qt");
	var quantAnswered = document.getElementById("qt-ans");
	var readingScore = document.getElementById("rd");
	var readingAnswered = document.getElementById("rd-ans");
	var audioScore = document.getElementById("av");
	var audioAnswered = document.getElementById("av-ans");
	
    switch(parseInt(questionNumber)){
    	// question 1 answer
    	case 1:
		    if(val == 'd'){
		    	quantScore.value = parseInt(quantScore.value) + 1;
		    	quantAnswered.value = parseInt(quantAnswered.value) + 1;
		    }
	    break;

	    // question 2 answer
	    case 2:
		    if(val == 'a'){
		    	quantScore.value = parseInt(quantScore.value) + 1;
		    	quantAnswered.value = parseInt(quantAnswered.value) + 1;
		    }
	    break;

	    // question 3 answer
	    case 3:
	    	var optionOne = getRadioValue("option-left");
	    	var optionTwo = getRadioValue("option-right");
	    	if(optionOne == 'a' && optionTwo == 'e'){
		    	readingScore.value = parseInt(readingScore.value) + 1;
		    	readingAnswered.value = parseInt(readingAnswered.value) + 1;
		    }
	    break;

	    // question 4 answer
	    case 4:
		    if(val == 'c'){
		    	audioScore.value = parseInt(audioScore.value) + 1;
		    	audioAnswered.value = parseInt(audioAnswered.value) + 1;
		    }
	    break;

	    default:
	    	alert("Something went wrong.");
	    	break;
    }
    
    document.getElementById("question-form").submit();	
}

// question 3
function fillInTheBlanks(optionClass, textId){
	var val = getRadioDataValue(optionClass);
    var text = document.getElementById(textId);
    text.innerHTML=  val ;
    text.className = "yellow-mark";
}


//Function to login
function login(){
	var myForm = document.getElementById("login-form");
	var email = document.getElementsByName("email")[0];
	var password = document.getElementsByName("password")[0];
	var error = document.getElementById("error");
	if(email.value != "user@mail.com" || password.value != "password"){
		error.innerHTML = "Invalid login. Please try again!";
		error.style.display = 'block';
		return false;
	}
	myForm.submit();
}

//show result
function result(){
	document.getElementById("survey-form").submit();
}

//function to display scores
function populateScores(){

	var qtScore = parseInt(getURLParameter("qt")) * 25;
	var rdScore = parseInt(getURLParameter("rd")) * 25;
	var avScore = parseInt(getURLParameter("av")) * 25;
	
	document.getElementById("qt-answered").innerHTML = "<strong>"+ getURLParameter("qt-ans") +"</strong>";
	document.getElementById("rd-answered").innerHTML = "<strong>"+ getURLParameter("rd-ans") +"</strong>";
	document.getElementById("av-answered").innerHTML = "<strong>"+ getURLParameter("av-ans") +"</strong>";

	document.getElementById("qt-correct").innerHTML = "<strong>"+ getURLParameter("qt") +"</strong>";
	document.getElementById("rd-correct").innerHTML = "<strong>"+ getURLParameter("rd") +"</strong>";
	document.getElementById("av-correct").innerHTML = "<strong>"+ getURLParameter("av") +"</strong>";

	document.getElementById("qt-score").innerHTML = qtScore;
	document.getElementById("rd-score").innerHTML = rdScore;
	document.getElementById("av-score").innerHTML = avScore;



}