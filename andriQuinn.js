console.log("Porfolio Website");
console.log("By. Andrie Quinatac-an");
console.log(" /Andri Quinn/ ");



var toggleMenuCounter = 1;

var toggleViewHtml = 1;
var toggleViewCss = 1;
var toggleViewJavaScript = 1;
var toggleViewPython = 1;
var toggleViewJava = 1;



function toggleMenu() {
	toggleMenuCounter += 1;

	if (toggleMenuCounter % 2 == 0) {
		document.getElementById("menuBar").style.height = "204px";
	}

	else {
		document.getElementById("menuBar").style.height = "0";
	}
}
