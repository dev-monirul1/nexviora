const icon = document.querySelector(".togglePassword")
const password = document.querySelector(".password")

icon.addEventListener("click", ()=>{

    if (password.type === "password") {
        password.type = "text"

    }else{
        password.type = "password"
    }
})

