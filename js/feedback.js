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

//Für den send button
document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("theme") == "invert") {
        document.querySelector("input[type=submit]").classList.add("invert");
    }
});
document.querySelector("#invertButton").addEventListener("click", () => {
    document.querySelector("input[type=submit]").classList.toggle("invert");
});
const feedbackForm = document.getElementById('feedback-form');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function(event) {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const feedbackInput = document.getElementById('feedback');
  
  const forbiddenChars = /[\u00e4\u00f6\u00fc\u00df]/; // ä ö ü ß
  
  if (forbiddenChars.test(nameInput.value) || forbiddenChars.test(emailInput.value) || forbiddenChars.test(feedbackInput.value)) {
    alert('Ungültige Sonderzeichen gefunden! Bitte verwenden Sie nur Buchstaben und Zahlen.');
    event.preventDefault();
  } else {
    feedbackForm.submit();
    nameInput.value = '';
    emailInput.value = '';
    feedbackInput.value = '';
  }
});