document.addEventListener("DOMContentLoaded", function() {

    const botao = document.querySelector(".b1");

    if (botao) {
        
        botao.addEventListener("click", function() {
            
            console.log("Botão clicado com sucesso!");

            window.location.href = "paginainicial.html";
            
        });

    } else {
        console.error("Erro: Botão com a classe '.b1' não foi encontrado.");
    }
});