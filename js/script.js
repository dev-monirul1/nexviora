const icon = document.querySelector(".togglePassword")
const password = document.querySelector(".password")

icon.addEventListener("click", ()=>{

    if (password.type === "password") {
        password.type = "text"
        icon.classList.replace("fa-eye", "fa-eye-slash");
        

    }else{
        password.type = "password"
        icon.classList.replace("fa-eye-slash", "fa-eye");
    }
})

const icon2 = document.querySelector(".icon2")
const password2 = document.querySelector(".password2")

icon2.addEventListener("click", ()=>{

    if (password2.type === "password") {
        password2.type = "text"
        icon2.classList.replace("fa-eye", "fa-eye-slash");

    }else{
        password2.type = "password"
        icon2.classList.replace("fa-eye-slash", "fa-eye");
    }
})



// const name = 
// const email
// const passwordInput
// const Confirmpassword