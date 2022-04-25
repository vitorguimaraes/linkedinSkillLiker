function recomendar() {
    
    // rola toda a página, para carregar todas as competências de uma vez
    window.scrollTo(0, 2000);
    
    // Espera 2 segundos para dar tempo de carregar as competencias
    const async_wait = async () => {
        await delay(2000);
        console.log("Waited 5s");
      };
    
    // Percorre todos os botões de recomendar e clica no botão 
    // se o texto for "Recomendar competência"
    for(var i=1; i<=50; i++) { // executa a repetição 50 vezes
        // Armazena o endereço do botão
        var xpath = "/html/body/div[6]/div[3]/div/div/div[2]/div/div/main/section/div[2]/div[2]/div/div/div[1]/ul/li[" + i +"]/div/div[2]/div[2]/ul/li/div/button/span"
        // Armazena o elemento que contém o botão
        var button = document.evaluate(xpath, document.body, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null) 
        
        // Verifica se o texto do botão é igual a "Recomendar competência)
        if (button.singleNodeValue.innerText == "Recomendar competência" || button.singleNodeValue.innerText == "Endorse") {
            // Clica no botão
            button.singleNodeValue.click()    
        }
    }
}
