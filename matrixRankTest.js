function matrixRankTest(sequence) {
    let m = 3
    let k = 3
    let modulo = sequence.length % 9
    let rankArray = new Array()
    let arrayMatrix = new Array()
    var mat = new Array((sequence.length - modulo)/9)
    let counter = 0
    let rank = 3
    let p = new Array(4)
    //p = [0.001953, 0.0957, 0.5742, 0.3281]
    p = [0.1336, 0.5776, 0.2888]
    for (let n = 0; n < sequence.length - modulo; n = n+9) {
        mat[n/9] = new Array(3)
        
        /*for (let i = 0; i < mat.length; i++) {
            mat[n/9][i] = new Array(3)
        } */
        counter = 0
        for (let i = 0; i < m*3; i = i + 3) {
            mat[n/9][counter] = sequence.charAt(i+n) + sequence.charAt(i+n+1) + sequence.charAt(i+n+2)
            /*for (let j = 0; j < k; j++) {
                mat[n/9][counter] = sequence.charAt(j+i+n)
                console.log(mat)
            }*/
            counter++
        }
        //arrayMatrix[n/9] = mat
    }
    
    for (let j = 0; j < mat.length; j++) {
        rank = 3
        let zeroTrue = false
        if(mat[j][0].toString() == mat[j][1].toString() && mat[j][0].toString() == mat[j][2].toString()) {
            if(mat[j][0].toString() == "000") {rank = 0}
            else {rank = rank - 2} 
        }
        else if(mat[j][0].toString() == mat[j][1].toString() || mat[j][0].toString() == mat[j][2].toString() || mat[j][1].toString() == mat[j][2].toString()) {
            for (let i = 0; i < m; i++) {
                if(mat[j][i].toString() == "000") {
                    console.log("theben")
                    rank = rank - 1
                    zeroTrue = true
                }
            }
            if(zeroTrue != true) {rank = rank - 1}
        }
        else if(mat[j][0].toString() == "000" || mat[j][1].toString() == "000" || mat[j][2].toString() == "000") {rank = rank - 1}
        rankArray[j] = rank
    }
    let amountRanks = new Array(3).fill(0)
    /*for (let i = 0; i < rankArray.length; i++) {
        amountRanks[rankArray[i]] ++ 
    }*/
    for (let i = 0; i < rankArray.length; i++) {
        if(rankArray[i] == 0 || rankArray[i] == 1){
            amountRanks[0]++
        }
        else {
            amountRanks[(rankArray[i]-1)]++
        }
    }
    let x_Value = 0
    for (let i = 0; i < amountRanks.length; i++) {
        x_Value += Math.pow(amountRanks[i]-mat.length*p[i],2)/(mat.length*p[i])
    }
    return x_Value
}