// Задание 3-4
const coffees = ['Latte', 'Cappuccino', 'Americano']
const prices = [1.5, 1, 2]
const updatedPrices = prices.map(price => price + 0.5)
const coffeeName = prompt('Поиск кофе по названию:').toLowerCase()

const coffeeIndex = coffees.findIndex(coffee => coffee.toLowerCase() === coffeeName)

  if (coffeeIndex !== -1) {
    alert(`Держите ваш любимый кофе ${coffees[coffeeIndex]}. Он ${coffeeIndex + 1}-й по популярности в нашей кофейне.`)
  } else {
    alert('К сожалению, такого вида кофе нет в наличии')
  }

  coffees.forEach((coffee, index) => {
      alert(`Кофе ${coffee} сейчас стоит ${updatedPrices[index]} евро`)
    })

  
// Задание 5
const clientsEstimations = []
  function askClientToGiveEstimation() {
    const estimation = Number(prompt('Как вы оцениваете нашу кофейню от 1 до 10?'))

      if (estimation >= 1 && estimation <= 10) {
        clientsEstimations.push(estimation)
      }
    }

    for (let i = 0; i < 5; i++) {
      askClientToGiveEstimation()
    }

const goodEstimations = clientsEstimations.filter(estimation => estimation > 5).length
const notGoodEstimations = clientsEstimations.filter(estimation => estimation <= 5).length

alert(`Всего положительных оценок: ${goodEstimations}; Всего отрицательных оценок: ${notGoodEstimations}`)
