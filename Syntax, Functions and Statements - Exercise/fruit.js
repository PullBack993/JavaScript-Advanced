function calculator(fruit_name, weightGram, price){
    weightKG = weightGram / 1000
    totalCost = price * weightKG
    console.log(`I need $${totalCost.toFixed(2)} to buy ${weightKG.toFixed(2)} kilograms ${fruit_name}.`)
}   



calculator('orange', 2500, 1.80)


'orange', 2500, 1.80