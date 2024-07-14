
const Biscochos = [ "1-Grande", " 2-Chico"]
const Rellenos = [ " 1.Dulce de leche", " 2.Ganache"]
const Decorados = [ " 1-Crema", " 2-Fondant"]

let total= 0 
function cotizartorta( precio1, precio2, precio3){
       total+= precio1 + precio2 + precio3
}

let bandera = true
let bandera2= true 
let bandera3=true 

let precio1 = 0
let precio2 = 0
let precio3 = 0
let bisco1 = ""
let relle2 = ""
let deco3 = ""

while (bandera) {
    let Menubiscocho = "Elige el tamaño del biscocho que quieras: \n" + Biscochos.join("\n")
    let seleccionbiscocho = prompt(Menubiscocho);
    switch (parseInt (seleccionbiscocho)){
      case 1:
        bandera = false
         precio1 = 100 
         bisco1 = "Grande"
        break;
      case 2:
        bandera = false 
         precio1 = 60
         bisco1 = "Chico"
        break;
      default:
        alert("Selección invalida. Ingrese nuevamente la opción")
}
}
console.log(Biscochos)

while (bandera2){
    let Menurellenos = "Segundo eligue el relleno que más te guste: \n" + Rellenos.join("\n")
    let seleccionrelleno = prompt(Menurellenos);
    switch (parseInt (seleccionrelleno)){
      case 1:
        bandera2=false
        precio2 = 100 
        relle2 = "Dulce de leche"
        break;
      case 2:
        bandera2=false
        precio2 = 150
        relle2 = "Ganache"
        break;
      default:
        alert("Selección invalida. Ingrese nuevamente la opción")
}
}
console.log(Rellenos)


while(bandera3){
    let Menudecorado = "Y por último elige el decorado que más te guste: \n" + Decorados.join("\n")
    let selecciondecorado = prompt(Menudecorado);
    switch (parseInt (selecciondecorado)){
       case 1:
        bandera3 = false
        precio3 = 20 
        deco3 = "Crema"
        break;
       case 2:
        bandera3 = false
        precio3 = 45
        deco3 = "Fondant"
        break;
       default:
        alert("Selección invalida. Ingrese nuevamente la opción")
}
}
console.log(Decorados)

cotizartorta (precio1, precio2, precio3)

alert(' El total es: ' + total)

console.log(total)
console.log ("Tu biscocho elegido es " + bisco1 +  " con un relleno de " + relle2 +  " y un decorado de " + deco3)
alert("Tu biscocho elegido es " + bisco1 +  " con un relleno de " + relle2 +  " y un decorado de " + deco3 )
