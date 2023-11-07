//your JS code here. If required.
let ele = document.getElementById("level");
const html = document.querySelector("html");
let count = 1;
while (ele.parentNode != html) {
	ele = ele.parentNode;
	count++;
}
alert("The level of the element is: " + count);