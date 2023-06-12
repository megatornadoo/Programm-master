/*Führt den Frequenz Test für den Münzwurf aus.
Übergeben wird die gesamte Sequenz und die Anzahl der Einsen und Nullen.
*/
function monoFrequency(sequence, amountOnes, amountZeros) {
    console.log(amountOnes)
    //Erwartungswert berechnen
    let e = sequence.length*1/2
    //Chi Square Test
    let x_value = Math.pow(amountOnes-e, 2)/e + Math.pow(amountZeros-e, 2)/e
    return x_value
}

function monoFrequencyDice(sequence, diceArray) {
    let p = new Array(6)
    console.log(sequence)
    console.log(diceArray)
    p[0] = 1/36
    p[1] = 1/18
    p[2] = 1/12
    p[3] = 1/9
    p[4] = 5/36
    p[5] = 1/6
    let x_value = 0
    let e = 0
    for (let i = 0; i < 6; i++) {
        e = p[i] * sequence.length/2
        x_value = x_value + (Math.pow(diceArray[i]-e,2))/e
        console.log(x_value)
    }
    for (let i = 6; i < 11; i++) {
        let n = 10-i
        e = p[n] * sequence.length/2
        x_value = x_value + (Math.pow(diceArray[i]-e,2))/e
    }
    console.log(x_value)
    return x_value
}

