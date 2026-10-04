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



// const form = document.getElementById(".form")


// const name = document.getElementById("name")
// const email =document.getElementById("email")
// const passwordInput = document.getElementById("password")
// const Confirmpassword =document.getElementById("Confirmpassword")


// form.addEventListener("submit", (e)=>{

//     e.preventDefault()


//     if (condition) {
        
//     }
// })