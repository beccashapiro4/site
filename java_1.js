function alrt() {
    alert("blub");
}

var page = document.getElementById('front');
page.addEventListener('click', alrt, false);