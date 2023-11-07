//your JS code here. If required.
let ele = document.getElementById("level");
// const html = document.querySelector("html");
let count = 0;
while (ele.parentNode != null) {
	ele = ele.parentNode;
	count++;
}
alert("The level of the element is: " + count);