document.getElementById('login-btn').addEventListener('click', function(){
    const numberInput = document.getElementById("input-nmbr");
    const numberi = numberInput.value;
    console.log(numberi);
    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value;

    if (numberi === "01234567890" && pin === "1234"){
        alert("Login Success");
        window.location.assign("/home.html");
    } else {
        alert("Login Failed");
        return;
    }
})