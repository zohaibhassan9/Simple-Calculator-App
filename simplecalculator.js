const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultDisplay = document.getElementById('result')

const  addBtn= document.getElementById('addBtn');
const subBtn = document.getElementById('subBtn');
const mulBtn = document.getElementById('mulBtn');
const divBtn = document.getElementById('divBtn');

function getNumbers(){
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    if (isNaN(num1) || isNaN(num2)){
    
        alert('Please enter a valid number.')
        return null;
    }
    return{num1, num2}
    
    }




// we have two methods that have same scenarios 




// (i) The first one is given below


// function getResults(operation){
// const numbers = getNumbers();

// if(!numbers) return;

// const {num1, num2} = numbers;

// let result;

// switch(operation){

//     case 'add':
//     result = num1 + num2;
//     break;
//     case 'subtract':
//     result = num1 - num2;
//     break;
//     case 'multiply':
//     result = num1*num2;
//     break
//     case "division":
//     result = num2 !== 0 ? num1/num2: 'Division by 0 is not allowed.';
//     break;
//     default:
//     alert('Invalid operation')
//     return;

// }

// resultDisplay.textContent = result;
// }

// addBtn.addEventListener('click', () => getResults('add'));
// subBtn.addEventListener('click', () => getResults('subtract'));
// mulBtn.addEventListener('click', () => getResults('multiply'));
// divBtn.addEventListener('click', () => getResults('division'));



// ii) The Second method for the simple calculator are given below 
// for addition
addBtn.addEventListener('click', ()=>{
const numbers = getNumbers();

if(numbers){
    const {num1, num2} = numbers;
    resultDisplay.textContent = `Result: ${num1 + num2}`;
}

})
// for subtraction
subBtn.addEventListener('click', ()=>{
const numbers = getNumbers();

if(numbers){
    const {num1, num2} = numbers;
    resultDisplay.textContent = `Result: ${num1 - num2}`;
}
})

// for multiplication
mulBtn.addEventListener('click', ()=>{
    const numbers = getNumbers();
    
    if(numbers){
        const {num1, num2} = numbers;
        resultDisplay.textContent = `Result: ${num1 * num2}`
    }
    })

    // for division
    divBtn.addEventListener('click', ()=>{
        const numbers = getNumbers();
        
        if(numbers){
            const {num1, num2} = numbers;
            resultDisplay.textContent = `Result: ${num1 / num2}`

            if(num2 === 0){
                alert('Please divide bt 0 are not allowed')
                return;
            }
            
        }
        })