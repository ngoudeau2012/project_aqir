$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const firstNameInput = $("input#firstNameInput");
  const lastNameInput = $("input#lastNameInput");
  const usernameInput = $("input#usernameInput");
  const emailInput = $("input#emailInput");
  const passwordInput = $("input#passwordInput");
  const modalClose = $("button.delete");
  const modalEl = $(".modal");
  const modalCloseBtn = $("button.close");

  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      first_name: firstNameInput.val().trim(),
      last_name: lastNameInput.val().trim(),
      user_name: usernameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
    };

    signUpUser(
      userData.first_name,
      userData.last_name,
      userData.user_name,
      userData.email,
      userData.password
    );

    firstNameInput.val(""),
      lastNameInput.val(""),
      usernameInput.val(""),
      emailInput.val(""),
      passwordInput.val("");
  });

  function signUpUser(first_name, last_name, user_name, email, password) {
    $.post("/api/signup", {
      first_name: first_name,
      last_name: last_name,
      user_name: user_name,
      email: email,
      password: password,
    })
      .then(() => {
        window.location.replace("/home");
        console.log(first_name, last_name, username, email, password);
      })
      .catch(handleLoginErr);
  }

  modalClose.on("click", () => {
    modalEl.removeClass("is-active");
  });

  modalCloseBtn.on("click", () => {
    modalEl.removeClass("is-active");
  });
  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
