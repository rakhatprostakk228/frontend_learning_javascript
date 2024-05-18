// Получаем модальные окна
var signupModal = document.getElementById("signupModal");
var loginModal = document.getElementById("loginModal");

// Получаем кнопки, которые открывают модальные окна
var signupBtn = document.getElementById("signupBtn");
var loginBtn = document.getElementById("loginBtn");

// Получаем элементы, которые закрывают модальные окна
var signupSpan = document.getElementById("signupModal").getElementsByClassName("close")[0];
var loginSpan = document.getElementById("loginModal").getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку "Sign Up", открывается модальное окно регистрации
signupBtn.onclick = function() {
    signupModal.style.display = "block";
}

// Когда пользователь нажимает на кнопку "Log In", открывается модальное окно входа
loginBtn.onclick = function() {
    loginModal.style.display = "block";
}

// Когда пользователь нажимает на элемент <span> (крестик), модальное окно закрывается
signupSpan.onclick = function() {
    signupModal.style.display = "none";
}

loginSpan.onclick = function() {
    loginModal.style.display = "none";
}

// Когда пользователь кликает в любом месте окна, закрывается модальное окно
window.onclick = function(event) {
    if (event.target == signupModal) {
        signupModal.style.display = "none";
    }
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Получаем кнопки, которые открывают модальные окна
var editBtn = document.getElementById("editBtn");

// Когда пользователь нажимает на кнопку "Edit Profile", открывается модальное окно редактирования профиля
editBtn.onclick = function() {
    editModal.style.display = "block";
}

var editSpan = document.getElementById("editModal").getElementsByClassName("close")[0];

// Когда пользователь нажимает на элемент <span> (крестик), модальное окно закрывается
editSpan.onclick = function() {
    editModal.style.display = "none";
}

// Когда пользователь кликает в любом месте окна, закрывается модальное окно
window.onclick = function(event) {
    if (event.target == editModal) {
        editModal.style.display = "none";
    }
}

var changeBtn = document.getElementById("changeBtn");

changeBtn.onclick = function() {
    changeModal.style.display = "block";
}

var changeSpan = document.getElementById("changeModal").getElementsByClassName("close")[0];

changeSpan.onclick = function() {
    changeModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == changeModal) {
        changeModal.style.display = "none";
    }
}