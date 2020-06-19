$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-user_name").text(data.user_name);
    $(".member-user_email").text(data.email);
    $(".member-user_first_name").text(data.first_name);
    $(".member-last_name").text(data.last_name);
  });
});