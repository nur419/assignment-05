// color change 
let count = 0;
document.getElementById('color-image').addEventListener('click', function(){
   
    switch(count){
        case 0:
        document.body.style.backgroundColor = "green";
        break;
        case 1:
            document.body.style.backgroundColor = "red";
            break;
      
        case 2:
            document.body.style.backgroundColor = "yellow";
            break;
      
        case 3:
            document.body.style.backgroundColor = "blue";
            break;
     
        case 4:
            document.body.style.backgroundColor = "purpole";
            break;
         default:
            document.body.style.backgroundColor = "gray";
            count = -1;
    }  
    count++;
})


// increment and deceiment


document.getElementById("completed").addEventListener('click', function(){
    const deceiment =document.getElementById('decrement-value').innerText;
    let convertDecrement = parseInt(deceiment);
     if( convertDecrement > 0){
        document.getElementById('decrement-value').innerText =  convertDecrement - 1
     }
     
})
document.getElementById("completed").addEventListener('click', function(){
    const increment =document.getElementById('Increment-value').innerText;
let convertIncrement = parseInt(increment);
 
   
        document.getElementById('Increment-value').innerText =  convertIncrement + 1
    
     alert()
})
const dataObj = new Date();

const formate = dataObj.getHours()+":"+ dataObj.getMinutes()+":"+ dataObj.getSeconds();
// console.log(formate);
document.getElementById('demo').innerText = formate;
