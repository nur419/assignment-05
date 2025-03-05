// color change 
let count = 0;
document.getElementById('color-image').addEventListener('click', function(){
   
    switch(count){
        case 0:
        document.body.style.backgroundColor = "Orange";
        break;
        case 1:
            document.body.style.backgroundColor = "Green";
            break;
      
        case 2:
            document.body.style.backgroundColor = "Yellow";
            break;
      
        case 3:
            document.body.style.backgroundColor = "blue";
            break;
     
        case 4:
            document.body.style.backgroundColor = "purpole";
            break;
         default:
            document.body.style.backgroundColor = "Cyan";
            count = -1;
    }  
    count++;
})


// page add...
document.getElementById('discover').addEventListener('click', function(){
    window.location.href ="./hide.html";
})

// TIME ADD
const dataObj = new Date();
const formate = dataObj.getHours()+":"+ dataObj.getMinutes()+":"+ dataObj.getSeconds();
document.getElementById('demo').innerText = formate;


//  decrement value
const buttons =document.querySelectorAll('.card-btn');
for (let i = 0; i < buttons.length; i++) {  
    buttons[i].addEventListener('click', function() {  
        const deceiment =document.getElementById('decrement-value').innerText;
         let convertDecrement = parseInt(deceiment);
        
         if( convertDecrement > 0){
                 document.getElementById('decrement-value').innerText =  convertDecrement - 1
              }
     
        //add history value
        
        const container = document.getElementById('history-add');
        const divElement = document.createElement("div");
        
        divElement.style.padding ="10px";
        divElement.style.borderRadius ="5px";
        divElement.style.marginBottom ="5px";
       
      divElement.innerHTML = `
      You have completed the task Fix Mobile Button issue at ${formate} AM
       `
     container.appendChild(divElement);
    
              alert(`Board update Successfull`); 
              this.disabled = true;
    });  
    
}

// increment value
  for (let i = 0; i < buttons.length; i++) {  
    buttons[i].addEventListener('click', function() {  
        const increment =document.getElementById('Increment-value').innerText;
         let convertIncrement = parseInt(increment);
        
         if( convertIncrement > 0){
            document.getElementById('Increment-value').innerText =  convertIncrement + 1
              }
     
         
    });  
  };

// History remove
  document.getElementById('clear-button').addEventListener('click',function(){
     document.getElementById('history-add').innerHTML = " ";
  });


