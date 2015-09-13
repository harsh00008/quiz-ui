
window.onload = function(){
	//on page load set hidden param from URL
	if(!hasClass("body", "result") && !hasClass("body", "login")){
		setHiddenParamaters();	
	}

	//draw graph if canvas exists
	if(document.getElementById("graph") != null){
		drawGraph();	
	}
	
	//for result
	if(hasClass("body", "result")){
		populateScores();
	}
}




