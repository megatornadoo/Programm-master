//Enthält alle Funktionen die zur Durchführung der Tests gebraucht werden.

function doFqTest() {
    if(alreadyTested[0] == false) {
        let x_value = monoFrequency(sequence, amountOnes, amountZeros)
        let p_value = igamc(x_value,0.5)
        var fakeness = fakenessCalc(p_value)
        deactivateButton("freqTestButton") 
        rateScore(fakeness, "freqPValue")
        getScore()
        alreadyTested[0] = true
    }
    
}
function doFrequencyTestDice() {
    let x_Value = monoFrequencyDice(sequenceDice, diceArray)
    let p_value = igamc(x_Value, 5)
    var fakeness = fakenessCalc(p_value, 1) 
    deactivateButton("diceFrequencyTestButton") 
    rateScore(fakeness, "diceFrequencyTestValue")
    getScore(1)
}
function doFqBlockTest() {
    if(alreadyTested[1] == false) {
        let x_value = blockFrequency(sequence)
        let p_value = igamc(x_value,1)
        var fakeness = fakenessCalc(p_value)
        deactivateButton("freqBlockTestButton") 
        rateScore(fakeness, "freqBlockPValue")
        getScore()
        alreadyTested[1] = true
    }
}
function doGapTest() {
    if(alreadyTested[2] == false) { 
        let p_value = gapTest(sequence)
        console.log(p_value)
        deactivateButton("gapTestButton")
        p_value = parseFloat(p_value)
        overallScore[counter] = p_value
        counter++ 
        rateScore(p_value.toFixed(3), "gapPValue")
        getScore()
        alreadyTested[2] = true
    }
    //document.getElementById("gapPValue").textContent = p_value
}
function doGapChiTest() {
    if(alreadyTested[3] == false) {
        let x_value = gapTestChi(sequence)
        let p_value = igamc(x_value, 2)
        var fakeness = fakenessCalc(p_value)
        deactivateButton("gapChiTestButton") 
        rateScore(fakeness, "gapPChiValue")
        getScore()
        alreadyTested[3] = true
    }
    
}
function doPokerTest() {
    if(alreadyTested[4] == false) {
        let x_value = pokerTest(sequence)
        let p_value = igamc(x_value,1.5)
        var fakeness = fakenessCalc(p_value)
        deactivateButton("pokerTestButton")
        rateScore(fakeness, "pokerTestValue")
        getScore()
        alreadyTested[4] = true
    }
}
function doPokerTestDice() {
    let x_Value = pokerTestDice(sequenceDice, diceArray)
    let p_value = igamc(x_Value, 1)
    var fakeness = fakenessCalc(p_value, 1)
    deactivateButton("dicePokerTestButton") 
    rateScore(fakeness, "dicePokerTestValue")
    getScore(1)
}
function doRunTest() {
    if(alreadyTested[5] == false) {
        let p_value = runTest(sequence, amountOnes, amountZeros)
        console.log("run value: " + p_value) 
        var fakeness = fakenessCalc(p_value)
        deactivateButton("runTestButton") 
        rateScore(fakeness, "runTestValue")
        getScore()
        alreadyTested[5] = true
    }
    
    //document.getElementById("runTestValue").textContent = p_value
}
function doRunTestDice() {
    let p_value = runTestDice(sequenceDice)
    console.log(p_value)
    var fakeness = fakenessCalc(p_value, 1)
    document.getElementById("diceRunTestValue").textContent = p_value
    deactivateButton("diceRunTestButton") 
    rateScore(fakeness, "diceRunTestValue")
    getScore(1)
}
function doLongestRunTest() {
    if(alreadyTested[6] == false) {
        let x_value = longRunTest(sequence)
        let p_value = parseFloat(igamc(x_value, 1.5))
        var fakeness = fakenessCalc(p_value)
        deactivateButton("longestRunTestButton")
        rateScore(fakeness, "longRunTestValue")
        getScore()
        alreadyTested[6] = true
    }
}
function doSerialTest() {
    if(alreadyTested[7] == false) {
        let x_Value = serialTest(sequence, amountOnes, amountZeros)
        let p_value = igamc(x_Value, 1.5)
        var fakeness = fakenessCalc(p_value)
        deactivateButton("serialTestButton") 
        rateScore(fakeness, "serialTestValue")
        getScore()
        alreadyTested[7] = true
    }
    
}
function doSerialTestDice() {
    let x_Value = diceSerialTest(sequenceDice)
    let p_value = igamc(x_Value, 2)
    var fakeness = fakenessCalc(p_value, 1)
    deactivateButton("diceSerialTestButton") 
    rateScore(fakeness, "diceSerialTestValue")
    getScore(1)
}
function doCouponCollectorTest() {
    if(alreadyTested[8] == false) {
        let x_Value = couponCollector(sequence)
        let p_value = igamc(x_Value, 2)
        var fakeness = fakenessCalc(p_value)
        deactivateButton("couponCollectorTestButton") 
        rateScore(fakeness, "couponCollectorTestValue")
        getScore()
        alreadyTested[8] = true
    }
    
}
function doOverlappingSerialTest() {
    if(alreadyTested[9] == false) {
        let x_Value = overlappingSerialTest(sequence, amountOnes, amountZeros)
        let p_value = igamc(x_Value, 1.5)
        var fakeness = fakenessCalc(p_value)
        deactivateButton("overlappingSerialTestButton") 
        rateScore(fakeness, "overlappingSerialTestValue")
        getScore()
        alreadyTested[9] = true
    }
    
}
function doOverlappingSerialTestDice() {
    let x_Value = diceOverlappingSerialTest(sequenceDice)
    let p_value = igamc(x_Value, 2)
    var fakeness = fakenessCalc(p_value, 1)
    deactivateButton("diceOverlappingSerialTestButton")
    rateScore(fakeness, "diceOverlappingSerialTestValue")
    getScore(1)
}
function doTemplateMatchingTest() {
    if(alreadyTested[10] == false) {
        let M = 10
        let n = Math.floor(sequence.length/M)
        let x_Value = templateMatchingTest(sequence)
        let p_value = new Array(x_Value.length)
        //Hier wird zur Beurteilung der Zufälligkeit der Durchschnitt der p-Werte genommen.
        for (let i = 0; i < x_Value.length; i++) {
            p_value[i] = igamc(x_Value[i]/2, n/2)
        }
        let avg = 0
        for (let i = 0; i < p_value.length; i++) {
            avg += p_value[i]
        }
        var fakeness = fakenessCalc(avg/p_value.length)
        deactivateButton("templateMatchingTestButton") 
        rateScore(fakeness, "templateMatchingValue")
        getScore()
        alreadyTested[10] = true
    }
}
function doOverlappingTempMatch() {
    if(alreadyTested[11] == false) {
        let x_Value = overlappingTempMatch(sequence)
        let p_value = new Array(x_Value.length)
        console.log(x_Value)
        //Hier wird zur Beurteilung der Zufälligkeit der Durchschnitt der p-Werte genommen.
        for (let i = 0; i < x_Value.length; i++) {
            p_value[i] = igamc(x_Value[i]/2, 5/2)
        }
        console.log(p_value)
        let avg = 0
        for (let i = 0; i < p_value.length; i++) {
            avg += p_value[i]
        }
        console.log(avg/p_value.length)
        var fakeness = fakenessCalc(avg/p_value.length) 
        deactivateButton("overlappingTemplateMatchingTestButton")
        rateScore(fakeness, "overlappingTemplateMatchingValue")
        getScore()
        alreadyTested[11] = true
    }
    
}
function doMatrixRankTest() {
    if(alreadyTested[12] == false) {
        let x_Value = matrixRankTest(sequence)
        let p_value = igamc((x_Value/2), 1)
        var fakeness = fakenessCalc(p_value)
        deactivateButton("matrixRankTestButton")
        rateScore(fakeness, "matrixRankTest")
        getScore()
        alreadyTested[12] = true
    }
    
}
function doAlternationTest() {
    if(alreadyTested[13] == false) {
        let x_Value = alternationTest(sequence)
        let p_value = igamc(x_Value, 1)
        if(p_value == 0) {
            p_value = 0.01
        }
        if(p_value == 1) {
            p_value = 0.99
        }
        overallScore[counter] = 1-p_value
        counter++
        p_value = p_value.toFixed(3)
        deactivateButton("alternationTestButton")
        rateScore(p_value, "alternationTest")
        getScore()
        alreadyTested[13] = true
    }
    
}
//Beurteilung der Zufälligkeit
function fakenessCalc(p_value, b) {
    if(b === undefined) {
        p_value = (Math.floor(p_value*1000)/1000).toFixed(3)
        if(p_value == 0) {
            overallScore[counter] = parseFloat(0.001)
            counter++
            p_value = 0.001
        }
        else if(p_value == 1) {
            overallScore[counter] = parseFloat(0.999)
            counter++
            return 0.999
        }
        else {
            overallScore[counter] = parseFloat(p_value)
        }
        console.log(overallScore)
        counter++
        return p_value
    }
    else if(b === 1) {
        p_value = p_value.toFixed(3)
        if(p_value == 0) {
            p_value = 0.001
        }
        if(p_value == 1) {
            overallDiceScore[counterDice] = parseFloat(0.99)
            counterDice++
            return 0.999
        }
        else {
            overallDiceScore[counterDice] = parseFloat(p_value)
        }
        console.log(overallDiceScore)
        counterDice++
        return p_value
    }
    else {
        //var fakeness = Math.abs((p_value-0.5)* 2)
        fakeness = p_value
        fakeness = fakeness.toFixed(3)
        return fakeness
    }
} 

