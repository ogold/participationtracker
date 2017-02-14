function plus(x) {
  y = x.charAt(0);
  z = document.getElementById(y).innerHTML;
  document.getElementById(y).innerHTML = parseFloat(z) + 1;
}

function minus(x) {
  y = x.charAt(0);
  z = document.getElementById(y).innerHTML;
  document.getElementById(y).innerHTML = parseFloat(z) - 1;
}


function addStudent() {

    var textnode = document.createTextNode(document.getElementById("textentry").value);
    var node = document.createElement("div");
    var checkbox = document.createElement("input");
    var label = document.createElement("label");
    node.className = "checkbox"
    checkbox.type = "checkbox";
    checkbox.value = "";
    checkbox.className = "checkz";
    label.appendChild(checkbox);
    label.appendChild(textnode);
    node.appendChild(label);
    document.getElementById("myClass").appendChild(node);
    document.getElementById("textentry").value = "";
}


function deleteStudent(){
  x = document.getElementsByClassName("checkz");
  for (i = 0; i < x.length; i++) {
    if (x[i].checked) {
      y = x[i];
      y.parentNode.parentNode.removeChild(y.parentNode);
    }
  }
}
