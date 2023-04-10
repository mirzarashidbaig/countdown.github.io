

let inpd = document.querySelector('#date');
let endDate = inpd;
let input = document.getElementsByClassName("inputs");

function countdown(){
    const end = new Date(endDate.value);
    const now = new Date();
    const diff = (end-now)/1000;
    const days = Math.floor((diff/3600)/24);
    const hours = Math.floor(diff/60/60)%24;
    const minutes = Math.floor(diff/60)%60;
    const second = Math.floor(diff%60);
    input[0].value = days
    input[1].value = hours
    input[2].value = minutes
    input[3].value = second
    
    setInterval(() => {
        countdown();
    }, 1000);
    
    
}




