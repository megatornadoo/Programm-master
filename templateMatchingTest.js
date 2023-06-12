function templateMatchingTest(sequence) {
    let blocksize = 10 //Blockgroesse (kann angepasst werden)
    let modulo = sequence.length % blocksize 
    let N = ((sequence.length-modulo)/blocksize) //Anzahl N der Bloecke
    let counterArray = new Array(N).fill(0)
    //Berechnung Erwartungswert und Sigma
    let e = (blocksize-3+1)/Math.pow(2,3)
    let sigma = blocksize * (1/(Math.pow(2,3))-(5/(Math.pow(2,6))))
    //Die möglichen Muster
    let templateArray = ["000", "001", "010", "100", "011", "110", "101", "111"]
    let xValueArr = new Array(8).fill(0)
    //Berechnung der W_j
    for (let k = 0; k < 8; k++) {
        counterArray.fill(0)
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < blocksize; j++) {
                if(sequence.charAt(j+i*10) + sequence.charAt(j+i*10+1) + sequence.charAt(j+i*10+2) == templateArray[k]) {
                    counterArray[i] ++
                    j = j + 2
                }
            }
        }
        //Berechnung der Chi-Quadrat Werte
        for (let i = 0; i < counterArray.length; i++) {
            xValueArr[k] += (Math.pow(counterArray[i]-e,2))/sigma
        } 
    }
    return xValueArr
}