import * as constants from "./constants"

export function totalScore() {
    let total = 0;
    if (typeof window !== "undefined") {
        for (let i = 1; i <= 10; ++i) {
            total += parseInt(localStorage.getItem(`question${i}`))
        }
        localStorage.setItem("score", total)
    }
    return total
}

export function typeOfResult(score) {
    if (score >  0 && score <= 10) return constants.TYPE.ROOKIE
    if (score > 10 && score <= 20) return constants.TYPE.NOVICE
    if (score > 20 && score <= 30) return constants.TYPE.AMATUER
    if (score > 30 && score <= 40) return constants.TYPE.EXPERT
}

export function optionScore(qNo, box) {
    switch(qNo) {
        case 1:
            if (box == 1) return 1
            if (box == 2) return 4
            if (box == 3) return 2
            if (box == 4) return 3
            break
        case 2:
            if (box == 1) return 1
            if (box == 2) return 3
            if (box == 3) return 2
            if (box == 4) return 4
            break
        case 3:
            if (box == 1) return 4
            if (box == 2) return 3
            if (box == 3) return 1
            if (box == 4) return 2
            break
        case 4:
            if (box == 1) return 4
            if (box == 2) return 3
            if (box == 3) return 1
            if (box == 4) return 2
            break
        case 5:
            if (box == 1) return 2
            if (box == 2) return 3
            if (box == 3) return 4
            if (box == 4) return 1
            break
        case 6:
            if (box == 1) return 3
            if (box == 2) return 1
            if (box == 3) return 2
            if (box == 4) return 4
            break
        case 7:
            if (box == 1) return 3
            if (box == 2) return 4
            if (box == 3) return 1
            if (box == 4) return 2
            break
        case 8:
            if (box == 1) return 4
            if (box == 2) return 2
            if (box == 3) return 3
            if (box == 4) return 1
            break
        case 9:
            if (box == 1) return 4
            if (box == 2) return 2
            if (box == 3) return 1
            if (box == 4) return 3
            break
        case 10:
            if (box == 1) return 1
            if (box == 2) return 4
            if (box == 3) return 3
            if (box == 4) return 2
            break
    }
}
