var intervalID = setInterval(printTime, 1000, 'too long', 'annother one')
function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
};