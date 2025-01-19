const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');

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
