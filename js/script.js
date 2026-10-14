const icon = document.querySelector(".togglePassword")
const password = document.querySelector(".password")

icon.addEventListener("click", () => {

    if (password.type === "password") {
        password.type = "text"
        icon.classList.replace("fa-eye", "fa-eye-slash");


    } else {
        password.type = "password"
        icon.classList.replace("fa-eye-slash", "fa-eye");
    }
})

const icon2 = document.querySelector(".icon2")
const password2 = document.querySelector(".password2")

icon2.addEventListener("click", () => {

    if (password2.type === "password") {
        password2.type = "text"
        icon2.classList.replace("fa-eye", "fa-eye-slash");

    } else {
        password2.type = "password"
        icon2.classList.replace("fa-eye-slash", "fa-eye");
    }
})



const form = document.querySelector(".formWrap")


const name = document.querySelector("#name")
const email = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const Confirmpassword = document.querySelector("#Confirmpassword")


const nameError = document.querySelector(".nameError")
const emailError = document.querySelector(".emailError")
const passwordError = document.querySelector(".passwordError")
const confirmPasswordError = document.querySelector(".confirmPasswordError")

const peraError = document.querySelector(".peraError")

form.addEventListener("submit", (e) => {

    e.preventDefault()


    if (!name.value) {
        nameError.innerHTML = "Name is required"
        nameError.style.color = "red"
        name.style.border = "1px solid red"
    }
    else {
        nameError.innerHTML = ""
        name.style.border = "1px solid #2455d6"
    }
    if (!email.value) {
        emailError.innerHTML = "Email is required"
        emailError.style.color = "red"
        email.style.border = "1px solid red"
    }
    else {
        emailError.innerHTML = ""
        email.style.border = "1px solid #2455d6"
    }
    if (!passwordInput.value) {
        passwordError.innerHTML = "Password is required"
        passwordError.style.color = "red"
        passwordInput.style.border = "1px solid red"
    }
    else {
        passwordError.innerHTML = ""
        passwordInput.style.border = "1px solid #2455d6"
    }
    if (!Confirmpassword.value) {
        confirmPasswordError.innerHTML = "Confirm Password is required"
        confirmPasswordError.style.color = "red"
        Confirmpassword.style.border = "1px solid red"
    }
    else if (Confirmpassword.value !== passwordInput.value) {
        confirmPasswordError.innerHTML = "Passwords do not match"
        confirmPasswordError.style.color = "red"
        Confirmpassword.style.border = "1px solid red"
    }
    else {
        confirmPasswordError.innerHTML = ""
        Confirmpassword.style.border = "1px solid #2455d6"
    }



        const selectedGender = document.querySelectorAll(
        ".radioGender:checked");
        const genderBox = document.querySelector(".genderBox")
        const genderError = document.querySelector(".genderError")




    if (!selectedGender.length) {
        genderError.innerHTML = "Please select your gender";
        genderBox.style.border = "1px solid red";
    } else {
        genderError.innerHTML = "";
        genderBox.style.border = "1px solid #ddd";
    }
})