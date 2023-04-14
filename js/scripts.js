function aviso() {
    let Data = frmRegistro.inData.value;
    let cliente = frmRegistro.inCli.value;
    let tell = frmRegistro.inFone.value;
    let email = frmRegistro.inMail.value;
    let produto = frmRegistro.inProd.value;
    let quantidade = frmRegistro.inQtd.value;
    let Valor = frmRegistro.inVal.value;

    let divErro = document.getElementById("mensagem-erro")


    if (Data.trim() == '') {
        divErro.innerHTML = "o campo data nao pode ser vazio!";
        return false;
    }
    if (cliente == '') {
        divErro.innerHTML = "o campo nome nao pode ser vazio!";
        frmRegistro.inData.focus();
        return false;
    }

    if (cliente.length < 5) {
        divErro.innerHTML = "o campo nome nao pode ter menos que 5 caracteres!";
        frmRegistro.inData.focus();
        return false;
    }

    if (tell == '') {
        divErro.innerHTML = "o campo telefone nao pode ser vazio!";
        frmRegistro.inData.focus();
        return false;
    }

    if (tell.length < 5) {
        divErro.innerHTML = "o campo telefone nao pode ter menos que 5 caracteres!";
        frmRegistro.inData.focus();
        return false;
    }

    if (email == '') {
        divErro.innerHTML = "o campo email nao pode ser vazio!";
        frmRegistro.inData.focus();
        return false;
    }

    if (email.length < 5) {
        divErro.innerHTML = "o campo email nao pode ter menos que 5 caracteres!";
        frmRegistro.inData.focus();
        return false;
    }

    if (produto == '') {
        divErro.innerHTML = "o campo produto nao pode ser vazio!";
        frmRegistro.inData.focus();
        return false;
    }

    if (produto.length < 5) {
        divErro.innerHTML = "o campo produto nao pode ter menos que 5 caracteres!";
        frmRegistro.inData.focus();
        return false;
    }

    if (quantidade == '') {
        divErro.innerHTML = "o campo quantidade nao pode ser vazio!";
        frmRegistro.inData.focus();
        return false;
    }

    if (quantidade < 0) {
        divErro.innerHTML = "o campo quantidade nao pode ser negativo!";
        frmRegistro.inData.focus();
        return false;
    }

    if (Valor == '') {
        divErro.innerHTML = "o campo valor nao pode ser vazio!";
        frmRegistro.inData.focus();
        return false;
    }

    if (Valor < 0) {
        divErro.innerHTML = "o campo valor nao pode ser negativo!";
        frmRegistro.inData.focus();
        return false;
    }

    divErro.innerHTML = "Enviado!";
    return false;

    if (Valor < 0) {
        divErro.innerHTML = "o campo nome nao pode ser vazio!";
        frmRegistro.inData.focus();
        return false;
    }
    divErro.innerHTML = "Enviado!!";

}

function diamante() {
    let caixa = document.getElementById('canvas');
    let imagem = '<img class="imagens" src="img/logo.png" alt="Logo" class="imagens" />';
    let quantia = document.getElementById('inQtdImg');
    caixa.innerHTML = '';

    for (let i = 0; i < quantia.value; i++) {
        caixa.innerHTML = imagem + caixa.innerHTML
    }

}

function alterarLampada() {
    let imagem = document.getElementById('lampada');
    let caminho = imagem.src;
    let arquivo = caminho.substring(caminho.lastIndexOf('/') + 1);
    let interruptor = document.GamepadButton;
    let botao = document.getElementById('btnEnviar');
    if (arquivo == "apagada.jpg" || arquivo == '') {
        imagem.src = "img/acesa.jpg";
        botao.textContent = "apagar";
    }

    else {
        imagem.src = "img/apagada.jpg";
        botao.textContent = "acender";
    }

}

function conta() {
    let valor = document.getElementById('inValorPedido').value;
    let valorDesc = 0;
    let valliq = 0;
    let percDesc = 0;

    if (valor<500){
        valorDesc = 0; 
        percDesc = 0;
        valliq = valor;
    }

     if (valor >= 500 ){
        percDesc = 0.5;
        valorDesc = valor * percDesc / 100 ; 
        valliq = valor - valorDesc;
    }


    if (valor >=1000){
        percDesc = 0.8;
        valorDesc =  valor * percDesc/ 100;
        valliq = valor - valorDesc;
    }



    if (valor >=1500){
        percDesc = 1.0;
        valorDesc =  valor * percDesc/ 100;
        valliq = valor - valorDesc;
    }

    if  (valor>2000){
        percDesc = 1.5;
        valorDesc =  valor * percDesc/ 100;
        valliq = valor - valorDesc;
    }


    // Devolver valor no input 
    document.getElementById('inPercDesc').value = percDesc;
    document.getElementById('inValDesc').value = valorDesc;
    document.getElementById('inValFinal').value = valliq;


    }
