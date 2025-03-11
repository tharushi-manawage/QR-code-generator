const wrapper = document.querySelector(".wrapper"),
input = wrapper.querySelector(".form input"),
button = wrapper.querySelector(".form button"),
code = wrapper.querySelector(".qr__code img");

button.addEventListener("click", () => {
    let qr = input.value;
    if(!qr) return; // if the input is empty, then return from here.
    console.log(qr);
    button.innerText = "Generating QR Code...";
    code.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qr}`; // getting QR code of user entered value using the qrserver and passing the api to return via img src to code (variable: script.js/line 4).
    code.addEventListener("load", () => { // run after once QR code img loaded.
        wrapper.classList.add("active");
        button.innerText = "Generate QR Code";
    });
});

input.addEventListener("keyup", () => {
    if(!input.value) {
        wrapper.classList.remove("active");
    }
});