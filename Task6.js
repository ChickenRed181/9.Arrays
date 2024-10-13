    const numbers = [10, 4, 100, -5, 54, 2]
    
// for
    let sumFor = 0
    for (let i = 0; i < numbers.length; i++) {
    sumFor += numbers[i] ** 3
    }
    console.log(sumFor)


// for of
    let sumForOf = 0
    for (let number of numbers) {
    sumForOf += number ** 3
    }
    console.log(sumForOf)


// forEach
    let sumForEach = 0
    numbers.forEach(number => {
    sumForEach += number ** 3
    })
    console.log(sumForEach)


// reduce
    const sumReduce = numbers.reduce((acc, number) => acc + (number ** 3), 0)
    console.log(sumReduce)

