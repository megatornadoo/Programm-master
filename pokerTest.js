function pokerTest(sequence) {
    let n = sequence.length
    let counterArr = new Array(4).fill(0)
    for (let i = 0; i < n-2; i+=3) {
        let counter = 0
        for (let j = 0; j < 3; j++) {
            if(sequence.charAt(j+i) == 1) {
                counter += 1
            }
        }
        counterArr[counter] += 1
    }
    console.log(counterArr)
    //Erwartungswert für 000 und 111
    let e1 = n/3 * 1/8
    //Erwartungswert für 100,010,001 und 110,011,101
    let e2 = n/3 * 3/8
    let xValue = 0
    for (let i = 0; i < 4; i++) {
        if(i == 0 || i == 3) {
            xValue += Math.pow(counterArr[i]-e1,2)/e1
        }
        else {
            xValue += Math.pow(counterArr[i]-e2,2)/e2
        }
    }
    return xValue
}

/*
Der Poker Test beim Würfelwurf.
Übergeben wird die Abfolge der Zahlen und das Array mit der Anzahl der Vorkomnissen.
*/
function pokerTestDice(sequenceDice, diceArray) {
    let p = new Array(3)
    let sequenceWithoutSpace = sequenceDice.split(" ")
    let n = sequenceWithoutSpace.length
    console.log(sequenceWithoutSpace)
    p = ["0.0143", "0.2961", "0.6906"]
    let e = new Array(3)
    e = [p[0]*(n/3), p[1]*(n/3), p[2]*(n/3)]
    // 0 ist alle 3 gleich, 1 ist zwei gleiche, 2 ist keiner gleich
    let counterArr = new Array(3).fill(0)
    for (let i = 0; i < n-2; i += 3) {
        if(sequenceWithoutSpace[i] == sequenceWithoutSpace[i+1] && sequenceWithoutSpace[i] == sequenceWithoutSpace[i+2]) {
            counterArr[0] ++ 
        }
        else if(sequenceWithoutSpace[i] != sequenceWithoutSpace[i+1] && sequenceWithoutSpace[i] != sequenceWithoutSpace[i+2] && sequenceWithoutSpace[i+1] != sequenceWithoutSpace[i+2]) {
            counterArr[2] ++
        }
        else {
            counterArr[1] ++
        }
    }
    let xValue = 0
    for (let i = 0; i < counterArr.length; i++) {
        xValue += Math.pow(counterArr[i]-e[i],2)/e[i]
    }
    console.log(counterArr)
    return xValue
}