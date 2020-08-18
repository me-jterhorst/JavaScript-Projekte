
  const btn = document.querySelector('button');
  const CONTAINER = document.getElementById('container');
  const MESSAGE_BOARD = document.getElementById('message');
  const COLORS = ["#E27D60", "#85DCBA", "#E8A87C", "#C38D9E", "#41B3A3"];
  
  let message = "";
  let lastColor;
  CONTAINER.style.backgroundColor = "darkslategray";
 
      
  function changeColor()
  {
        
        let colorIndex = Math.floor(Math.random() * COLORS.length);

        lastColor = "";
        
        while(lastColor === colorIndex)
        {
            changeColor();
        } 
        
        CONTAINER.style.backgroundColor = COLORS[colorIndex];
        MESSAGE_BOARD.innerHTML = COLORS[colorIndex];
        return lastColor = colorIndex;
   };
 

