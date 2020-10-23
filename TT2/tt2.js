let team = [
    {
        name: "Chelsea",
        points: 75,
        GD: 39,
    },
    {
        name: "Arsenal",
        points: 99,
        GD: 45,
    },

    {
        name: "MU",
        points: 75,
        GD: 29,
    },
    {
        name: "Liverpool",
        points: 75,
        GD: 29,
    },
    {
        name: "AAA",
        points: 75,
        GD: 29,
    },
    {
        name: "ABC",
        points: 40,
        GD: 29,
    },
]
let num = 0

function point(arr) {

    let pointsArr = []
    for (let i of arr) {
        pointsArr.push(i.points)
    }

    pointsArr.sort((a, b) => { return b - a })
    for (let i = 0; i < arr.length; i++) {
        let rank = pointsArr.indexOf(+(arr[i].points)) + 1
        arr[i].position = rank
    }

    let setArr = []
    for (let i of arr) {
        setArr.push([i, i.position])
    }
    setArr.sort((a, b) => { return a[1] - b[1] })
    for (let i = 0; i < arr.length; i++) {
        arr[i] = setArr[i][0]
    }
    GD(arr)
    return arr
}



function GD(arr) {
    let setGD = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i != j) {
                if (arr[i].position == arr[j].position) {
                    setGD.push(+(arr[i].GD))
                    break
                }
            }
        }
    }

    setGD.sort((a, b) => { return b - a })
    if (setGD.length > 0) {
        let setName = []

        for (let i = 1; i < arr.length; i++) {
            if (setGD.indexOf(arr[i].GD) != -1 && arr[i].position == arr[i - 1].position) {
                if (num == 0) {
                    if (setGD.indexOf(arr[i].GD) > setGD.indexOf(arr[i - 1].GD)) {
                        arr[i - 1].position = (arr[i].position) + setGD.length - 1
                    }
                } else if (num == 1) {
                    if (setName.indexOf(arr[i].name) == - 1) {
                        setName.push(arr[i].name)
                    }
                    if (setName.indexOf(arr[i - 1].name) == - 1) {
                        setName.push(arr[i - 1].name)
                    }
                    setName.sort()
                }
            }
        }

        if (num == 1) {
            let rank = 0
            for (let j = 0; j < arr.length; j++) {
                if (setName.indexOf(arr[j].name) != -1) {
                    if (setName.indexOf(arr[j].name) == 0) {
                        rank = arr[j].position
                    }
                    setName[setName.indexOf(arr[j].name)] = arr[j]
                    if (rank > 0) {
                        for (let k = 1; k < setName.length; k++) {
                            arr[arr.indexOf(setName[k])].position = rank + k
                        }
                    }
                }
            }
        }
    }

    num += 1

    if (num <= 1) {
        GD(arr)
    } else {
        return arr
    }

}

function setRank(arr) {
    console.log(point(arr));
}

setRank(team)