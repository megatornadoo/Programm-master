function gapTestChi(sequence) {
    let n = sequence.length
    //console.log("länge beträgt: " + n)
    let alpha = 0
    let beta = 0.5
    let p = beta-alpha
    //Erwartete Werte berechnen laut 1.7 (9)
    let counter = new Array(5).fill(0)
    let probArr = new Array(counter.length).fill(0)
    let sumOfP = 0
    for (let i = 0; i < counter.length-1; i++) {
        probArr[i] = calculateProbR(i,p)
        sumOfP += probArr[i]
    }
    probArr[counter.length-1] = 1 - sumOfP
    //Lücken zählen
    let amountGaps = 0
    n=0
    for (let i = 0; i < sequence.length; i++) {
        if(sequence.charAt(i) == "1") {
            amountGaps += 1
        }
        else {
            if(amountGaps >= 4) {
                counter[4] += 1
                n += 1
            }
            else {
                counter[amountGaps] += 1
                n +=1
            }
            amountGaps = 0
        }
        if(i == sequence.length-1) {
            if(amountGaps >= 4) {
                counter[4] += 1
                n += 1
            }
            else {
                counter[amountGaps] += 1
                n +=1
            }
            amountGaps = 0
        }
    }
    if(counter.every(item => item == 0)) {
        return 0
    }
    let x_value = 0
    for (let i = 0; i < counter.length; i++) {
        x_value += (Math.pow(counter[i] - (n*probArr[i]), 2))/(n*probArr[i])
    }
    return x_value
}

function calculateProbR(gapLength, p) {
    return p * Math.pow(1 - p, gapLength)
}