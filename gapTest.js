function gapTest(sequence) {
    let n = sequence.length
    theorTable = theoreticalFreq(n)
    var tableGaps = new Array(n).fill(0)
    let counter = 1
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= n-i; j++) {
             if(sequence.charAt(i) == sequence.charAt(i+counter)) {
                tableGaps[counter-1] += 1
                counter = 1
                break
            }
            else {
                counter += 1
            }
        }
        counter = 1
    }
    var cumPro = new Array(n).fill(0)
    for (let i = 0; i < n; i++) {
        if(i == 0) {
            cumPro[i] = tableGaps[i]/(n-2)
        }
        else {
            cumPro[i] = tableGaps[i]/(n-2) + cumPro[i-1]
        }
    }
    //Berechnung Differenz der theoretischen und der aufgezeichneten Verteilung.
    var dif = new Array(n).fill(0)
    for (let i = 0; i < n; i++) {
        dif[i] = cumPro[i] - theorTable[i]
    }
    //Bestimmung der größten Differenz.
    let maximum = Math.max.apply(Math,dif)
    let threshold = 1.36/Math.sqrt(n)
    if(threshold < maximum) {
        return threshold/maximum
    }
    else {
        if(maximum/threshold <= 0.1) {
            return maximum/threshold    
        }
        else {
            return maximum/threshold-0.1
        }
    }
}

//Berechnung der Theoretischen Verteilung des Münzwurfes
function theoreticalFreq(length) {
    let table = []
    for (let i = 0; i < length; i++) {
        table[i] = 1 - Math.pow((1/2),(i+1))
    }
    return table
}

