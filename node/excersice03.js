

let peso = 60
let pesoIdeal = 50
var cambio_peso = 2

for (i = 0; peso > pesoIdeal; i ++){
peso =  peso - cambio_peso
}          
var kiloStotales = cambio_peso * i
var cadaSemana = kiloStotales / i
console.log('en ' + i + ' semanas usted baja ' +  kiloStotales+ ' kilos' )  
   console.log('Por semana usted bajara: ' +cadaSemana )
