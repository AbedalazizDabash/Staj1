
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("loginMessage");

    if (!email.includes("@")) {
        message.textContent = "Geçerli bir email giriniz!";
        message.style.color = "red";
        return;
    }

    if (password.length < 8 || !/[A-Z]/.test(password) || !/\d/.test(password)) {
        message.textContent = "Şifre en az 8 karakter olmalı, büyük harf ve rakam içermeli!";
        message.style.color = "red";
        return;
    }

    message.textContent = "Giriş başarılı!";
    message.style.color = "green";
});

// Register Form
document.getElementById("registerForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;
    const message = document.getElementById("registerMessage");

    if (!username.trim()) {
        message.textContent = "Kullanıcı adı boş bırakılamaz!";
        message.style.color = "red";
        return;
    }

    if (!email.includes("@")) {
        message.textContent = "Geçerli bir email giriniz!";
        message.style.color = "red";
        return;
    }

    if (password.length < 8) {
        message.textContent = "Şifre en az 8 karakter olmalı!";
        message.style.color = "red";
        return;
    }

    message.textContent = "Kayıt başarılı!";
    message.style.color = "green";

    // Sıfırlama
    document.getElementById("registerForm").reset();
});
