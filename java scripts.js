// Signup logic
if (document.getElementById("signupForm")) {
    document.getElementById("signupForm").addEventListener("submit", function(e) {
        e.preventDefault();

        let user = document.getElementById("signupUser").value;
        let pass = document.getElementById("signupPass").value;

        localStorage.setItem("user", user);
        localStorage.setItem("pass", pass);

        alert("Signup Successful");
    });
}

// Login logic
if (document.getElementById("loginForm")) {
    document.getElementById("loginForm").addEventListener("submit", function(e) {
        e.preventDefault();

        let user = document.getElementById("loginUser").value;
        let pass = document.getElementById("loginPass").value;

        let savedUser = localStorage.getItem("user");
        let savedPass = localStorage.getItem("pass");

        if (user === savedUser && pass === savedPass) {
            alert("Login Success");
        } else {
            alert("Invalid Details");
        }
    });
}