$(document).read(() => {

    const addProductForm = $("form.addProduct");
    const productNameInput = $("input#name");
    const productPriceInput = $("input#price");
    const productQuantityInput = $("input#quantity");
    const productCategoryInput = $("select#category");
    const productDescInput = $("textarea#description");

    addProductForm.on("submit", event => {
        event.preventDefault();
        const productData = {
            product_name: productNameInput.val().trim(),
            price: productPriceInput.val().trim(),
            quantity: productQuantityInput.val().trim(),
            product_category: productCategoryInput.val().trim(),
            product_photo: ,
            product_description: productDescInput.val().trim(),
        }
    })
});