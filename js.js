// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
    let numero = 10
    if ( numero % 2 === 0 ) { 
        console.log("El numero "+numero+ " es par"  )
    }else{
      console.log("No, el número "+numero+ " es impar");
     }


    
// 2 - Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
let num1 = 2
let num2 = 5
console.log(num1 > num2 ) 
console.log(num1 > num2 || num1 == num2);





// 3 - Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
     if ( numero > 0 && numero % 5 == 0 ) { 
         console.log("Si, el número "+numero+ " es múltiplo de 5"  )
     }else{
       console.log("No, el número "+numero+ " no es múltiplo de 5");
      }





// 4 - Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
let dias = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
for (let i = 0; i < 10; i++) {
    if (dias[i] == "5") {
       break;
    }
    console.log(dias[i]);
}






// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
let nombre = "Juan";
let edad = 18;
 if (edad > 18) {
    console.log("Hola " + nombre, "Ud es mayor de 18 años");
 } else if (edad == 18) {
    console.log("Hola " + nombre, "Ud tiene 18 años");
 } else {
    console.log("Hola " + nombre, "Ud es menor de 18 años");
 }





// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
for (let i = 0; i < 10; i++) {
    console.log(dias[i]);
}





// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

for (let i = 0; i < 10; i++) {
    if (dias[i] == "5") {
       continue;
    }
    console.log(dias[i]);
}





// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
for (let i = 0; i < 10; i++) {
    console.log(dias[i]*5);
}










