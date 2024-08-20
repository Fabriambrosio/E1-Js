function esPar(numero) {
  if (numero % 2 === 0) {
    console.log(`El número ${numero} es par.`);
  } else {
    console.log(`El número ${numero} es impar.`);
  }
}

function compararNumeros(num1, num2) {
  if (num1 > num2) {
    console.log(`El número ${num1} es mayor que ${num2}.`);
  } else if (num2 > num1) {
    console.log(`El número ${num2} es mayor que ${num1}.`);
  } else {
    console.log(`Los números ${num1} y ${num2} son iguales.`);
  }
}

function esMultiploDeCinco(numero) {
  if (numero % 5 === 0) {
    console.log(`El número ${numero} es múltiplo de 5.`);
  } else {
    console.log(`El número ${numero} no es múltiplo de 5.`);
  }
}

function imprimirHasta(numero) {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
}

function repetirPalabra(palabra, repeticiones) {
  for (let i = 0; i < repeticiones; i++) {
    console.log(palabra);
  }
}

function imprimirArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

function imprimirArraySinQuinto(array) {
  for (let i = 0; i < array.length; i++) {
    if (i !== 4) {
      console.log(array[i]);
    }
  }
}

function multiplicarArray(array, multiplicador) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] * multiplicador);
  }
}
