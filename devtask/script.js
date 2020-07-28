const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener ("submit", (e) => {
    e.preventDefault ();

    checkInputs ();
});

const checkInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (emailValue === "" || null) {
        showErorMsg (email, "Email is not valid"); 
        email.style.border = "1px solid #e53e3e";
    // } else if (!isEmail(email)) {
    //     showErorMsg (email, "Please enter a valid email");
    //     email.style.border = "1px solid #e53e3e";
    } else {
        showSuccessMsg (email, "");
        email.style.border = "1px solid #38a169"
    }

    if (passwordValue === "") {
        showErorMsg (password, "Please enter a valid password"); 
        password.style.border = "1px solid #e53e3e";
    } else {
        showSuccessMsg (password, "");
        password.style.border = "1px solid #38a169"
    }
}

const showErorMsg = (input, message) => {
    const inputJs = input.parentElement;
    const small = inputJs.querySelector("small");

    small.innerText = message;
}

const showSuccessMsg = (input, message) => {
    const inputJs = input.parentElement;
    const small = inputJs.querySelector("small");

    small.innerText = message;
}

// const isEmail = (email) => {
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }

