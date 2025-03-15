const form = document.querySelector(".login-form")

function validation (event){
    event.preventDefault();
    const {email,password} = event.currentTarget.elements;
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    
    if(!emailValue || !passwordValue){
    alert('All form fields must be filled in');
    return;
    }
    const user = {
        email:emailValue,
        password:passwordValue,
    }
    console.log(user)
    form.reset()    
}
form.addEventListener("submit", validation);