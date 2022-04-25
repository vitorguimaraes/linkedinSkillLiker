function recomendar() {
    
    var skills = 0;
    for(var i=0; i<buttons.length; i++) { 

        // Verifica se o texto do botão é igual a "Recomendar competência" ou "Endorse" (versão inglês)
        if (buttons[i].textContent.includes("Recomendar competência") ||
            buttons[i].textContent.includes("Endorse")) {
            // Clica no botão
            buttons[i].click()
            skills += 1
        }   
    }
    console.log(skills + " competências recomendadas!")
}

var buttons = document.getElementsByClassName("artdeco-button");
recomendar()
