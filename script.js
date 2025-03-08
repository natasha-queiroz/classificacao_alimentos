document.getElementById("formAlimento").addEventListener("submit", function(event) {
    event.preventDefault();

    // Capturar valores dos inputs
    let calorias = parseFloat(document.getElementById("calorias").value);
    let acucar = parseFloat(document.getElementById("acucar").value);
    let proteina = parseFloat(document.getElementById("proteina").value);
    let gordura = parseFloat(document.getElementById("gordura").value);
    let fibras = parseFloat(document.getElementById("fibras").value);

    // Definir critérios para classificação
    let saudavel = true;
    
    if (calorias > 500 || acucar > 20 || gordura > 15) {
        saudavel = false;
    }
    if (proteina > 5 || fibras > 3) {
        saudavel = true;
    }

    // Exibir resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = saudavel ? "✅ O alimento é saudável!" : "❌ O alimento não é saudável!";
    resultado.style.color = saudavel ? "green" : "red";
});
