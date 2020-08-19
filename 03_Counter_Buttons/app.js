const COUNTER = document.getElementById("counter");
let count = 0;

function increase()
{
count++;
return COUNTER.innerHTML = count;
} 


function decrease()
{
count--;
return COUNTER.innerHTML = count;
}