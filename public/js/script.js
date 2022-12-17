const btn = document.querySelector("#btn-submit");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    let nameValid = checkName(), emailValid = checkEmail(), passwordValid = checkPassword(), confValid = confirmPwd(), cityValid = checkCity(), addressValid = checkAddress(), tosValid = checkTos();
    let allValid = nameValid && emailValid && passwordValid && confValid && cityValid && addressValid && tosValid;
    if(allValid) {
        window.location.replace("./../../views/index.html")
    }
});

const form = document.querySelector("#form-fill");
// console.log(form);
form.addEventListener("input", () => {
    const input = document.querySelectorAll("#form-fill input");
    if(input[0].value !== "") {
        success(input[0]);
    }   
    if(checkEmail(input[1].value)) {
        success(input[1]);
    }
    if(checkPassword(input[2].value)) {
        success(input[2]);
    }
    if(confirmPwd(input[3].value)) {
        success(input[3]);
    }
    if(checkCity(input[4].value)) {
        success(input[4]);
    }
    if(checkCity(input[5].value)) {
        success(input[5]);
    }
    if(checkCity(input[6].value)) {
        success(input[6]);
    }
});

const checkName = () => {
    const name = document.querySelector("#name");
    const check = name.value;
    if(check.length === 0) {
        error(name, "Name cannot be blank");
        return false;
    } else {
        return true;
    }
};

const checkEmail = () => {
    const email = document.querySelector("#email");
    const check = email.value;
    if(check.endsWith("@gmail.com") || check.endsWith("@outlook.com") || check.endsWith("@yahoo.com") || check.endsWith("@mail.com")){
        return true;
    } else if(check.length === 0) {
        error(email, "Email cannot be empty");
        return false;
    } else {
        error(email, "Please enter a valid email");
        return false;
    }
};

const checkPassword = () => {
    const password = document.querySelector("#password");
    const check = password.value;
    let a = false;
    let b = false;
    for(let i = 0; i < check.length; i++) {
        if(isNaN(check[i])) {
            a = true;
        } else {
            b = true;
        }
    };
    if(a && b) {
        return true;
    } else if (check.length < 8) {
        error(password, "Password length must 8 or more");
        return false;
    } else {
        error(password, "Password must be alphanumeric");
        return false;
    }
};

const confirmPwd = () => {
    const password = document.querySelector("#password");
    const confirm = document.querySelector("#confirm-pwd");
    const pwd = password.value;
    const conf = confirm.value;

    if(conf.length === 0) {
        error(confirm, "Password cannot be empty");
        return false;
    }
    if(pwd !== conf) {
        error(confirm, "Password does not match");
        return false;
    } else {
        return true;
    }
};

const checkCity = () => {
    const city = document.querySelector("#city");
    const check = city.value;

    if(check.length === 0) {
        error(city, "City cannot be empty");
        return false;
    } else {
        return true;
    }
};

const checkAddress = () => {
    const address = document.querySelector("#address");
    const addr = address.value;
    
    if(addr.length === 0) {
        error(address, "Address cannot be empty");
        return false;
    } else {
        return true;
    }
};

const checkTos = () => {
    const tos = document.querySelector("#tos");
    if(tos.checked == 1) {
        return true;
    } else {
        error(tos, "You must aggree to the terms and conditions");
        return false;
    }
}

const error = (input, msg) =>  {
    const inputField = input.parentElement;
    inputField.classList.remove("success");
    inputField.classList.add("error");
    const display = inputField.querySelector("small");
    display.textContent = msg;
};

const success = (input) => {
    const inputField = input.parentElement;
    inputField.classList.remove("error");
    inputField.classList.add("success");
    const display = inputField.querySelector("small");
    display.textContent = "";
};

// const debounce = (func, delay = 500) => {
//     let time;
//     return(...args) => {
//         clearTimeout(time);
//         time = setTimeout(() => {
//             func.apply(this, args);
//         }, delay);
//     };
// };

// const form = document.querySelector("#form-fill");
// form.addEventListener("input", debounce(function(e) {
//         switch(e.target.id) {
//             case "name":
//                 checkName();
//                 break;
//         }
//     })
// );

// form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     let valid = checkName();
//     if(valid) alert("submitted");
// });