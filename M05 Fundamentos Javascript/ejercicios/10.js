function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:

if(isNaN(fecha)){
 return(false)
}else{
  return(true)
}

  
}

module.exports = esFechaValida;