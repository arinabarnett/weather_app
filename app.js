window.addEventListener('load', () => {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
        });
    } else {
        h1.textContent = "Hi, please enable access to your location in order to see the current weather in your region."
    }
});