function overlappingTempMatch(sequence) {
    let blocksize = 8 //Blockgroesse
    let modulo = sequence.length % blocksize 
    let N = ((sequence.length-modulo)/blocksize) //Anzahl N der Bloecke
    let counterArray = new Array(N).fill(0)
    let sumCounter = 0
    //Wahrscheinlichkeiten für die verschiedenen Fälle (ab 4 zusammengefasst)
    let probs = [0.687, 0.129, 0.0765, 0.0451, 0.0623]
    let templateArray = ["000", "001", "010", "100", "011", "110", "101", "111"]
    let wjArray = new Array(5).fill(0)
    let xValueArr = new Array(8).fill(0)
    //Berechnung der W_j
    for (let k = 0; k < 8; k++) {
        wjArray = new Array(5).fill(0)
        counterArray.fill(0)
        //Zählen der Vorkommen der Muster in den Blöcken
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < blocksize-2; j++) {
                if(sequence.charAt(j+i*8) + sequence.charAt(j+i*8+1) + sequence.charAt(j+i*8+2) == templateArray[k]) {
                    counterArray[i] ++
                }
            }
        }
        console.log(counterArray)
        /*Wenn Muster zb 3 Mal in einem Block vorkommt so wird das Array an der Stelle drei um 1 erhöht
        wird für jeden Block gemacht. */ 
        for (let i = 0; i < counterArray.length; i++) {
            if(counterArray[i] < 4) {
                wjArray[counterArray[i]]++
            }
            else {
                wjArray[4]++
            }
        }
        //Berechnung der ChiQuadrat Statistik
        for (let i = 0; i < wjArray.length; i++) {
            xValueArr[k] += (Math.pow(wjArray[i]-(N*probs[i]),2))/(N*probs[i])
        }
    }
    console.log(xValueArr)
    return xValueArr
}