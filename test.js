let number = 10;
let string = 'Hellor there';
let isRad = true;

if (number == 10){
    console.log('yeah');
} else {
    console.log('huh')
}
document.getElementById('javeBox').innerHTML = number +5;


let groceries = ['Milk', 'eggs', 'cheese'];


function listGroceries(){
    for (let i=0; i < groceries.length; i++){
        console.log(groceries[i]);
    }
}

listGroceries();

document.getElementById('singleText').addEventListener('click', function(){
    alert('I got clicked');
});