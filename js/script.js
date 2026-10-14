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

