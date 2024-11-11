function calcTip (bill, tip) {
  let amount = bill + bill * tip

  return amount
}

let bill = 275
let tip = 0.15
let amount = calcTip(bill, tip)

if (bill >= 50 && bill <= 300) {
  console.log(`the bill was ${bill}, the tip ${tip} ,the 
       total is ${amount}`)
} else if (bill >= 301) {
  console.log(`the bill was ${bill}, the tip ${tip} ,the 
       total is ${amount}`)
}
