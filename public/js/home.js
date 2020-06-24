$(document).ready(() => {
  const modalClose = $("button.delete");
  const modalEl = $(".modal");
  const modalCloseBtn = $("button.close");
  const viewModal = $("button.viewItem");
  const addCartBtn = $("button.addCart");

  viewModal.on("click", event => {
    $(event.target.previousElementSibling).addClass("is-active");
    // console.log($(event.target.previousElementSibling));
  });

  addCartBtn.on("click", () => {
    modalEl.removeClass("is-active");
    alert("Item added to cart");
  });

  modalClose.on("click", () => {
    modalEl.removeClass("is-active");
  });

  modalCloseBtn.on("click", () => {
    modalEl.removeClass("is-active");
  });
});
