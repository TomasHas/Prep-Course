// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  return array.map((ele) => ele + 1);
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  let newArr = array;
  array.push(elemento);
  return newArr;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  let newArr = array;
  array.unshift(elemento);
  return newArr;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(" ");
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if (array.includes(elemento)) {
    return true;
  } else {
    return false;
  }
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let suma = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    suma += resultadosTest[i];
  }
  return suma / resultadosTest.length;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let grande = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (grande > numeros[i]) {
      return grande;
    } else {
      grande = numeros[i];
    }
  }
  return grande;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y
  // devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento,
  // simplemente devuélvelo
  // Escribe tu código aquí:
  //
  let total = 1;
  if (arguments.length < 1) {
    return 0;
  }
  for (let i = 0; i < arguments.length; i++) {
    total = total * arguments[i];
  }
  return total;
}
function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí;
  let newArr = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) {
      newArr.push(arreglo[i]);
    }
  }
  return newArr.length;
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí

  if (numeroDeDia > 7) {
    return "Numero no valido";
  }
  if (numeroDeDia === 7 || numeroDeDia === 1) {
    return "Es fin de semana";
  } else {
    return "Es dia Laboral";
  }
}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n.
  //Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  if (n.toString()[0] === "9") {
    console.log(n.toString()[0]);
    return true;
  } else {
    return false;
  }
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos
  // de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === arreglo[i + 1]) {
      return true;
    } else {
      return false;
    }
  }
}

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados,
  //recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (
      array[i] === "Enero" ||
      array[i] === "Marzo" ||
      array[i] === "Noviembre"
    ) {
      newArr.push(array[i]);
    }

    if (newArr.length === 3) {
      return newArr;
    }
  }
  return "No se encontraron los meses pedidos";
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200.
  //Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100).
  //Finalmente devolver el nuevo array.
  // Tu código:
  let mayoresCien = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      mayoresCien.push(array[i]);
    }
  }
  return mayoresCien;
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero
  //recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. //Devolver el array.
  //Si en algún momento el valor de la suma y
  //la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let newArr = [];
  let suma = numero;
  for (let i = 0; i < 10; i++) {
    newArr.push((suma += 2));
    if (i === 9) {
      return newArr;
    }
    if (suma === i) {
      break;
    }
  }
  return "Se interrumpió la ejecución";
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:+
  let newArr = [];
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    }
    newArr.push((numero += 2));
  }

  return newArr;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement,
};
