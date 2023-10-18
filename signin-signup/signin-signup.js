const password = document.getElementById('password')
const IIcons = document.querySelectorAll('.show-password')
const newAccountBtn = document.querySelector('.create-new-account-btn')
const signUp = document.querySelector('.sign-up')
const closeSignUpBtn = document.querySelector('.close-sign-up-btn')


IIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        if(password.type === "password"){
            password.type = 'text'
            icon.classList = 'fa-regular fa-eye-slash show-password'
        } else{
            password.type = 'password'
            icon.classList = 'fa-regular fa-eye show-password'
        }
    })
})

newAccountBtn.addEventListener('click', () => {
    signUp.style.left = '0'
    signUp.style.opacity = '1'
})

closeSignUpBtn.addEventListener('click', () => {
    signUp.style.left = '-100%'
    signUp.style.opacity = '0'
})

