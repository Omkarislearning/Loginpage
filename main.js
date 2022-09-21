const signInBtn=document.querySelector('.signIn');
const signUpBtn=document.querySelector('.SignUp');
const formBox=document.querySelector('.form');
const formSignIn=document.querySelector('.signinform');
const formSignUp=document.querySelector('.signupform');
const body=document.querySelector('body');
const name_error=document.querySelector('valueerror');


signUpBtn.addEventListener('click',()=>
{
    formBox.classList.add('active');
    body.classList.add('active');
});

signInBtn.addEventListener('click',()=>
{
    formBox.classList.remove('active');
    body.classList.remove('active');

});

formSignIn.addEventListener('submit',e=>
{
    e.preventDefault();
    validationSignIn(); 

});

 

formSignUp.addEventListener('submit',e=>
{
    e.preventDefault();
    validationSignUp();
});


const username=document.querySelector('.name');
const email1=document.querySelector('.email1');
const email=document.querySelector('.email');
const phone_no=document.querySelector('.phone');
const password=document.querySelector('.password');
const password1=document.querySelector('.password1');
const cpassword=document.querySelector('.cpassword');


const setError=(input,message)=>
{
    const inputcontrol=input.parentElement;
    const errorText=inputcontrol.querySelector('.valueerror');
    errorText.innerText=message;
    inputcontrol.classList.add('error');
    inputcontrol.classList.remove('success');
}
const setSucces=input=>
{
    const inputcontrol=input.parentElement;
    const errorText=inputcontrol.querySelector('.valueerror');
    errorText.innerText='';
    inputcontrol.classList.add('success');
    inputcontrol.classList.remove('error')
}

function emailValid()
{
    const emailVal1=email1.value.trim();
    if(emailVal1==='')
    {
        setError(email1,'Cant be Blank');
    }
    else if(!emailVal1.match((/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)))
    {
        setError(email1,'Not a valid Email');
    }
    else
    {
        setSucces(email1);
    }
}


function passwordValid()
{
    const passwordVal1=password1.value.trim();
    if(passwordVal1==='')
    {
        setError(password1,'Password Cant be Blank');
    }
    else if(passwordVal1>=6)
    {
        setError(password1,'Must conatin 8 Character');
    }
    else
    {
        setSucces(password1);
    }
}
email1.addEventListener('input',emailValid);
password1.addEventListener('input',passwordValid)


function usernameValid()
{
    const usernameVal=username.value.trim();
    if(usernameVal===''||username.lenght==0)
    {
        setError(username,'Name required');
    }
    else
    {
        setSucces(username);
    }
}


function email1Valid()
{
    const emailVal=email.value.trim();
    if(emailVal==='')
    {
        setError(email,'Cant be Blank');
    }
    else if(!emailVal.match((/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)))
    {
        setError(email,'Not a valid Email');
    }
    else
    {
        setSucces(email);
    }
}


function phoneValid()
{
    const phoneVal=phone_no.value.trim();
    if(phoneVal==='')
    {
        setError(phone_no,'Cant be Blank')
    }
    else if(!phoneVal.match(/^[0-9]{10}$/) || phoneVal.lenght>10)
    {
        setError(phone_no,'Must Contain 10 digit number')
    }
    else
    {
        setSucces(phone_no);
    }

}
var passwordVal=password.value.trim();
function password1Valid()
{
    const passwordVal=password.value.trim();
    if(passwordVal==='')
    {
        setError(password,'Password Cant be Blank');
    }
    else if(passwordVal>=6)
    {
        setError(password,'Must conatin 8 Character');
    }
    else
    {

        setSucces(password);
    }
}

function confirmPValid()
{
    const cpasswordVal=cpassword.value.trim();
    if(cpasswordVal==='')
    {
        setError(cpassword,'Password Cant be Blank')
    }
    else if(passwordVal==passwordVal)
    {
        setSucces(cpassword);
    }
    else
    {
        setError(cpassword,'Passwords do not match');
    }
}
username.addEventListener('input',usernameValid);
email.addEventListener('input',email1Valid);
phone_no.addEventListener('input',phoneValid);
password1.addEventListener('input',password1Valid);

function validationSignUp()
{
 emailValid();
 passwordValid();   
}
function validationSignIn()
{
    usernameValid();
    email1Valid();
    phoneValid();  
    password1Valid();
    confirmPValid();
}
