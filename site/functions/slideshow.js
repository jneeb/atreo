var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function currentDiv(n) {
	showDivs(slideIndex = n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	if (n > x.length) {slideIndex = 1}
	if (n < 1) {slideIndex = x.length}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[slideIndex-1].style.display = "block";
}

var close = document.getElementById("close");
var slideShow = document.getElementById("slideFlex");
close.onclick = slideClose;

function slideClose() {
	slideShow.className += "hide";
}
var galleryOne = document.getElementById("galleryOne");
galleryOne.onclick = galleryShow;

function galleryShow() {
	slideShow.classList.remove("hide");
}
// var x = document.getElementsByClassName("mySlides");
// document.onclick = function() {
// 	if (this != "mySlides") {
// 		for (var i = 0; i < x.length; i++) {
// 			slideClose();
// 		}
// 	}
// }
