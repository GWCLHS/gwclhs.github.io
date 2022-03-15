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
var questionCount=0;
/*
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");


var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");


var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");


var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");


var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");

var result = document.getElementById("result");

q1a1.addEventListener("click", numInvalid);
q1a2.addEventListener("click", numCorrect);
q1a3.addEventListener("click", numInvalid);

q2a1.addEventListener("click", numCorrect);
q2a2.addEventListener("click", numInvalid);
q2a3.addEventListener("click", numInvalid);

q3a1.addEventListener("click", numInvalid);
q3a2.addEventListener("click", numInvalid);
q3a3.addEventListener("click", numCorrect);

q4a1.addEventListener("click", numCorrect);
q4a2.addEventListener("click", numInvalid);
q4a3.addEventListener("click", numInvalid);

q5a1.addEventListener("click", numInvalid);
q5a2.addEventListener("click", numInvalid);
q5a3.addEventListener("click", numCorrect);

function updateResult() {
  result.innerHTML="You got " + str(numCorrect/5*100) + "% correct!"
  }*/