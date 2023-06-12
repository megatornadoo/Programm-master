function alternationTest(sequence) {
    let n = sequence.length
    let counter = new Array(3).fill(0)
    //array 0 ist 0101 1 ist 1010 2 ist rest
    let modulo = n % 4
    //falls n nicht durch 4 teilbar ist werden die letzten Zahlen weggelassen sodass n durch 4 teilbar wird
    for (let i = 0; i < n-modulo; i+=4) {
        if(sequence.charAt(i) == '0' && sequence.charAt(i+1) == '1' && sequence.charAt(i+2) == '0' && sequence.charAt(i+3) == '1') {
            counter[0] ++
        }
        else if(sequence.charAt(i) == '1' && sequence.charAt(i+1) == '0' && sequence.charAt(i+2) == '1' && sequence.charAt(i+3) == '0') {
            counter[1] ++
        }
        else {
            counter[2] ++
        }
    }
    let p = [1/16,1/16,7/8]
    let xValue = 0
    for (let i = 0; i < counter.length; i++) {
        xValue += ((Math.pow(counter[i] - (n/4)*p[i],2))/((n/4)*p[i]))
    }
    return xValue
}