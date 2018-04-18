function gradeResult() {
	
	var myEnglishResult = parseInt(document.getElementById("value1").value);
	var myIrishResult = parseInt(document.getElementById("value1").value);
	var myMathsResult = parseInt(document.getElementById("value1").value);
	
	var Englishgrade;
	var Irishgrade;
	var Mathsgrade;
	
	
	if (!myEnglishResult){
		alert("Please enter a result");
	
	}
	else {
		if (myEnglishResult > 90) {
			Englishgrade = "A" ;
		} else if (myEnglishResult > 80) {
			Englishgrade = "B";
		} else {
			Englishgrade ="F";
		}
		
	if (!myEnglishResult){
		alert("Please enter a result");
	
	}
	else {
		if (myIrishResult > 90) {
			Irishgrade = "A" ;
		} else if (myIrishResult > 80) {
			Irishgrade = "B";
		} else {
			Irishgrade ="F";
		}
		
	if (!myIrishResult){
		alert("Please enter a result");
	
	}
	else {
		if (myMathsResult > 90) {
			Mathsgrade = "A" ;
		} else if (myMathsResult > 80) {
			Mathsgrade = "B";
		} else {
			Mathsgrade ="F";
		}
	}
	}
	}
}
		
		
		var EnglishMessage = "Your result of" + myEnglishResult + "get you a grade" + EnglishGrade;
		console.log(EnglishMessage);
		document.getElementById("resultsentence").innerHTML = EnglishMessage;
		
		var IrishMessage = "Your result of" + myIrishResult + "get you a grade" + IrishGrade;
		console.log(IrishMessage);
		document.getElementById("resultsentence").innerHTML = IrishMessage;
		
		var MathsMessage = "Your result of" + myMathsResult + "get you a grade" + MathsGrade;
		console.log(MathsMessage);
		document.getElementById("resultsentence").innerHTML = MathsMessage;
	

