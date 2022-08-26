const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    let count = "";
    for(let i=1; i<=25; i++){
        count += `${i}, `
    }
    return count;
}
console.log(kata1())

function kata2() {
    let count = []
    for(i=25; i>=1; i--){
        count.push(i)
    }
    return count
}
console.log(kata2())

function kata3() {
    let count = [];
    for(i=-1; i>=-25; i--){
        count.push(i)
    }
    return count
}
console.log(kata3())

function kata4() {
    let count = [];
    for(let i=-25; i<=-1; i++){
        count.push(i)
    }
    return count
}
console.log(kata4())

// Retornar os números ímpares de 25 a -25.

function kata5() {
    let count = [];
    for(let i=25; i>=-25; i--){
        if(i%2 !=0){
            count.push(i)
        }
    }
    return count
}
console.log(kata5())

// Retornar os números divisíveis por 3 até o 100.

function kata6() {
    let count = [];
    for(let i=0; i<=100; i++){
        if(i%3 ==0){
            count.push(i)
        }
    }
    return count
}
console.log(kata6())

// Retornar os números divisíveis por 7 até o 100.

function kata7() {
    let count = [];
    for(let i=1; i<=100; i++){
        if(i%7 == 0){
            count.push(i)
        }
    }
    return count
}
console.log(kata7())

// Kata 8- Retornar os números divisíveis por 3 e 7 regressivamente a partir do 100.

function kata8() {
    let count = [];
    for(let i=100; i>=1; i--){
        if(i%3 == 0 && i%7 == 0){
            count.push(i)
        }
    }
    return count
}
console.log(kata8())

// Kata 9- Retornar os números ímpares divisíveis por 5 até o 100.

function kata9() {
    let count = [];
    for(let i=1; i<=100; i++){
        if(i%5 == 0 && i%2 != 0){
            count.push(i)
        }
    }
    return count
}
console.log(kata9())

// Kata 10 - Retornar os 20 elementos de sampleArray.

function kata10() {
    return sampleArray
}
console.log(kata10())

// Kata 11 - Retornar todos os números pares contidos em sampleArray.

function kata11() {
    let pares = [];
    for(let i=1; i<=sampleArray.length; i++){
        if(sampleArray[i]%2 === 0){
            pares.push(sampleArray[i])
        }
    }
    return pares;
}
console.log(kata11())

// kata 12 - Retornar todos os números ímpares contidos em sampleArray.

function kata12() {
    let impares = [];
    for(let i=1; i<=sampleArray.length; i++){
        if(sampleArray[i]%2 != 0){
            impares.push(sampleArray[i]);
        }
    }
    return impares
}
console.log(kata12())

// Kata 13 - Retornar os números divisíveis por 8 em sampleArray.

function kata13() {
    let divisibleEight = []
    for(let i=1; i<=sampleArray.length; i++){
        if(sampleArray[i] %8 == 0){
            divisibleEight.push(sampleArray[i])
        }
    }
    return divisibleEight
}
console.log(kata13())

// Kata 14 - Retornar o quadrado de cada elemento de sampleArray.

function kata14() {
    let quadrado = [];
    for(let i=0; i<sampleArray.length; i++){
            quadrado.push(sampleArray[i]*sampleArray[i])
        }
        return quadrado
    }
console.log(kata14())

// Kata 15 - Retornar a soma de todos os números de 1 a 20.

function kata15() {
    let soma = 0
    for(let i=1; i<=20; i++){
        soma += i
    }
    return soma
}
console.log(kata15())

// Kata 16 - Retornar a soma de todos os elementos de sampleArray.

function kata16() {
    let sum = 0;
    for(let i=0; i<sampleArray.length; i++){
    sum += sampleArray[i]
    }
    return sum
}
console.log(kata16())

// Kata 17 - Retornar o menor elemento de sampleArray.

function kata17() {
naoconsegui
}

// Kata 18 - Retornar o maior elemento de sampleArray.

function kata18() {
    let maxValue = -Infinity
    for(let i=0; i<sampleArray.length; i++){
        let numAtual = sampleArray[i]
        if(numAtual > maxValue){
            maxValue = numAtual
        }
    }
    return maxValue
}
console.log(kata18())