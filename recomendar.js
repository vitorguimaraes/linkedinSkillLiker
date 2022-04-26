// Armazena os botões de Recomendar competência
var buttons = document.getElementsByClassName("artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view")  
var skills = 0; // contador de competências recomendadas

for(var i=0; i<buttons.length; i++) { 

    // Verifica se o texto do botão é igual a "Recomendar competência" ou "Endorse" (versão inglês)
    if ((buttons[i].textContent.includes("Recomendar competência") || buttons[i].textContent.includes("Endorse")) && 
        !(buttons[i].offsetParent == null) && buttons[i].offsetParent.id.includes("profilePagedListComponent")) {
        // Clica no botão
        buttons[i].click()
        skills += 1
    }   
}
console.log(skills + " competências recomendadas!")