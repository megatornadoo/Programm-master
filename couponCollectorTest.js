function couponCollector(sequence) {
    //Die Wahrscheinlichkeiten für den Coupon Collector Test
    let prob = [0.1917, 0.2314, 0.2011, 0.1943, 0.1815]
    //Array in dem aufgezeichnet wird welche "Karten" bereits gesammelt wurden.
    //index 0 = (000), 1 = (001), 2 = (010), 3 = (100), 4 = (011), 5 = (101), 6 = (110), 7 = (111)
    let alrCollected = new Array(8).fill(false)
    let arrBuys = new Array(5).fill(0)
    let prevBuys = 0
    let buyCounter = 0
    let mod = sequence.length % 3
    let expAvgBuys =  21.743
    let exp = sequence.length/3/expAvgBuys
    console.log("expected: " + exp)
    for (let i = 0; i < sequence.length-mod; i += 3) {
        //Zählung der Coupons die bereits gesammelt wurden
        switch (sequence.charAt(i) + sequence.charAt(i+1) + sequence.charAt(i+2)) {
            case "000": alrCollected[0] = true; break;
            case "001": alrCollected[1] = true; break;
            case "010": alrCollected[2] = true; break;
            case "100": alrCollected[3] = true; break;
            case "011": alrCollected[4] = true; break;
            case "101": alrCollected[5] = true; break;
            case "110": alrCollected[6] = true; break;
            case "111": alrCollected[7] = true; break;
        }
        console.log(alrCollected)
        //Wenn alle Coupons gesammelt wurden wird je nach Anzahl der Einkäufe der entsprechende Wert erhöht
        let isTrue = collected => collected.every(Boolean)
        if(isTrue(alrCollected)) {
            buyCounter = i/3+3-prevBuys
            if(buyCounter <= 14 && buyCounter >= 8) {
                arrBuys[0]++
            }
            else if(buyCounter <= 18 && buyCounter >= 15) {
                arrBuys[1]++
            }
            else if(buyCounter <= 22 && buyCounter >= 19) {
                arrBuys[2]++
            }
            else if(buyCounter <= 28 && buyCounter >= 23) {
                arrBuys[3]++
            }
            else {
                arrBuys[4]++
            }
            alrCollected.fill(false)
            prevBuys += buyCounter
        }
        console.log(arrBuys)
    }
    //Chi Quadrat Test durchführen
    let x_Value = 0
    for (let i = 0; i < arrBuys.length; i++) {
        x_Value += Math.pow(arrBuys[i]-exp*prob[i],2)/(exp*prob[i])
        console.log(x_Value)
    }
    console.log(x_Value)
    return x_Value
}

