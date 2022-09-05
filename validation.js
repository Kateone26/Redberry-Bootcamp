const form = document.getElementById('registration');
const firstName = document.getElementById('name');
const surname = document.getElementById('surname');
const email = document.getElementById('mail');
const phone = document.getElementById('phone');
const nextBtn = document.getElementById('next-btn')




// form.addEventListener('submit', e => {
//     // e.preventDefault();

    
    
    

    
//     validateInputs();
// });

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
nextBtn.addEventListener('click', validateInputs, function(){
    if(setError = (0,0)){
        console.log('hello');
    }
})

function validateInputs() {
    const firstNameValue = firstName.value.trim();
    const surnameValue = surname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value;

    // name
    let georgianLetters = (/^[ა-ჰ]+$/);
    if(firstNameValue === '') {
        setError(firstName, 'სავალდებულოა');
    }else if(!firstNameValue.match(georgianLetters)){
        setError(firstName, 'გამოიყენე ქართული ასოები');
    }else if(firstNameValue.length < 2){
        setError(firstName, 'მინიმუმ ორი სიმბოლო');
    } else {
        setSuccess(firstName);
    }
    // surname
    if(surnameValue === '') {
        setError(surname, 'სავალდებულოა');
    }else if(!surnameValue.match(georgianLetters)){
        setError(surname, 'გამოიყენე ქართული ასოები');
    }else if(surnameValue.length < 2){
        setError(surname, 'მინიმუმ ორი სიმბოლო');
    } else {
        setSuccess(surname);
    }

    // team select
    const teamSelect = document.getElementById('team');
    if ( teamSelect.selectedIndex == 0 ) {
        setError(teamSelect, '');
    }else {
        setSuccess(teamSelect);
    }

    // positions select
    const positionsSelect = document.getElementById('positions');
    if ( positionsSelect.selectedIndex == 0 ) {
        setError(positionsSelect, '');
    }else {
        setSuccess(positionsSelect);
    }

    // email
    const emailEnding = '@redberry.ge'

    if(emailValue === '') {
        setError(email, 'სავალდებულოა');
    } else if (!emailValue.match(emailEnding)) {
        setError(email, 'უნდა მთავრდებოდეს @redberry.ge-თი');
    } else {
        setSuccess(email);
    }

    // phone
    let georgPhone =  /\+\S*9\S*9\S*5\S*5\S*[976514]\S*\d\S*\d\S*\d\S*\d\S*\d\S*\d\S*\d\S*/;
    if(phoneValue === '') {
        setError(phone, 'სავალდებულოა');
    } else if (!phoneValue.match(georgPhone)) {
        setError(phone, 'უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს');
    } else {
        setSuccess(phone);
    }
    

    // if(!setError){
    //     console.log('hello');
    // }


    // if(Object.keys(setSuccess).length == 6){
    //     console.log('hello');
    // }

    // if(setSuccess.length ==6){
    //     console.log('hello');
    // }
}

// if(Object.keys(setSuccess).length == 6){
//     console.log('hello');
// }

// if(!setError){
//     console.log('hello');
// }


