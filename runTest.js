function runTest(sequence, numberOnes, numberZeros) {
    let n = sequence.length
    console.log(numberOnes)
    console.log(numberZeros)
    let runner = 0
    let runCount = 0
    runner = sequence.charAt(0)
    for (let i = 0; i < n; i++) {
        if(runner != sequence.charAt(i)) {
            runCount += 1
            runner = sequence.charAt(i)
        }
    }
    console.log(runCount)
    if(runCount == 0) {
        return 0.99
    }
    let p_value = calculateValue(numberOnes, numberZeros, runCount)
    return p_value

    //console.log("runcount: " + runCount)
    //console.log("expected: " + expRuns)
    
}

function runTestDice(sequenceDice) {
    let n = sequenceDice.length
    let higherCounter = 0
    let lowerCounter = 0
    let runs = 0
    let arrayDice = sequenceDice.split(" ")
    //Anzahl n1 und n2 bestimmen
    for (let i = 0; i < n; i++) {
        if(arrayDice[i] < 7) {
            lowerCounter++ 
        }
        else if(arrayDice[i] > 7) {
            higherCounter++ 
        }
    }
    //Anzahl der Runs bestimmen
    
    let runner = new Array(arrayDice)
    console.log(arrayDice)
    for (let i = 0; i < arrayDice.length; i++) {
        if(parseInt(arrayDice[i+1]) < 7) {
            runner[i+1] = "l" 
        }
        else if(parseInt(arrayDice[i+1]) > 7) {
            runner[i+1] = "h"
        }
        else {
            runner[i+1] = runner[i]
        }
    }
    for (let i = 0; i < runner.length; i++) {
        if(runner[i] != runner[i+1]) {
            runs++
        }
    }
    runner[0] = runner[1]
    
    return calculateValue(higherCounter, lowerCounter, runs)
}

function calculateValue (n1, n2, runCount) {
    let expRuns = (2*n1*n2)/(n1+n2) + 1
    console.log("expected:" + expRuns + " runs: " + runCount)
    let varRunsUp = (expRuns-1)*(expRuns-2)
    let varRunsDown = n1+n2-1
    let Z = (runCount - expRuns)/Math.sqrt(varRunsUp/varRunsDown)
    //Grenze wird niedriger gewählt als im NIST, da Zahlenfolgen kürzer sind als die empfohlenen
    let wert = ncdf(Math.abs(Z)) 
    if(n1 == 0 && n2 == 0) {
        return 0.999
    }
    return wert
}

//von https://www.math.ucla.edu/ kopiert fuer Normalverteilung
function ncdf(Z) {
    var t = 1 / (1 + .2315419 * Math.abs(Z))
    var d =.3989423 * Math.exp( -Z * Z / 2)
    var prob = d * t * (.3193815 + t * ( -.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))))
    if( Z > 0 ) prob = 1 - prob
    return prob
  }