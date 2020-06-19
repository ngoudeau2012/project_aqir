$(document).ready(() => {
  const modalClose = $("button.delete");
  const modalEl = $(".modal");
  const modalCloseBtn = $("button.close");
  const viewModal = $("button.viewItem");

  viewModal.on("click", () => {
    modalEl.addClass("is-active");
  });

  modalClose.on("click", () => {
    modalEl.removeClass("is-active");
  });

  modalCloseBtn.on("click", () => {
    modalEl.removeClass("is-active");
  });
});
