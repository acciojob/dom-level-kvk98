//your JS code here. If required.
const ele = document.getElementById("level");
const html = document.querySelector("html");
let count = 0;
while (ele.parentNode != html) {
	ele = ele.parentNode;
	count++;
}
alert("The level of the element is: " + count);