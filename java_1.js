function alrt() {
    alert("I wouldn't touch that if I were you.");
}

var page = document.getElementById('front');
page.addEventListener('click', alrt, false);
