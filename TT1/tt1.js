function sosanh(arr1, arr2) {
    let rs = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) == false) {
            rs.push(arr1[i])
        }
    }
    for (let j = 0; j < arr2.length; j++) {
        if (arr1.includes(arr2[j]) == false) {
            rs.push(arr2[j])
        }
    }
    return console.log(rs)
}
let A1 = [1, 2, 4, "a"];
let A2 = [1, 3, 4, "b"];
sosanh(A1, A2)