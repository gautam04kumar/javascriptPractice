// 1. Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let today= new Date();
let day=today.getDay();
let dayList=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
console.log("today is",dayList[day])

let hour=today.getHours();
let minute=today.getMinutes();
let second=today.getSeconds();

let prepand=(hour>=12?"PM":"AM")

hour=(hour>=12?hour-12:hour)

if(hour===0 && prepand==="PM"){
    if(minute===0 && second==0){
        hour=12;
        prepand="NOON"
    }
}else{
    hour=12;
    prepand="PM"
}

if(hour===0 && prepand==="AM"){
    if(minute===0 && second==0){
        hour=12;
        prepand="midnight"
    }
}else{
    hour=12;
    prepand="AM"
}
console.log("Current time:" +  hour + prepand + ":" +  minute + ":" + second)
