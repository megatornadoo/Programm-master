function longRunTest(sequence) {
    let pi = [0.2148, 0.3672, 0.2305, 0.1875]
    let blockSize = 8
    let amountBlock = Math.floor(sequence.length/blockSize)
    let longestRunTable = new Array(amountBlock).fill(0)
    var runner = 0
    for (let i = 0; i < amountBlock; i++) {
        runMax = 0
        runner = 0
        for (let j = i*blockSize; j < (i+1)*blockSize; j++) {
            if(sequence.charAt(j) == "1") {
                runner += 1
            }
            else {
                if(runner > longestRunTable[i]) {
                    longestRunTable[i] = runner
                }
                runner = 0
            }
        }
        if(runner > longestRunTable[i]) {
            longestRunTable[i] = runner
        }
    }
    let counterArr = new Array(4).fill(0)
    for (let i = 0; i < longestRunTable.length; i++) {
        for (let j = 0; j < 8; j++) {
            if(longestRunTable[i] == j) {
                if(j >= 4) {
                    counterArr[3] += 1
                }
                else if(j <= 1) {
                    counterArr[0] += 1
                }
                else {
                    counterArr[j-1] += 1
                }
            }
        }
    }
    let xSquare = 0
    for (let i = 0; i < counterArr.length; i++) {
        xSquare += (Math.pow(counterArr[i]-amountBlock*pi[i],2))/(amountBlock*pi[i])
    }
    return xSquare
}