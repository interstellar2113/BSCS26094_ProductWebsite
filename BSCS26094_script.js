function myfunction()
{
    alert("Welcome to my Website");
}
window.onload = myfunction();
function showYear() {
    let year = new Date().getFullYear();
    document.getElementById("year").innerHTML = year;
}
function checkStock(productId) {
    let stock = document.getElementById(productId);

    if (stock.style.display === "none") {
        stock.style.display = "block";
    } else {
        stock.style.display = "none";
    }
}
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill in all fields.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}









