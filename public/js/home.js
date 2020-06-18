$(document).ready(() => {
// const userSelect = $("dropdown-item#user");
const priceSelect = $("dropdown-item#price");
const categorySelect = $("dropdown-item#category");

// userSelect.on("click", event => {
//     console.log("sort by user");
//     event.preventDefault();
// }

priceSelect.on("click", event => {
    console.log("sort by price");
    event.preventDefault();
});

function priceSort() {
   $.get("api/price", function(data, status){
       console.log(data + status);
   })
   .then(() => {
    window.location.replace("/home");

}




});