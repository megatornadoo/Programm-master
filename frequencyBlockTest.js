function blockFrequency(sequence) {
    let m = 10
    let n = sequence.length
    if(n < 10) {
        return "Sequenz ist zu kurz"
    } 
    let pi = []
    let counter = 1
    let xBlockValue = []
    for (let i = 0; i < n; i+=m) {
        let amountOnes = 0
        for (let j = 0; j < m; j++) {
            if(sequence.charAt(i+j) == "1") {
                amountOnes = amountOnes + 1
            }
        }
        pi[counter] = amountOnes
        counter = counter + 1
    }
    let value = 0
    for (let i = 1; i <= n/m; i++) {
        xBlockValue[i] = chiSquareTest(m, pi[i], m-pi[i])
        value += xBlockValue[i]
    }
    return value/Math.round(n/m)
}

function chiSquareTest(blocklength, amountOnes, amountZeros) {
    let E = blocklength * (1/2)
    let xSquare = (Math.pow((amountOnes - E), 2))/E + (Math.pow((amountZeros - E), 2))/E 
    return xSquare
}