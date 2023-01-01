var expressao = '';
var numero = [];
var operacao = [];
var numTemp = '';
var resultado = '';

function printa(dado) {

    if (dado == ' + ' || dado == ' - ' || dado == ' * ' || dado == ' / ' || dado == ' = ') {
        operacao.push(dado);
        numero.push(Number(numTemp));
        numTemp = '';
    } else {
        numTemp += dado;
    }

    if (resultado == '') {
        expressao += dado;
        document.getElementById("formula").innerText = expressao;
    }

}

function calcula() {
    printa(' = ');
    let qtdNum = numero.length;

    if (resultado == '') {
        for (let x = 0; x < qtdNum; x++) {
            switch (operacao[x]) {

                case ' + ':
                    resultado = numero[x] + numero[x + 1];
                    break;

                case ' * ':
                    resultado = numero[x] * numero[x + 1];
                    break;

                case ' / ':
                    resultado = numero[x] / numero[x + 1];
                    break;

                case ' - ':
                    resultado = numero[x] - numero[x + 1];
                    break;
            }
            numero[x + 1] = resultado;
        }
        document.getElementById("formula").innerText = resultado;
    }
}

function apaga() {
    expressao = "";
    numero = [];
    operacao = [];
    numTemp = '';
    resultado = '';
    document.getElementById("formula").innerHTML = expressao;
}

