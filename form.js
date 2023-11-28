const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit',e =>{
    e.preventDefault();

    validateInputs();
});


const setError = (element,message)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


const isValidEmail= email =>{
   const re =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());

}





const validateInputs = () =>{
    const usernameValue = username.value.trim();
    const emailValue =email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
// for userName 
   if(usernameValue === ''){
    setError(username,'Username is needed');
   }
   else{
    setSuccess(username);
   }

//    for Email 

   if(emailValue === ''){
    setError(email,'valid email required');

   }

  else if(!isValidEmail(emailValue)){

    setError(email,'Enter a valid email address');

  }

  else{
    setSuccess(email);
  }
// for  password


if (passwordValue ===''){
    setError(password,'password is required ')
}
else if (passwordValue.length<8){
    setError(password, 'password must be at least 8 character.')

}
else{
    setSuccess(password);

    // for password2
}
if (password2Value === ''){
    setError(password2,'please conform your password');
}
else if (password2Value !== passwordValue){
    setError(password2," valid password required");

}

else{
    setSuccess(password2);
}
};
