botaoQuestao1 = document.querySelector("#botao-questao1")

botaoQuestao1.addEventListener("click", function(event){
    event.preventDefault()
    let radios = document.getElementsByName("questao1")
    let gabarito1 = document.getElementById("gabarito1")
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            if(radios[i].value == 'b'){
                gabarito1.textContent = "Gabarito B. Resposta certa"
                radios[i].parentElement.classList.add("certa")
            }else{
                gabarito1.textContent = "Resposta errada"
                radios[i].parentElement.classList.add("errada")
            }
            
            break;
        }
    }
})

botaoQuestao2 = document.querySelector("#botao-questao2")

botaoQuestao2.addEventListener("click", function(event){
    event.preventDefault()
    let radios = document.getElementsByName("questao2")
    let gabarito1 = document.getElementById("gabarito2")
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            if(radios[i].value == 'c'){
                gabarito2.textContent = "Gabarito c. Resposta certa"
                radios[i].parentElement.classList.add("certa")
            }else{
                gabarito2.textContent = "Resposta errada"
                radios[i].parentElement.classList.add("errada")
            }
            
            break;
        }
    }
})

botaoQuestao3 = document.querySelector("#botao-questao3")

botaoQuestao3.addEventListener("click", function(event){
    event.preventDefault()
    let radios = document.getElementsByName("questao3")
    let gabarito3 = document.getElementById("gabarito3")
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            if(radios[i].value == 'b'){
                gabarito3.textContent = "Gabarito b. Resposta certa"
                radios[i].parentElement.classList.add("certa")
            }else{
                gabarito3.textContent = "Resposta errada"
                radios[i].parentElement.classList.add("errada")
            }
            
            break;
        }
    }
})

botaoQuestao4 = document.querySelector("#botao-questao4")

botaoQuestao4.addEventListener("click", function(event){
    event.preventDefault()
    let radios = document.getElementsByName("questao4")
    let gabarito4 = document.getElementById("gabarito4")
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            if(radios[i].value == 'b'){
                gabarito4.textContent = "Gabarito b. Resposta certa"
                radios[i].parentElement.classList.add("certa")
            }else{
                gabarito4.textContent = "Resposta errada"
                radios[i].parentElement.classList.add("errada")
            }
            
            break;
        }
    }
})

botaoQuestao5 = document.querySelector("#botao-questao5")

botaoQuestao5.addEventListener("click", function(event){
    event.preventDefault()
    let radios = document.getElementsByName("questao5")
    let gabarito5 = document.getElementById("gabarito5")
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            if(radios[i].value == 'd'){
                gabarito5.textContent = "Gabarito d. Resposta certa"
                radios[i].parentElement.classList.add("certa")
            }else{
                gabarito5.textContent = "Resposta errada"
                radios[i].parentElement.classList.add("errada")
            }
            
            break;
        }
    }
})

botaoQuestao6 = document.querySelector("#botao-questao6")

botaoQuestao6.addEventListener("click", function(event){
    event.preventDefault()
    let radios = document.getElementsByName("questao6")
    let gabarito6 = document.getElementById("gabarito6")
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            if(radios[i].value == 'c'){
                gabarito6.textContent = "Gabarito c. Resposta certa"
                radios[i].parentElement.classList.add("certa")
            }else{
                gabarito6.textContent = "Resposta errada"
                radios[i].parentElement.classList.add("errada")
            }
            
            break;
        }
    }
})
