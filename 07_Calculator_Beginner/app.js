window.addEventListener('DOMContentLoaded', function() 
{

const SCREEN = document.getElementById('screen');
const CLEAR = document.getElementById('clear');
const CLEAR_ALL = document.getElementById('clear-all');
const EQUAL = document.getElementById('equal');


const NUMBERS = document.querySelectorAll('.btn');



NUMBERS.forEach(NUMBER => {
    NUMBER.addEventListener('click', event => 
    {
        let value = event.target.dataset.num;
       return SCREEN.value += value;
        
    })
})


EQUAL.addEventListener('click', event => 
{
    if(SCREEN.value === "")
    {
        SCREEN.value = "undefined value";
    }
    else 
    {
        let answer = eval(SCREEN.value);
        SCREEN.value = answer;
    }
})


CLEAR.addEventListener('click', event => 
{
    SCREEN.value='';
})

CLEAR_ALL.addEventListener('click', event => 
{
    SCREEN.value='';
})

},true)
