
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
const loginForm = document.getElementById("loginForm");


/* =====================================
   CHECK INPUTS
===================================== */

function checkInputs() {

    const usernameLength =
        usernameInput.value.trim().length;

    const passwordLength =
        passwordInput.value.length;


    /*
        USERNAME >= 6
        PASSWORD >= 6

        BOTH MUST BE TRUE
    */

    if (
        usernameLength >= 6 &&
        passwordLength >= 6
    ) {

        // Enable button
        loginButton.disabled = false;

        // Add glow
        loginButton.classList.add("active");

    } else {

        // Disable button
        loginButton.disabled = true;

        // Remove glow
        loginButton.classList.remove("active");
    }
}


/* =====================================
   USERNAME
===================================== */

usernameInput.addEventListener(
    "input",
    checkInputs
);


/* =====================================
   PASSWORD
===================================== */

passwordInput.addEventListener(
    "input",
    checkInputs
);


/* =====================================
   FORM SUBMIT
===================================== */

loginForm.addEventListener(
    "submit",
    function (event) {

        const usernameLength =
            usernameInput.value.trim().length;

        const passwordLength =
            passwordInput.value.length;


        if (
            usernameLength < 6 ||
            passwordLength < 6
        ) {

            event.preventDefault();

            checkInputs();
        }
    }
);


/* =====================================
   INITIAL CHECK
===================================== */

checkInputs();

