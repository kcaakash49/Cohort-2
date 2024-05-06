function displayTime() {
    
    const now = new Date();//creates an object now with data value
    const hours = String(now.getHours()).padStart(2,"0"); //padstart pads the current string with another string if needed we get the desired length. it is applied from the left of the current string
    const minutes = String(now.getMinutes()).padStart(2,"0");
    const seconds = String(now.getSeconds()).padStart(2,"0");
    const time = `${hours}:${minutes}:${seconds}`;
    console.clear(); //clears the terminal
    console.log(time);
    
}
    
setInterval(displayTime, 1000);
displayTime();
