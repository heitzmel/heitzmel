//Für den ganzen Body
document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("theme") == "invert") {
        document.querySelector("body").classList.add("invert");
    }

    let currentTime = new Date();
    let year = currentTime.getFullYear();
    document.querySelector('#currentYear').innerHTML = year;
});
document.querySelector("#invertButton").addEventListener("click", () => {
    document.querySelector("body").classList.toggle("invert");
    if(localStorage.getItem("theme") == "invert") {
        localStorage.setItem("theme", "");
    }
    else {
        localStorage.setItem("theme", "invert");
    }
});

//Für die Überschrift im h1
document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("theme") == "invert") {
        document.querySelector("h1").classList.add("invert");
    }
});
document.querySelector("#invertButton").addEventListener("click", () => {
    document.querySelector("h1").classList.toggle("invert");
});