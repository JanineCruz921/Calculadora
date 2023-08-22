var SegundaPágina = document.querySelector(".SegundaPágina")
var DivPrincipal = document.querySelector(".DivPrincipal")
var páginaResultado = document.querySelector(".páginaResultado")

function VerificarOperacao(a, b) {

    var Numero1 = document.querySelector("#inputvalor1").value
    var Numero2 = document.querySelector("#inputvalor2").value
    var Operação = document.querySelector("#inputoperacao").value
    //Ponto value foi adicionado para pegar somente o valor do elemento html
    // As variáveis com os valores dos inputs foram tirados de fora da função e coloados dentro dela
    //pra que o valor não seja pego logo quando a página é carregada, ou seja vazio. 

    páginaResultado.style.display = "flex"
    SegundaPágina.style.display = "none"

    if (Operação == "+" || Operação == "soma") {
        páginaResultado.innerText = "O resultado é: " + (soma(parseInt(Numero1), parseInt(Numero2)))
        var novoBotao = document.createElement("button")
        novoBotao.innerText = "Voltar"
        páginaResultado.append(novoBotao)
        novoBotao.addEventListener("click", exibir)
        novoBotao.addEventListener("click", limparInput)
        //os alerts aqui comentados são para fins de estudos posteriores
        //alert(soma(parseInt(Numero1), parseInt(Numero2))) 
        //parseInt foi usado para os valores não serem concatenados
    } else if (Operação == "-" || Operação == "subtração") {
        páginaResultado.innerText = "O resultado é: " + (subtracao(parseInt(Numero1), parseInt(Numero2)))
        var novoBotao = document.createElement("button")
        novoBotao.innerText = "Voltar"
        páginaResultado.append(novoBotao)
        novoBotao.addEventListener("click", exibir)
        novoBotao.addEventListener("click", limparInput)
        //Os parâmetros foram chamados dentro da função
        //páginaResultado.innerText = "O resultado é: " + (subtracao(parseInt(Numero1), parseInt(Numero2)))
    } else if (Operação == "x" || Operação == "multiplicação") {
        páginaResultado.innerText = "O resultado é: " + (multiplicacao(parseInt(Numero1), parseInt(Numero2)))
        var novoBotao = document.createElement("button")
        novoBotao.innerText = "Voltar"
        páginaResultado.append(novoBotao)
        novoBotao.addEventListener("click", exibir)
        novoBotao.addEventListener("click", limparInput)
        //alert(multiplicacao(parseInt(Numero1), parseInt(Numero2))) 
        //O alert foi chamado dentro da função
    } else if (Operação == "/" || Operação == "divisão") {
        páginaResultado.innerText = "O resultado é: " + (divisao(parseInt(Numero1), parseInt(Numero2)))
        var novoBotao = document.createElement("button")
        novoBotao.innerText = "Voltar"
        páginaResultado.append(novoBotao)
        novoBotao.addEventListener("click", exibir)
        novoBotao.addEventListener("click", limparInput)
        //alert(divisao(parseInt(Numero1), parseInt(Numero2)))
    } else {
        alert("Operação inválida. Tente novamente!")
        exibir()

    }
}

function soma(a, b) {
    return (a) + (b)
}
function subtracao(a, b) {
    return (a) - (b)
}
function divisao(a, b) {
    return (a) / (b)
}
function multiplicacao(a, b) {
    return (a) * (b)
}

function exibir() {
    SegundaPágina.style.display = "flex";
    DivPrincipal.style.display = "none";
    páginaResultado.style.display = "none";
}

function limparInput(){
    document.querySelector("#inputvalor1").value = "";
    document.querySelector("#inputvalor2").value = "";
    document.querySelector("#inputoperacao").value = "";
}