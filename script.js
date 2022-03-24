// Accordion
function accordion(id){
	var x = document.getElementById(id);
  if (x.className.indexOf("show") == -1) {
    x.className += " show";
  } else {
    x.className = x.className.replace(" show", "");
  }
}

// Ava DuVernay Quiz
function updateResult() {
	var correct = [document.getElementById("q1a2"), document.getElementById("q2a1"), document.getElementById("q3a3"), document.getElementById("q4a3"), document.getElementById("q5a1")];
	var numCorrect = 0;
	var result = document.getElementById("result");

	for (let i = 0; i < correct.length; i++) {
  	if(correct[i].checked == true){
			numCorrect ++;
		}
	}
	
	result.innerHTML="Your score is: " + String(numCorrect) + "/5";
}