function getEingabe() {
    reset('text', 'div.testButtons button', 'div.testButtons p', 'wrongEnter', undefined, 1)
    amountOnes = 0
    amountZeros = 0
    sequence = document.getElementById("text").value
    sequence = sequence.split(" ").join("")
    sequence = sequence.split("\n").join("")
    for (let i = 0; i < sequence.length; i++) {
        if(sequence.charAt(i) != 0 && sequence.charAt(i) != 1) {
            sequence = ""
            document.getElementById("wrongEnter").textContent = "Bitte eine Zahlenfolge mit nur 0en und 1en eingeben"
            break
        }
    }
    if(sequence != "") {
        document.getElementById("wrongEnter").textContent = ""
    }
    if(sequence.length >= 20) {
        activateButtons("div.testButtons button")
        var takeInput = document.getElementById("textFieldButton")
        takeInput.disabled = true;
        if(sequence.length >= 300) {
            deactivateButton("overlappingTemplateMatchingTestButton")
            deactivateButton("matrixRankTestButton")
        }
    }
    else {
        deactivateButtons("div.testButtons button")
    }
    console.log(sequence)
    for (let i = 0; i < sequence.length; i++) {
        if(sequence.charAt(i) == 1) {
            amountOnes += 1
        }
        else if (sequence.charAt(i) == 0) {
            amountZeros += 1
        }
    }
    
    console.log(sequence.length)
}
function getEingabeDice() {
    reset('inputDice', 'div.testButtonsDice button', 'div.testButtonsDice p', 'wrongEnterDice', 2, 1)
    let container = "div.TestButtonsDice button"
    sequenceDice = document.getElementById("inputDice").value
    let numberArray = sequenceDice.split(" ")
    if(numberArray[numberArray.length-1] == "") {
        numberArray.pop()
    }
    console.log(numberArray)
    let isEnterRight = true
    for (let i = 0; i < numberArray.length; i++) {
        if(numberArray[i] < 2 || numberArray[i] > 12) {
            isEnterRight = false
            document.getElementById("wrongEnterDice").textContent = "Zahlenfolge wurde nicht richtig eingegeben"
        }
    }
    if(isEnterRight == true) {
        document.getElementById("wrongEnterDice").textContent = ""
        sequenceWithoutSpace = sequenceDice.split(" ").join("")
        diceArray.fill(0)
        for (let i = 0; i < sequenceDice.length-1; i++) {
            if(sequenceDice.charAt(i+1) == " " || sequenceDice.charAt(i+1) == ",") {
                diceArray[sequenceDice.charAt(i)-2] ++ 
                i++
            }
            else {
                let ding = (sequenceDice.charAt(i)).toString()+(sequenceDice.charAt(i+1)).toString()-2
                console.log(ding)
                diceArray[ding] ++
                i += 2
            }
        }
    }
    
    if(numberArray.length >= 20 && isEnterRight == true) {
        activateButtons(container)
        var takeInput = document.getElementById("textFieldButtonDice")
        takeInput.disabled = true;
        document.getElementById("allDiceTest").disabled = false
    }
    else {
        deactivateButtons(container)
    }
}

/*Eingabe zurücksetzen
Übergeben werden die jeweiligen Daten von entweder Münzwurf oder Würfelwurf um die dem entsprechenden Daten zurückzusetzen.
*/
function reset(input ,container, paragraph, wrong, art, inp) {
    if(inp === undefined) {
        isEnterRight = true
        document.getElementById(wrong).innerHTML = ""
        sequenceDice = ""
        diceArray.fill(0)
        document.getElementById(input).textContent = ""
        document.getElementById(input).value = ""
    }
    if(art === undefined) {
        alreadyTested.fill(false)
        document.getElementById("overallScore").style.color = "black"
        document.getElementById("overallScore").textContent = ""
        overallScore = new Array()
        counter = 0
    }
    else{
        document.getElementById("overallDiceScore").style.color = "black"
        document.getElementById("overallDiceScore").textContent = ""
        document.getElementById("allDiceTest").disabled = true
        overallDiceScore = new Array()
        counterDice = 0
        var takeInput = document.getElementById("textFieldButtonDice")
        takeInput.disabled = false;
    }
    var all = document.querySelectorAll(container)
    console.log(all)
    for (let el of all) { el.disabled = true; }
    var allP = document.querySelectorAll(paragraph)
    console.log(allP)
    for (let el of allP) {
        el.innerHTML = " "
    }
    
    
    
    //document.getElementById("diceFrequencyTestValue").innerHTML = ""
}

function activateButtons(container) {
    var all = document.querySelectorAll(container)
        console.log(all)
        for (let el of all) { el.disabled = false; }
    if(container == "div.testButtons button") {
        var allTestactivate = document.querySelector("#allTest")
        allTestactivate.disabled = false;
    }
}
function deactivateButtons(container) {
    var all = document.querySelectorAll(container)
        console.log(all)
        for (let el of all) { el.disabled = true; }
    if(container == "div.testButtons button") {
        var allTestactivate = document.querySelector("#allTest")
        allTestactivate.disabled = true;
    }
}

function deactivateButton(button) {
    usedButton = document.getElementById(button)
    usedButton.disabled = true
}

function makeAllTests(bool) {
    var allTest = document.getElementById("allTest")
        allTest.disabled = bool;
}

