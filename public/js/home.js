$(document).ready(() => {
  const modalClose = $("button.delete");
  const modalEl = $(".modal");
  const modalCloseBtn = $("button.close");
  const viewModal = $("button.viewItem");

  viewModal.on("click", (event) => {
    $(event.target.previousElementSibling).addClass("is-active");
    // console.log($(event.target.previousElementSibling));
  });

  modalClose.on("click", () => {
    modalEl.removeClass("is-active");
  });

  modalCloseBtn.on("click", () => {
    modalEl.removeClass("is-active");
  });
});
