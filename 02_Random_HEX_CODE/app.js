
    const button = document.getElementById('random');
    const CONTAINER = document.getElementById('container');
    const MESSAGE = document.getElementById('message');
    const HEX_VALUE = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    button.addEventListener('click', event => 
    {
            let hex = '#';
            while (hex.length <= 6)
            {
              hex += HEX_VALUE[Math.floor(Math.random()*HEX_VALUE.length)];

            }
            
            CONTAINER.style.backgroundColor = hex;
            MESSAGE.innerHTML = hex;

            
    })
