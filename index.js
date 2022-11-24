const arrayInputs = document.querySelectorAll('input');

/* Input nameCard */
let nameCard = document.querySelector('.name-card');
arrayInputs[0].addEventListener('input', () => {
    nameCard.innerText = arrayInputs[0].value;
})

/* Input numberCard */
let numberCard = document.querySelector('.number-card');
arrayInputs[1].addEventListener('input', () => { 
    numberCard.innerText = arrayInputs[1].value;
})

/* Input month */
let month = document.querySelector('.mm-card');
arrayInputs[2].addEventListener('input', () => {
    month.innerText = arrayInputs[2].value;
})

/* Input year */
let year = document.querySelector('.yy-card');
arrayInputs[3].addEventListener('input', () => {
    year.innerText = arrayInputs[3].value;
})

/* Input cvc */
let cvc = document.querySelector('.text-back');
arrayInputs[4].addEventListener('input', () => {
    cvc.innerText = arrayInputs[4].value;
})

const $btnContinue = document.getElementById('btn-continue');
$btnContinue.addEventListener('click', () => {
    resetForm();
    $form.style.display = 'block';
    $div.style.display = 'none';
})

function resetForm(){
    let inputNameCard = document.getElementById('cardName');
    let inputNumberCard = document.getElementById('cardNumber');
    let inputMonth = document.getElementById('mm');
    let inputYear = document.getElementById('yy');
    let inputCvc = document.getElementById('cvc');

    inputNameCard.value = '';
    inputNumberCard.value = '';
    inputMonth.value = '';
    inputYear.value = '';
    inputCvc.value = '';
}

const $form = document.querySelector('.form-card');
const $div = document.querySelector('.completed-state');

$form.addEventListener('submit', (e) => {
    e.preventDefault();
    validarFormulario();
})

function validarFormulario(){
    let inputNameCard = document.getElementById('cardName').value;
    let inputNumberCard = document.getElementById('cardNumber').value;
    let inputMonth = document.getElementById('mm').value;
    let inputYear = document.getElementById('yy').value;
    let inputCvc = document.getElementById('cvc').value;

    const errors = {
        cardName: findErrorNameCard(inputNameCard),
        cardNumber: findErrorNumberCard(inputNumberCard),
        mm: findErrorMonth(inputMonth),
        yy: findErrorYear(inputYear),
        cvc: findErrorCvc(inputCvc)
    }

    console.log(errors);
    findErrors(errors)

    if(!errors.cardName && !errors.cardNumber && !errors.cvc && !errors.mm && !errors.yy){
        $form.style.display = 'none';
        $div.style.display = 'flex';
    }
}

function findErrors(errors){
    let errorName = errors.cardName;
    let errorNumberCard = errors.cardNumber;
    let errorMm = errors.mm;
    let errorYy = errors.yy;
    let errorCvc = errors.cvc;

    if(errorName){
        arrayInputs[0].classList.add('error');
    }else{
        arrayInputs[0].classList.remove('error');
    }

    if(errorNumberCard){
        arrayInputs[1].classList.add('error');
    }else{
        arrayInputs[1].classList.remove('error');
    }

    if(errorMm){
        arrayInputs[2].classList.add('error');
    }else{
        arrayInputs[2].classList.remove('error');
    }

    if(errorYy){
        arrayInputs[3].classList.add('error');
    }else{
        arrayInputs[3].classList.remove('error');
    }

    if(errorCvc){
        arrayInputs[4].classList.add('error');
    }else{
        arrayInputs[4].classList.remove('error');
    }
}

/* Exp Reg */

let expRegName = /[A-Z][a-z]+ [A-z][a-z]+/
let expRegMY = /[0-9]{1,2}/;
let expRegCvc = /[0-9]{1,3}/;


function findErrorNameCard(inputNameCard){
    if(inputNameCard == 0){
       return 'Complete Field';
    }

    if(inputNameCard.length > 22){
        return 'characters exceeded'
    }

    if(expRegName.test(inputNameCard) == false){
        return 'invalid value';
    }

    return '';
} 

function findErrorNumberCard(inputNumberCard){
    if(inputNumberCard == 0){
        return 'Complete Field';
    }

    if(typeof(inputNumberCard) !== 'string'){
        return 'Enter numbers';
    }

    if(inputNumberCard.length != 16) {
        return 'invalid value'
    }

    return '';
}

function findErrorMonth(inputMonth){
    if(inputMonth.length === 0){
        month.innerText = '00';
        return 'Complete Field';
    }

    if(expRegMY.test(inputMonth) == false){
        return 'invalid value';
    }

    if(inputMonth.length > 2){
        month.innerText = '00';
        return 'Only 2 digits allowed';
    }

    return '';
}

function findErrorYear(inputYear){
    if(inputYear.length === 0){
        year.innerText = '00';
        return 'Complete Field';
    }

    if(expRegMY.test(inputYear) == false){
        return 'invalid value';
    }

    if(inputYear.length > 3){
        year.innerText = '00';
        return 'Only 2 digits allowed';
    }

    return '';
}


function findErrorCvc(inputCvc){
    if(inputCvc.length === 0) {
        cvc.innerText = '000';
        return 'Complete Field';
    }

    if(inputCvc.length < 3){
        return 'Only 3 digits allowed';
    }

    if(inputCvc.length > 3){
        cvc.innerText = '000';
        return 'Only 3 digits allowed';
    }

    if(expRegCvc.test(inputCvc) === false){
        return 'invalid value'
    }

    return '';
}
