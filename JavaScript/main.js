document.addEventListener("DOMContentLoaded", function(){
let alerButton =document.querySelector(".alert-button");

alerButton.addEventListener("click", function(event) {
    alert("hey! you clicked me!")

})

let subButton = document.querySelector(".sub")
let addButton = document.querySelector(".add")
let displayCount = document.querySelector(".count")

let count = 0;
subButton.addEventListener("click", function(event){
    count = count + 1;
    console.log(count);
    
})
    
})