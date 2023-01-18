//two sum,three sum,four sum
//sorting
function bubbleSort(array) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

var numbers = [12, 10, 15, 11, 14, 13, 16];
bubbleSort(numbers);
console.log(numbers);
//remove duplicate
function removeDuplicates(nums) {
  return [...new Set(nums)];
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4, 5, 5]));
//no.of.element in string

