
let dollars = 0
let dollarCounter = 0
let intervalTimer = setInterval(interval, 1000)
// let intervalTimerTwo = setInterval(interval, 1000)
let passiveUpgrades = 0
let autoHits = 0
let firstUpgrade = 0
let secondUpgrade = 0
let thirdUpgrade = 0
let fourthUpgrade = 0


let clickUpgrades = {
  mouse: {
    price: 50,
    quantity: 0,
    multiplier: 2
  }
};

let automaticUpgrades = {
  one: {
    price: 1000,
    quantity: 0,
    multiplier: 20
  },
  two: {
    price: 2500,
    quantity: 0,
    multiplier: 50
  },
  three: {
    price: 15000,
    quantity: 0,
    multiplier: 250
  }
};

//Increase dollars by one
function mine() {
  if (clickUpgrades.mouse.quantity == 0) dollars++

  for (const key in clickUpgrades) {
    if (clickUpgrades.hasOwnProperty(key)) {
      const powerUp = clickUpgrades[key]
      dollars += (powerUp.quantity * powerUp.multiplier)
      update()
      // console.log(dollars)
    }
  }
  update()
  // alert(dollars)
}

//adds multiplier to clicker
function clickerPowerUp() {
  clickUpgrades.mouse.quantity += 1
  dollars -= clickUpgrades.mouse.price
  clickUpgrades.mouse.price += 200
  // console.log(clickUpgrades.mouse.quantity)
  update()
}

//addes passive multiplier one
function passiveUpgrade() {
  dollars -= automaticUpgrades.one.price
  automaticUpgrades.one.price += 400

  clearTimeInterval();
  (automaticUpgrades.one.quantity += 1)
  intervalTimer = setInterval(interval, 1000)
  update()
}

//addes passive multiplier two
function passiveUpgradeTwo() {
  dollars -= automaticUpgrades.two.price
  automaticUpgrades.two.price += 5000

  clearTimeInterval();
  (automaticUpgrades.two.quantity += 1)
  intervalTimer = setInterval(interval, 1000)
  update()
}

//addes passive multiplier three
function passiveUpgradeThree() {
  dollars -= automaticUpgrades.three.price
  automaticUpgrades.three.price += 1250

  clearTimeInterval();
  (automaticUpgrades.three.quantity += 1)
  intervalTimer = setInterval(interval, 1000)
  update()
}

//funtion set for interval for passive multiplier
function interval() {
  passiveUpgrades = ((automaticUpgrades.one.quantity * automaticUpgrades.one.multiplier) + (automaticUpgrades.two.quantity * automaticUpgrades.two.multiplier) + (automaticUpgrades.three.quantity * automaticUpgrades.three.multiplier))
  dollars += passiveUpgrades
  // console.log(dollars)
  update()
}

//function set for interval two for passive multiplier
// function intervalTwo() {
//   let passiveUpgradesTwo = (automaticUpgrades.two.quantity * automaticUpgrades.two.multiplier)
//   dollars += passiveUpgradesTwo
//   console.log(dollars)
//   update()
// }

//clears interval to start new interval
function clearTimeInterval() {
  clearInterval(intervalTimer)
}

//clears interval to start new interval
// function clearTimeIntervalTwo() {
//   clearInterval(intervalTimerTwo)
// }

//updates the information on the page to the user
function update() {
  autoHits = passiveUpgrades
  firstUpgrade = clickUpgrades.mouse.quantity
  secondUpgrade = automaticUpgrades.one.quantity
  thirdUpgrade = automaticUpgrades.two.quantity
  fourthUpgrade = automaticUpgrades.three.quantity

  let dollarCounter = document.getElementById("dollar-counter")
  dollarCounter.innerText = dollars.toString()

  let autoCounter = document.getElementById("auto-counter")
  autoCounter.innerText = autoHits.toString()

  let upgradeFirst = document.getElementById("first-upgrade-counter")
  upgradeFirst.innerText = firstUpgrade.toString()

  let upgradeSecond = document.getElementById("second-upgrade-counter")
  upgradeSecond.innerText = secondUpgrade.toString()

  let upgradeThird = document.getElementById("third-upgrade-counter")
  upgradeThird.innerText = thirdUpgrade.toString()

  let upgradeFourth = document.getElementById("fourth-upgrade-counter")
  upgradeFourth.innerText = fourthUpgrade.toString()

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

  if (dollars >= automaticUpgrades.three.price) {
    document.getElementById("passive-power-up-three").removeAttribute("disabled")
  } else {
    document.getElementById("passive-power-up-three").setAttribute("disabled", "")
  }
}












update()

