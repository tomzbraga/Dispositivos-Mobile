const produto = {
    nome: "arroz",
    preco: 10,
    estoque: 100
}

console.log(`Nome: ${produto.nome}, preço: ${produto.preco}, estoque: ${produto.estoque}`);

const listaColegas = ["zé", "zezin", "zezão", "zezo"];

const [a, b, c, d] = listaColegas;

console.log(a, d);

//BLOCO 2
const cores = ["azul", "verde"];

const novasCores = [...cores, "amarelo"];

console.log(novasCores);

function mediaNotas(...notas) {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
}

console.log(mediaNotas(2, 2))

//BLOCO 3

const precos = [50, 120, 35, 200]

const precoFiltrado = precos.filter((preco) => preco >= 100)
const precoDesconto = precos.map((preco) => preco * 0.9);
const precoSoma     = precos.reduce((total, preco) => total + preco);

console.log(precoFiltrado);
console.log(`Preços com desconto: ${precoDesconto}`);
console.log(`A soma de todos os preços: ${precoSoma}`);

const alunos = [
    {
        id: 1, nome: "Ana",
        id: 2, nome: "José",
        id: 3, nome: "Fulano"
    }
];

const filtraAlunos = alunos.find((a) => a.id === 3 )

console.log(filtraAlunos.nome);

// BLOCO 4

let nome = "Léo";
console.log(`Olá ${nome}`);

