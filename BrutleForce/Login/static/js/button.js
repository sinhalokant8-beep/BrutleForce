

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginButton = document.getElementById("loginButton");
    const loginError = document.getElementById("loginError");
    const loginForm = document.getElementById("loginForm");


    function checkInputs() {

        const usernameLength =
            usernameInput.value.trim().length;

        const passwordLength =
            passwordInput.value.length;


        /*
         * USERNAME = 10 OR MORE
         * PASSWORD = 6 OR MORE
         */

        if (
            usernameLength >= 6 &&
            passwordLength >= 6
        ) {

            loginButton.disabled = false;

            loginButton.classList.add("active");

        } else {

            loginButton.disabled = true;

            loginButton.classList.remove("active");

        }

    }


    /*
     * USERNAME INPUT
     */

    usernameInput.addEventListener("input", function () {

        loginError.classList.remove("show");

        checkInputs();

    });


    /*
     * PASSWORD INPUT
     */

    passwordInput.addEventListener("input", function () {

        loginError.classList.remove("show");

        checkInputs();

    });


    /*
     * DEMO FORM VALIDATION
     */

    loginForm.addEventListener("submit", function (event) {

        if (
            usernameInput.value.trim().length < 6 ||
            passwordInput.value.length < 6
        ) {

            event.preventDefault();

            loginError.classList.add("show");

            checkInputs();

        }

    });


    /*
     * INITIAL CHECK
     */

    checkInputs();

