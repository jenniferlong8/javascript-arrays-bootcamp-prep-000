function addElementToBeginningOfArray(array,element) {
  var new_array = [element, ...array]
  return new_array
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var new_array = [...array,element]
  return new_array
}

function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element)
  return array
}

function accessElementInArray(array,index) {
  var element = array[index]
  return element
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  var new_array = array.slice(1)
  return new_array
}
