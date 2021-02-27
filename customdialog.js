var myAlert = document.getElementById("myAlert");
var btnAlert = document.getElementById("alert");
var closeAlert = document.getElementById("close");

btnAlert.onclick = function() {
    myAlert.style.display = "block";
}

closeAlert.onclick = function() {
    myAlert.style.display = "none";
}



var myConfirm = document.getElementById("myConfirm");
var btnConfirm = document.getElementById("confirm");
var okConfirm = document.getElementById("ok_c");
var cancelConfirm = document.getElementById("cancel_c");

btnConfirm.onclick = function() {
    myConfirm.style.display = "block";
}

okConfirm.onclick = function() {
    myConfirm.style.display = "none";
    txt = "Confirm result: true";
    document.getElementById("out").innerHTML = txt;

}

cancelConfirm.onclick = function() {
    myConfirm.style.display = "none";
    txt = "Confirm result: false";
    document.getElementById("out").innerHTML = txt;
}

var myPrompt = document.getElementById("myPrompt");
var btnPrompt = document.getElementById("prompt");
var okPrompt = document.getElementById("ok_p");
var cancelPrompt = document.getElementById("cancel_p");

btnPrompt.onclick = function() {
    myPrompt.style.display = "block";
}

okPrompt.onclick = function() {
    myPrompt.style.display = "none";
    txt = "Prompt result: " + document.getElementById("name").value;
    let clean = DOMPurify.sanitize(txt);
    document.getElementById("out").innerHTML = clean;
}

cancelPrompt.onclick = function() {
    myPrompt.style.display = "none";
    txt = "User didn’t enter anything."
    document.getElementById("out").innerHTML = txt;

}

