// let placeOdd = []
// let placeEven = []

// for (let i = 1; i <= 100; i ++) {
//   if(i%2 === 0) {
//     placeEven = [...placeEven, i]
//   } else {
//     placeOdd = [...placeOdd, i]
//   }
// }

// console.log({placeEven, placeOdd})

// Reverse
// const reverseFunc = (fn) => {
//   console.log(fn.split("").reverse().join(""))
// }

// console.log(reverseFunc("i love coding"))

// const reverseFunc = (fn) => {
//   let strReverse = ''

//   for(let i = 0; i < fn.length; i++) {
//     strReverse = fn[i] + strReverse
//   }
//   return strReverse
// }

// console.log(reverseFunc("i love coding"))

// const reverseFunc = (fn) => {
//   let strReverse = ''

//   for(let i = fn.length - 1; i >= 0; i--) {
//     strReverse += fn[i]
//   }
//   return strReverse
// }

// console.log(reverseFunc("i love coding"))

// const reverseFunc = (fn) => {

//   for(let i = 0; i < fn.length / 2 ; i++) {
//     console.log(i + ":" + (fn.length - i -1) )
//     let indexAwal = i;
//     let indexAkhir = fn.length - i -1

//     if(indexAwal != indexAkhir) {
//       return false
//     }
//   }
//     return true

// }

// console.log(reverseFunc("kkkkkkkkk"))

// longest word

// const longestWord = (fn) => {
//   let arr = fn.match(/[a-z]+/gi)
//   return arr[1]

// }

// console.log(longestWord("fun&!! Time"))

// factorial

// const factorialFunc = (num) => {
//   if (num <= 0) {
//     return 1;
//   }

//   let result = 1;
//   for (let i = 1; i <= num; i++) {
//     result = result * i
//   }

//   return result

// }

// console.log(factorialFunc(4))

// function TimeConvert(num) {
//   let a = num <= 60 ? 0 : Math.round(num / 60)
//   let b = num - 60 * a

//   return a + ":" + b
// }

// console.log(TimeConvert(45))

// function FizzBuzz(num) {
//   let result = ''
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       result += "FizzBuzz "
//     }
//     else if(i%3 === 0) {
//       result += "Fizz "
//     } else if (i % 5 === 0) {
//       result += "Buzz "
//     }  else {
//       result += i + " "
//     }
//   }
//   return result

// }

// console.log(FizzBuzz(15))

// function ArrayAdditionI(arr) {

//   let largest = Math.max(...arr)
//   let largestIndex = arr.indexOf(largest)
//   const removeArr = arr.splice(largestIndex, 1)

//   let sum = arr.reduce((acc, n) => {
//     return acc + n;
//   }, 0)

//   console.log(sum)

//   return largest <= sum ? "true" : "false"
// }

// console.log(ArrayAdditionI([3,5,-1,8,12]))

// arr_ = Array(12).fill(0)

// let count = 1
// let prevC = 1

// for (let i = 0; i < arr_.length; i++) {
//   if (count != 0) {
//     arr_[i] = `${i+1}`
//     count--
//     console.log(arr_[i])
//   } else if (count == 0) {
//     if (prevC == 1) {
//       count = 2
//       prevC = 2
//     } else if (prevC == 2) {
//       count = 1
//       prevC = 1
//     }
//     arr_[i] = '*'
//   }
// }

// console.log(arr_)

// Find All Duplicates in an Array
// var findDuplicates = function(nums) {
//   let result = []
//   for (let i = 0; i < nums.length; i++){
//     let value = Math.abs(nums[i])
//     let index = value - 1;
//     console.log(index + ":" + nums[index] + ":" + nums[i])
//     // console.log(nums[index])
//     if (nums[index] < 0) {
//       result.push(value)
//     } else {
//       nums[index] *= -1
//     }
//    }
//   return result;

// };

// console.log(findDuplicates([4,3,2,7,8,2,3,1]))

// two sum
// var twoSum = function(nums, target) {
//     for(let i = 0; i < nums.length; i++) {
//       // console.log(nums[i]) // 2 7 11 15
//       for(let j = i + 1; j < nums.length; j++) {
//         console.log(nums[j])
//         if(nums[i] + nums[j] === target) {
//           return [i,j]
//         }
//       }
//     }
// }

// console.log(twoSum([1,11,8,15], 9))

// two sum using hasmap
// var twoSum = function(nums, target) {
//     let map = []
//     for(let i = 0; i < nums.length; i++) {
//       let value = nums[i]
//       let complementPair = target - value
//       console.log(complementPair)
//       if(map[complementPair] !== undefined) {
//         return [map[complementPair], i]
//       } else {
//         map[value] = i
//       }
//     }
// }

// console.log(twoSum([2,7,11,10], 9))

// const factorialRecursive = (nums) => {
//   let temp = 0
//   if(nums <= 0) {
//     return 1;
//   } else {
//     temp = nums * factorialRecursive(nums - 1)
//   }
//   return temp
// }

// console.log(factorialRecursive(5))

// umique
const input = 'Pegipegi provides various online reservation services'
  .replace(/\s/gi, '')
  .split('')
  .map((s) => s.toLowerCase())
  .sort()

//const uniqueInput = [...new Set(input)];
const uniqueInput = input.reduce(
  (result, item) => [...result, ...(result.includes(item) ? [] : [item])],
  []
)

console.log(input)
console.log(uniqueInput)

const alphabets = Array.from({ length: 26 }).reduce((result, _, i) => {
  const alphabet = String.fromCharCode(97 + i)

  return {
    ...result,
    [alphabet]: i.toString(),
  }
}, {})

console.log(alphabets)
console.log(uniqueInput.map((ui) => alphabets[ui]))
