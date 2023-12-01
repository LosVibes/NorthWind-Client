document.addEventListener("DOMContentLoaded", e => {

    const productId = location.search.split("=")[1];

    fetch("http://localhost:8081/api/products/" + productId)
        .then(r => r.json())
        .then(item => {

            details.innerHTML = ""; //CLEAR 

            details.innerHTML += `<tr><th>productId</th><td> ${item.productId}</td></tr>`
            details.innerHTML += `<tr><th>productName</th><td> ${item.productName}</td></tr>`
            details.innerHTML += `<tr><th>unitPrice</th><td> $${Number(item.unitPrice).toFixed(2)}</td></tr>`
            details.innerHTML += `<tr><th>unitsInStock</th><td> ${item.unitsInStock}</td></tr>`
            details.innerHTML += `<tr><th>supplier</th><td> ${item.supplier}</td></tr>`
            details.innerHTML += `<tr><th>discontinued</th><td> ${item.discontinued}</td></tr>`
        })

}); //end fom content loaded