function getScore(b) {
    if(b === undefined) {
        let score = 0
        let n = overallScore.length
        for (let i = 0; i < n; i++) {
            score += (parseFloat(1/(overallScore[i])))
            console.log("score ist: " + score)
        }
        //overallScore = new Array(n).fill(0)
        fakeness = fakenessCalc(n/score, 2)
        score = 0
        return rateScore(fakeness,"overallScore")
    }
    else {
        let score = 0
        let n = overallDiceScore.length
        for (let i = 0; i < n; i++) {
            score += (parseFloat(1/overallDiceScore[i]))
            console.log(score)
        }
        //overallScore = new Array(n).fill(0)
        fakeness = fakenessCalc(n/score, 2)
        score = 0
        return rateScore(fakeness,"overallDiceScore")
    }
}


function rateScore(fakeness, idName) {
    
        if(fakeness > 0.9) {
            document.getElementById(idName).textContent = "abgelehnt Fakeness:"    
        }
        else{
            document.getElementById(idName).textContent = "akzeptiert Fakeness:"
        }
        document.getElementById(idName).textContent += fakeness
        if (fakeness > 0.9) {
            document.getElementById(idName).style.color = "red"    
        }
        else if(fakeness >= 0.6) {
            document.getElementById(idName).style.color = "orange"
        }
        else {
            document.getElementById(idName).style.color = "green"
        }
    
    
    
}