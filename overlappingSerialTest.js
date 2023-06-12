function overlappingSerialTest(sequence) {
    //erstelle Array welcher die Anzahl folgender Abläufe zählt index 0 = 00
    //index 1 = 01 || index 2 = 10 || index 3 = 11
    var freqArr = new Array(4).fill(0)
    for (let i = 0; i < sequence.length-1; i ++) {
        if(sequence.charAt(i) == 0) {
            if(sequence.charAt(i+1) == 0) {
                freqArr[0] += 1
            }
            else{
                freqArr[1] += 1
            }
        }
        else {
            if(sequence.charAt(i+1) == 0) {
                freqArr[2] += 1
            }
            else{
                freqArr[3] += 1
            }
        }
    }
    let E = 1/4 * sequence.length
    let xSquare = 0
    for (let i = 0; i < 4; i++) {
        xSquare += (Math.pow((freqArr[i] - E), 2))/E
    } 
    return xSquare
}

function diceOverlappingSerialTest(sequenceDice) {
    p1 = 1/6
    p2 = 2/6
    let arrayDice = sequenceDice.split(" ")
    let counter = new Array(5).fill(0)
    if(arrayDice.length % 2 == 1) {
        arrayDice.pop()
    }
    for (let i = 0; i < arrayDice.length; i++) {
        if(parseInt(arrayDice[i]) == 7 || parseInt(arrayDice[i+1]) == 7) {
            counter[2]++
        }
        else if(parseInt(arrayDice[i]) >= 2 && parseInt(arrayDice[i]) <= 6) {
            if(parseInt(arrayDice[i+1]) >= 2 && parseInt(arrayDice[i+1]) <= 6) {
                counter[0]++
            }
            else {
                counter[1]++
                console.log(i)
            }
        }
        else if(parseInt(arrayDice[i]) >= 8 && parseInt(arrayDice[i]) <= 12) {
            if(parseInt(arrayDice[i+1]) >= 2 && parseInt(arrayDice[i+1]) <= 6) {
                counter[3]++
            }
            else {
                counter[4]++
            }
        }
    }
    let xSquare = 0
    let n = arrayDice.length
    for (let i = 0; i < counter.length; i++) {
        if(i == 2) {
            xSquare += (Math.pow((counter[i] - (n*p2)), 2))/(n*p2)
        }
        else {
            xSquare += (Math.pow((counter[i] - (n*p1)), 2))/(n*p1)
        }
    }
    return xSquare
}