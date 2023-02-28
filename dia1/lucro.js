let custo = 30
let venda = 35
const imposto = custo/5;
let custoTotal = custo + imposto
let lucro = venda - custoTotal;

if (custo < 0 || venda < 0){
    console.log('ERRO!')
}  else if (lucro === 0){
    console.log('Ficou no 0 a 0, meu chapa!');
} else if (custoTotal > venda){
    console.log('Deu um preju de: R$' + lucro)
} else {
    console.log('O lucro total é de: R$' + lucro);
}
