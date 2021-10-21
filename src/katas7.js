// // forEach()
// sintaxe: arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);
function newForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}
newForEach(arrayTest, multiply)
arrayTest.forEach(multiply)


// map()
// sintaxe: arr.map(callback(currentValue [, index [, array]])[, thisArg]);
function newMap(array, callback) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array))
  }
  return result
}
newMap(arrayTest, multiply)
arrayTest.map(multiply)


//filter()
//sintexe: var newArray = arr.filter(callback[, thisArg])
function newFilter(array, callback) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}
console.log(newFilter(arrayTest, filterNumbers))
console.log(arrayTest.filter(filterNumbers))


//find()
//sintaxe: arr.find(callback(element[, index[, array]])[, thisArg])
function newFind(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return array[i]
    }
  }
}
console.log(newFind(arrayTest, filterNumbers))
console.log(arrayTest.find(filterNumbers))


//findIndex()
function newFindIndex(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return i
    }
  }
}
console.log(newFindIndex(arrayTest, filterNumbers))
console.log(arrayTest.findIndex(filterNumbers))


// //reduce()
// //sintaxe: array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial]))

//some
//sintaxe: arr.some(callback[, thisArg])
function newSome(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true
    }
  }
  return false
}
console.log(newSome(arrayTest, filterNumbers))
console.log(arrayTest.some(filterNumbers))


//every
//arr.every(callback[, thisArg])
function newEvery(array, callback) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      count++;
    }
  }
  if (count === array.length) {
    return true;
  }
  return false;
}
console.log(newEvery(arrayTest, filterNumbers))
console.log(arrayTest.every(filterNumbers))


//fill
//arr.fill(valor[, ínicio = 0[, fim = this.length]])
function newFill(array, number, callback) {
  return callback(array, number)
}
console.log(newFill(arrayTest, 8, elementFill))
console.log(arrayTest.fill(8, elementFill))

reset()

//includes
//sintaxe: array.includes(searchElement[, fromIndex])
function newIncludes(array, number, callback) {
  return callback(array, number)

}
console.log(newIncludes(arrayTest, 10, elementIncludes))
console.log(arrayTest.includes(arrayTest, 10, elementIncludes))


//IndexOf
//sintaxe: array.indexOf(elementoDePesquisa, [pontoInicial = 0])
function newIndexOf(array, item, position, callback) {
  return callback(array, item, position)
}
console.log(newIndexOf(arrayTest, 3, 0, elementIndexOf))


//concat
//Sintaxe: arr.concat(valor1, valor2, ..., valorN)
function newConcat(array1, array2, callback) {
  return callback(array1, array2)
}
console.log(newConcat(arrayTest, arrayTest2, arrConcat))
console.log(arrayTest.concat(arrayTest2))


//join
//sintaxe: arr.join([separador = ','])
function newJoin(array, element, callback) {
  return callback(array, element)
}
console.log(newJoin(arrayTest, "; ", callbackJoin))

//reduce
//sintaxe: array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial]))
//NAO CONSEGUI FAZER
