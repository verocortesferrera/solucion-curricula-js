// Ingresos
var income = prompt("¿Cuánto es el ingreso?");//400
// Costos
var costs = prompt("¿Cuánto es el costo?");//65
// Porcentaje de impuestos
var taxPercent = prompt("¿Cuánto es el porcentaje(%) de impuestos?");//18%
//ganancia bruta
var grossProfit = income-costs;//335
// Obteniendo cantidad de impuestos
var tax = grossProfit*taxPercent/100;//60.3
//ganancia neta
var netIncome = grossProfit-tax;
// Mostrando ganancia neta
document.write("Tu ganancia neta es $ " + netIncome)
