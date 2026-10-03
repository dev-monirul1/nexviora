const icon = document.querySelector(".togglePassword")
const password = document.querySelector(".password")

icon.addEventListener("click", ()=>{

    if (password.type === "password") {
        password.type = "text"

    }else{
        password.type = "password"
    }
})

const icon2 = document.querySelector(".icon2")
const password2 = document.querySelector(".password2")

icon2.addEventListener("click", ()=>{

    if (password2.type === "password") {
        password2.type = "text"

    }else{
        password2.type = "password"
    }
})