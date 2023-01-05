let hd = document.querySelector("h1");
let body = document.querySelector("body");
let h2 = document.querySelector("h2");

function addText() {
    h2.textContent = "Added by JS";
}

addText();

// const changecolor = function() {
//     hd.style.color = "red";
// }

// const newH2 = function() {
//     let h2 = document.createElement("h2");
//     h2.appendChild(document.createTextNode("This is H2 :-)"));
//     body.appendChild(h2); 
// }

// newH2();
// hd.addEventListener("mouseenter", changecolor);