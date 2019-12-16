window.addEventListener('load', () => {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.darksky.net/forecast/883a0d50b7df4f8f79e4748ef3152654/${lat},${long}`;

            fetch(api)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    console.log(data);
                });
        });
    } 
});