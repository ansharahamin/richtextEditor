function bold() {
    var editor = document.getElementById("editor");
    editor.classList.toggle("bold");
}
function italic() {
    var editor = document.getElementById("editor");
    editor.classList.toggle("italic");
}
function underline() {
    var editor = document.getElementById("editor");
    editor.classList.toggle("underline");
}
function left() {
    var editor = document.getElementById("editor");
    editor.classList.toggle("left");
}
function right() {
    var editor = document.getElementById("editor");
    editor.classList.toggle("right");
}
function center() {
    var editor = document.getElementById("editor");
    editor.classList.toggle("center");
}
function olist() {
    var editor = document.getElementById("editor");
    editor.classList.toggle("olist");
}
function ulist() {
    var editor = document.getElementById("editor");
    editor.classList.toggle("ulist");
}
function foreColor() {
    var editor = document.getElementById("editor");
    editor.classList.toggle("foreColor");
}
function foreColor() {
    var editor = document.getElementById("editor");
    editor.classList.toggle("foreColor");
}
function changeColor(className) {
  const selection = window.getSelection();
  if (!selection.rangeCount) return;

  const range = selection.getRangeAt(0);
  const span = document.createElement("span");
  span.className = className;          // Add CSS class
  span.appendChild(range.extractContents());
  range.insertNode(span);
}

function color() {
   var color = document.getElementById("color");
   color.style.color = color.value;
console.log(color); 
}

