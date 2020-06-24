$(document).ready(() => {
  const modalClose = $("button.delete");
  const modalEl = $(".modal");
  const modalCloseBtn = $("button.close");

  modalClose.on("click", () => {
    modalEl.removeClass("is-active");
    window.location.replace("/home");
  });

  modalCloseBtn.on("click", () => {
    modalEl.removeClass("is-active");
    window.location.replace("/home");
  });
});
