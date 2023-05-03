const submitBtn = document.querySelector(".submit")
const input = document.querySelector(".input")
const newRem = document.querySelector(".rem")
const cancel = document.querySelector(".cancel")

 const freq1 = document.querySelector(".one")
 const freq2 = document.querySelector(".two")
 const freq3 = document.querySelector(".three")
 const freq4 = document.querySelector(".four")
 const freq5 = document.querySelector(".five")
 const freq6 = document.querySelector(".six")
 const freq7 = document.querySelector(".seven")


 function getCheckboxValue(){
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
 
    const checkedValues = [];
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked){
                checkedValues.push(checkbox.value)
        }
    });

    const numOfTime = parseInt(checkedValues)

//     const strNumber = "42"; // This is a string representation of a number
// const intNumber = parseInt(strNumber); // This is the integer representation of the string

// console.log(intNumber); // Output: 42


   alert("Hi there, you will be notified of your task at every " + numOfTime + "milliseconds")
}




//  function getCheckboxValues() {
//     // Select all checkboxes
//     const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
//     // Loop through the checkboxes and check which ones are checked
//     const checkedValues = [];
//     checkboxes.forEach((checkbox) => {
//       if (checkbox.checked) {
//         checkedValues.push(checkbox.value);
//       }
//     });
  
//     // Display the checked values
//     console.log(checkedValues);
//   }
  

//  if (l1.checked == true){  
//     var pl1 = document.getElementById("check1").value;  
//     res = pl1 + ",";   
//   }   

function task() {
    const taskName = document.getElementById("title").value
    const taskDate = document.getElementById("date").value
    const taskDetails= document.querySelector(".details").value
    
    console.log(taskDetails);
}


submitBtn.addEventListener("click", ()=>{
    task()
    getCheckboxValue()
    input.classList.remove("show")
})

newRem.addEventListener("click", function(){

    input.classList.add("show")
})

cancel.addEventListener("click", ()=>{
    input.classList.remove("show")
})




// const schedule = require("node-schedule");

// const date = new Date(2023, 11, 09, 15, 00, 00);

// schedule.scheduleJob(date, function(){
    
// })