$(document).ready(() => {
  // Getting references to our form and inputs
  const loginForm = $("form.login");
  const usernameInput = $("input#usernameInput");
  const passwordInput = $("input#passwordInput");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      user_name: usernameInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.user_name || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.user_name, userData.password);
    usernameInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(username, password) {
    $.post("/api/login", {
      user_name: username,
      password: password
    })
      .then(() => {
        window.location.replace("/home");
        // If there's an error, log the error
      })
      .catch(err => {
        console.log(err);
      });
  }
});
