const fs = require('fs')

const strInput = fs.readFileSync('./input.txt', 'UTF-8')
const numInput = strInput.split(',').map(str => Number(str))

function checkValue(arrTestData) {
    for (let iStep = 0; iStep < arrTestData.length; iStep+=4) {
        const opcode = arrTestData[iStep];
        if (opcode == 99) {
            break
        }
        let val1 = arrTestData[arrTestData[iStep+1]]
        let val2 = arrTestData[arrTestData[iStep+2]]
        let iStep3 = arrTestData[iStep+3]
        if (opcode == 1) {
            arrTestData[iStep3] = val1 + val2
        }
        else if (opcode == 2) {
            arrTestData[iStep3] = val1 * val2
        }
    }
    return arrTestData[0]
}

function setIntcode(input, pos1, pos2) {
    inputCopy = input.map(x => x)  //Missed this for awhile, really messes things up without it.
    inputCopy[1] = pos1
    inputCopy[2] = pos2
    return checkValue(inputCopy)
}
console.log(setIntcode(numInput, 12, 2))

const goalOutput = 19690720

for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
        if(setIntcode(numInput, noun, verb) === goalOutput){
            console.log(100 * noun + verb)
            break
        }
    }
}
