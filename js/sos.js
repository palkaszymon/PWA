function sendSOS() {
    console.log('vibrate')
    if ("vibrate" in navigator) {
        navigator.vibrate([100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100]);
    }
    else {
        alert("Vibration not supported by your browser")
    }
}