var acc = document.getElementsByClassName("accordion");
var panel = document.getElementsByClassName('text');

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
    	var setClasses = !this.classList.contains('active');
        setClass(acc, 'active', 'remove');
        setClass(panel, 'show', 'remove');
        
       	if (setClasses) {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
}

function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}

// Ava DuVernay Quiz
function updateResult() {
	var one = document.getElementById("q1a2");
	var two = document.getElementById("q2a1");
	var three = document.getElementById("q3a3");
	var four = document.getElementById("q4a3");
	var five = document.getElementById("q5a1");
	var correct = [one, two, three, four, five];
	var numCorrect = 0;
	var result = document.getElementById("result");

	for (let i = 0; i < correct.length; i++) {
  	if(correct[i].checked == true){
			numCorrect ++;
		}
	}
	
	result.innerHTML="Your score is: " + String(numCorrect) + "/5";
}