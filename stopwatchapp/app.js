//variables to capture various elements of html
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const secs = document.getElementById("secs");
const centisecs = document.getElementById("centisecs");


//variables to pass to clearinterval function in stop event listener to apply stop funcationality
let hoursControl;
let minutesControl;
let secsControl;
let centisecControl;


//start event listener to start the timer
start.addEventListener('click', () => {
    hoursControl = setInterval(updateHours, 3600000);
    console.log("hours updated");
    minutesControl = setInterval(updateMinutes, 60000);
    console.log("minutes updated");
    centisecControl = setInterval(updatecentisecs, 1);
    console.log("centisecs updated");
    secsControl = setInterval(updateSecs, 1000);
    console.log("secs updated");
});

//stop sevent listener to stop the stopwatch
stop.addEventListener('click' ,() => {
    clearInterval(centisecControl);
    clearInterval(secsControl);
    clearInterval(minutesControl);
    clearInterval(hoursControl);
});

reset.addEventListener('click', () => {
    clearInterval(centisecControl);
    clearInterval(secsControl);
    clearInterval(minutesControl);
    clearInterval(hoursControl);
    centisecs.innerText = "00";
    secs.innerText = "00";
    minutes.innerText = "00";
    hours.innerText = "00";
})


//function to update centisecs
let centisecsCount = 0;
const updatecentisecs = () =>{
    centisecsCount = centisecsCount +1;
    if(centisecsCount>100){
        centisecsCount = centisecsCount % 100;
    }
    centisecs.innerText = centisecsCount;
}

//function to update secs
let secsCount = 0;
const updateSecs = () => {
    secsCount = secsCount + 1;
    if(secsCount > 60){
        secsCount = secsCount % 60;
    }
    secs.innerText = secsCount;
}

//function to update minutes
let minuteCount = 0;
const updateMinutes = () => {
    minuteCount = minuteCount + 1;
    if(minuteCount > 60){
        minuteCount = minuteCount % 60;
    }
    minutes.innerText = minuteCount;
}

//function to update hours
let hoursCount = 0;
const updateHours = () => {
    hoursCount = hoursCount+1;
    hours.innerText = hoursCount;
}


