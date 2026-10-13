const texto = document.querySelector("#Envia-flores")
texto.addEventListener("mouseover", function(){
    texto.textContent = "Envía Bouquets"
});
texto.addEventListener("mouseout", function(){
    texto.textContent = "Envía Flores"
})