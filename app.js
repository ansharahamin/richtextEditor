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
    document.execCommand("justifyLeft", false, null);

}
function right() {
    var editor = document.getElementById("editor");
    document.execCommand("justifyRight", false, null);
    editor.classList.toggle("right");
}
function center() {
    var editor = document.getElementById("editor");
    document.execCommand("justifyCenter", false, null);
    editor.classList.toggle("center");
}
function olist() {
    var editor = document.getElementById("editor");
    editor.classList.toggle("olist");
    var list = prompt("Enter the list items:");
    document.execCommand("insertOrderedList", false, list)
}
function ulist() {
    var editor = document.getElementById("editor");
    editor.classList.toggle("ulist");
    var list = prompt("Enter the list items:");
    document.execCommand("insertUnorderedList", false, list)
}
function addLink() {
    var editor = document.getElementById("editor");
    editor.classList.toggle("link");
    var url = prompt("Enter the URL:");
    document.execCommand("createLink", false, url)
}

function undo() {
    document.execCommand("undo", false, null);
}

function redo() {
    document.execCommand("redo", false, null);
}
function setColor(value) {
  document.execCommand("foreColor", false, value);
}
function quote() {
  const selection = window.getSelection();
  if (!selection.rangeCount) return;

  const range = selection.getRangeAt(0);
  const span = document.createElement("span");
  span.classList.add("quote");

  // Wrap selected text in span
  span.appendChild(range.extractContents());
  range.insertNode(span);
}
function setFontSize(size) {
  if (!size) return; // agar size select nahi hua
  document.execCommand("fontSize", false, size);
}
function addImage(){
    const url = prompt("Enter image URL:");
    if(url){
        document.execCommand("insertImage", false, url);
    }   
}
function highlightText() {
  const color = prompt("Enter highlight color (name or hex):", "yellow");
  if (!color) return;
  document.execCommand("backColor", false, color);
}
function indentText() {
  document.execCommand("indent");
}

function outdentText() {
  document.execCommand("outdent");
}
function removeFormat() {
  document.execCommand("removeFormat");
}
function clearEditor() {
  document.getElementById("editor").innerHTML = "";
}

const emojiSelect = document.getElementById('emojiSelect');
const editor = document.getElementById('editor');

emojiSelect.addEventListener('change', function() {
  const emoji = this.value;
  if (!emoji) return;

  const selection = window.getSelection();
  if (!selection.rangeCount) return;

  const range = selection.getRangeAt(0);
  const textNode = document.createTextNode(emoji);
  range.insertNode(textNode);

  // Move cursor after emoji
  range.setStartAfter(textNode);
  selection.removeAllRanges();
  selection.addRange(range);

  // Reset select to placeholder
  this.value = "";
});



function eraseFormatting() {
  const selection = window.getSelection();
  if (!selection.rangeCount) return;

  const range = selection.getRangeAt(0);

  // Extract selected content
  const content = range.extractContents();

  // Wrap in a span with no styles
  const span = document.createElement('span');
  span.appendChild(content);
  span.removeAttribute('style');
  span.className = '';

  // Insert back into editor
  range.insertNode(span);

  // Reset cursor
  range.setStartAfter(span);
  selection.removeAllRanges();
  selection.addRange(range);
}

 
// function quote() {
//   const selection = window.getSelection();

//   if (!selection.rangeCount) return; // Agar koi text select nahi

//   const range = selection.getRangeAt(0); // selected text
//   const selectedText = range.extractContents(); // remove selected text temporarily

//   const blockquote = document.createElement("blockquote");
//   blockquote.appendChild(selectedText);

//   range.insertNode(blockquote); // insert blockquote in place
// }



