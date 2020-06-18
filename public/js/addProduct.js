$(document).ready(() => {

    const addProductForm = $("form.addProduct");
    const productNameInput = $("input#name");
    const productPriceInput = $("input#price");
    const productQuantityInput = $("input#quantity");
    const productCategoryInput = $("select#category");
    const productImageInput = $("input#imageURL");
    const productDescInput = $("textarea#description");

    addProductForm.on("submit", event => {
        console.log("got product data");
        event.preventDefault();
        const productData = {
            product_name: productNameInput.val().trim(),
            price: productPriceInput.val().trim(),
            quantity: productQuantityInput.val().trim(),
            product_category: productCategoryInput.val(),
            product_photo: productImageInput.val().trim(),
            product_description: productDescInput.val(),
        };
    
        console.log(productData.product_name);
    addProduct(
        productData.product_name,
        productData.price,
        productData.quantity,
        productData.product_category,
        productData.product_photo,
        productData.product_description,
    );

    productNameInput.val("");
    productPriceInput.val("");
    productQuantityInput.val("");
    productCategoryInput.val("");
    productImageInput.val("");
    productDescInput.val("");
});

function addProduct(product_name,price,quantity,product_category,product_photo,product_description) {
    console.log("test");
    console.log(
        product_name,
        price,
        quantity,
        product_category,
        product_photo,
        product_description);  

    $.post("/api/addProduct",{
        product_name: product_name,
        price: price,
        quantity: quantity,
        product_category: product_category,
        product_photo: product_photo,
        product_description: product_description,
    })
    .then(() => {

        window.location.replace("/home");

    },handleAddProductErr
    );
    }
    
    function handleAddProductErr(err){
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});