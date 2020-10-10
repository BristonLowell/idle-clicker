let dollars = 0
let dollarCounter = 0
let intervalTimer = setInterval(interval, 1000)
let intervalTimerTwo = setInterval(interval, 1000)


let clickUpgrades = {
  mouse: {
    price: 10,
    quantity: 0,
    multiplier: 1
  }
};

let automaticUpgrades = {
  one: {
    price: 600,
    quantity: 0,
    multiplier: 20
  },
  two: {
    price: 1200,
    quantity: 0,
    multiplier: 50
  }
};

//Increase dollars by one
function mine() {
  dollars++
  for (const key in clickUpgrades) {
    if (clickUpgrades.hasOwnProperty(key)) {
      const powerUp = clickUpgrades[key]
      dollars += (powerUp.quantity * powerUp.multiplier)
      update()
      console.log(dollars)
    }
  }

  update()
  // alert(dollars)
}

//adds multiplier to clicker
function clickerPowerUp() {
  clickUpgrades.mouse.quantity += 1
  dollars -= clickUpgrades.mouse.price
  clickUpgrades.mouse.price += 50
  console.log(clickUpgrades.mouse.quantity)
  update()
}

//addes passive multiplier one
function passiveUpgrade() {
  dollars -= automaticUpgrades.one.price
  automaticUpgrades.one.price += 100

  clearTimeInterval();
  (automaticUpgrades.one.quantity += 1)
  intervalTimer = setInterval(interval, 1000)
  update()
}

//addes passive multiplier two
function passiveUpgradeTwo() {
  dollars -= automaticUpgrades.two.price
  automaticUpgrades.two.price += 200

  clearTimeInterval();
  (automaticUpgrades.two.quantity += 1)
  intervalTimerTwo = setInterval(intervalTwo, 1000)
  update()
}

//funtion set for interval for passive multiplier
function interval() {
  let passiveUpgrades = (automaticUpgrades.one.quantity * automaticUpgrades.one.multiplier)
  dollars += passiveUpgrades
  console.log(dollars)
  update()
}

//function set for interval two for passive multiplier
function intervalTwo() {
  let passiveUpgradesTwo = (automaticUpgrades.two.quantity * automaticUpgrades.two.multiplier)
  dollars += passiveUpgradesTwo
  console.log(dollars)
  update()
}

//clears interval to start new interval
function clearTimeInterval() {
  clearInterval(intervalTimer)
}

//clears interval to start new interval
function clearTimeIntervalTwo() {
  clearInterval(intervalTimerTwo)
}

//updates the information on the page to the user
function update() {
  let dollarCounter = document.getElementById("dollar-counter")
  dollarCounter.innerText = dollars.toString()

  let autoCounter = document.getElementById("auto-counter")
  autoCounter.innerText = autoHits.toString()

  if (dollars >= clickUpgrades.mouse.price) {
    document.getElementById("clicker-power-up").removeAttribute("disabled")
  } else {
    document.getElementById("clicker-power-up").setAttribute("disabled", "")
  }

  if (dollars >= automaticUpgrades.one.price) {
    document.getElementById("passive-power-up-one").removeAttribute("disabled")
  } else {
    document.getElementById("passive-power-up-one").setAttribute("disabled", "")
  }

  if (dollars >= automaticUpgrades.two.price) {
    document.getElementById("passive-power-up-two").removeAttribute("disabled")
  } else {
    document.getElementById("passive-power-up-two").setAttribute("disabled", "")
  }
}












update()
