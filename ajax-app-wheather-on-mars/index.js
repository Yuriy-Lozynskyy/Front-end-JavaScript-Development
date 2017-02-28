//Task 1
var getJSON = (url) => {
    new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onreadystatechange = () => {
            if (xhr.readyState != 4) //return if not complete
                if (xhr.status != 200) { //check request status
                    reject('Error ' + xhr.status + ': ' + xhr.statusText);

                };
            var info = JSON.parse(xhr.responseText);
            resolve(info);
        };
        xhr.send();
    });
};

//Task 2
var count = 0;
var page = 1;
var load = false;

//Get data from server
var weatherOnMars = url => {
    var result = document.getElementById('info');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener("progress", myFunction);

    function myFunction() {
        var spinner = setTimeout(showPage, 1000);
    };

    var showPage = () => {
        document.getElementById("loader").style.display = "none";
    };

    xhr.onreadystatechange = () => {
        if (xhr.readyState != 4) return; //return if not complete
        if (xhr.status != 200) { //check request status
            alert('Error ' + xhr.status + ': ' + xhr.statusText);
        };
        var info = JSON.parse(xhr.responseText);
        if (info.results[count] !== undefined) {
            console.log(info.results[count].terrestrial_date);
            var celcius = parseInt((info.results[count].max_temp_fahrenheit - 32) * 5 / 9);
            document.getElementById('tempreture').innerHTML = celcius;
            var update = info.results[count].terrestrial_date;
            document.getElementById('update').innerHTML = update;
            if (load) {
                //Wind speed and wind direction are null, so i choose enother values
                var atmoOpacity = info.results[count].atmo_opacity;
                document.getElementById('res1').innerHTML = 'Atmo opacity is: ' + atmoOpacity;
                var season = info.results[count].season;
                document.getElementById('res2').innerHTML = 'Season is: ' + season;
                document.getElementById('load').innerHTML = 'Show less';
            } else {
                document.getElementById('res1').innerHTML = '';
                document.getElementById('res2').innerHTML = '';
                document.getElementById('load').innerHTML = 'Show more';
            };
        } else {
            alert("No more app's data available in archive!");
            count -= 1;
        };
    };
    xhr.send();
};

//Load latest data
window.addEventListener("load", () => {
    count = 0;
    weatherOnMars("http://marsweather.ingenology.com/v1/archive/?page=" + page);
});

//Load next data
document.getElementById('next').addEventListener("click", () => {
    count += 1;
    if (count > 9) {
        page += 1;
        count = 0;
        weatherOnMars("http://marsweather.ingenology.com/v1/archive/?page=" + page);
    } else {
        weatherOnMars("http://marsweather.ingenology.com/v1/archive/?page=" + page);
    };
});

//Load previous data
document.getElementById('previous').addEventListener("click", () => {
    count -= 1;
    if (count < 0 && page > 1) {
        page -= 1;
        count = 9;
        weatherOnMars("http://marsweather.ingenology.com/v1/archive/?page=" + page);
    } else {
        if (count < 0) {
            count = 0;
            alert("This is the latest app's data!");
        }
        weatherOnMars("http://marsweather.ingenology.com/v1/archive/?page=" + page);
    };
});

//Load more data
document.getElementById('load').addEventListener("click", () => {
    if (load) {
        load = false;
        weatherOnMars("http://marsweather.ingenology.com/v1/archive/?page=" + page);
    } else {
        load = true;
        weatherOnMars("http://marsweather.ingenology.com/v1/archive/?page=" + page);
    };
});

module.exports.getJSON = getJSON;
