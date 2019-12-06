const fs = require('fs')

function getFuel(mass) {
    return Math.floor(mass / 3) - 2
}

function getFuelRecursive(mass, accumulation=0) {
    if(mass <= 0) {
        return accumulation
    }
    const newFuel = getFuel(mass)
    return getFuelRecursive(newFuel, accumulation + Math.max(newFuel, 0))
}

fs.readFile('./input.txt', 'UTF-8', function(err, data) {
    let recurSum = 0
    let nonRecurSum = 0
    let mass2 = 0
    const arrData = data.split('\n')
    arrData.forEach(mass => {
        mass2 = Number(mass)
        recurSum += getFuelRecursive(mass2)
        nonRecurSum += getFuel(mass2)
    });
    //const fuel = arrData.reduce((accum, current) => accum + Math.floor(Number(current) / 3) -2, 0)
    console.log(nonRecurSum)
    console.log(recurSum)
})