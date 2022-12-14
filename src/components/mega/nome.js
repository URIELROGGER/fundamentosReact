function gerarNumeroNaoContinuo(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
    return array.includes(aleatorio) ? gerarNumeroNaoContinuo(min, max, array) : aleatorio;

}

function gererNumeros(qtde) {
    const numeros = Array(qtde).fill(0).reduce((nums) => {
        const novoNumero = gerarNumeroNaoContinuo(1, 60, nums)
        return [ ...nums, novoNumero]
    }, []).sort((n1, n2) => n1 - n2);
    return numeros;
}

console.log(gererNumeros(7))