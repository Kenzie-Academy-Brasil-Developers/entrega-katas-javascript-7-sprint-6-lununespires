let arrayTest = [1, 2, 3, 4, 5]
let arrayTest2 = ["Kenzie", "Academy", "Brasil"]

const multiply = (elemento) => console.log(elemento * 2)

const filterNumbers = (value) => value > 3

const elementFill = (array, number, startIndex = 0, endIndex = array.length) => {
  for (let i = startIndex; i < endIndex; i++) {
    array[i] = number
  }
  return array
}

const elementIncludes = (array, num) => {
  let result = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      result = true;
      console.log(array[i])
    }
  }
  return result;
}

const reset = () => arrayTest = [1, 2, 3, 4, 5];

const elementIndexOf = (array, element, position) => {
  let result = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      position = i;
      result = position;
    }
  }
  return result;
}

const arrConcat = (array1, array2) => {
  for (let i = 0; i < array2.length; i++) {
    array1.push(array2[i])
  }
  return array1;
}

const callbackJoin = (array, element) => {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    result += array[i] + element
  }
  return result;
}

// function callbackReduce(element) {
//   let acc = 0;
//   for (let i = 0; i < element.length; i++) {
//     acc += element[i]
//   }
//   return acc;
// }
