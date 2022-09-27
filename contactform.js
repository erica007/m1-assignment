var contact_method = document.getElementById("contact_method");
var contact_input_label = document.getElementById("contact_text");
var contact_input = document.getElementById("contact_input");


function contactMethodChange(){
    if (contact_method.value == "email"){
        contact_input_label.innerHTML = "Enter your email";
        contact_input.style.visibility = "visible";
    } else if (contact_method.value == "phone") {
        contact_input_label.innerHTML = "Enter your phone";
        contact_input.style.visibility = "visible";
    } else {
        contact_input_label.innerHTML = "";
        contact_input.style.visibility = "hidden";
    }
}

contact_method.addEventListener("change", contactMethodChange);