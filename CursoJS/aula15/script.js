let num = [5, 8, 2, 9, 3]
num[5] = 6 // Adiciona o 6 no elemento 5
num.push(7) // Adiciona o 7 no final do array
num.sort() // Coloca itens em ordem crescente
console.log(`nosso vetor é o ${num}`)
console.log(`nosso vetor é o ${num[1]}`) //Mostra o elemento da posição 1
console.log(num.length) // Mostra o tamanho do array
let pos = num.indexOf(8)
if (pos == -1) { // -1 valor não encontrado
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}