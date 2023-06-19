console.log("hello world!");
var fName: string = "Quan";
console.log(fName);

var age: number = 18;
var single: boolean = true;
var funny: boolean = false;
var wife: string = "";
var kids: null = null;
var jobs: any = "Nhảy thoát y";
jobs = ["Nhảy thoát y ", "Công an"];

wife = "quan's wife";

console.log(fName, age, single, funny);

console.log(`${fName} is ${age} years old . ${fName} is single because `);

var sum = function (num1: number, num2: number): void {
  console.log(num1 + num2);
};
sum(1, 2);

var person: { name: string; job: string; tall: boolean } = {
  name: "quan",
  job: "model",
  tall: false,
};

var students: string[] = ["quan", "kiên", "thảo"];
var points: number[] = [1, 1, 0, 0];
var randomList: any[] = ["hihi", 1, false, true, {}];

var modelList: { name: string; job: string; tall: boolean }[] = [
  {
    name: "quan",
    job: "model",
    tall: false,
  },
  {
    name: "kiên",
    job: "model",
    tall: false,
  },
];

console.log(modelList);

let sum2 = (num1: number, num2: number, num3: number): number => {
  return num1 + num2 + num3;
};

// print result
sum2(1, 2, 3);

// example : viết một hàm nhận vào 2 tham số
// arr : 1 mảng số tự nhiên được sắp xếp tăng dần
// find : là 1 số cần tìm trong danh sách số tự nhiên tăng dần đó

// trả về true nếu find nằm trong arr
// trả về false nếu find ko nằm trong arr
function findNumber(arr: number[], find: number): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === find) {
      return true;
    } else if (arr[i] > find) {
      return false;
    }
  }
  return false;
}

const array = [1, 3, 5, 7, 9];
const numberToFind = 5;
console.log(findNumber(array, numberToFind)); // true

const numberToFind2 = 4;
console.log(findNumber(array, numberToFind2)); // false

var ex01 = (arr: number[], find: number): boolean => {
  for (let i = 0; i < arr.length; i++) {
    var middle = Math.floor((arr.length - 1) / 2);
    // START
    while (find < arr[middle] && find >= arr[0]) {
      var start = arr.slice(0, middle);
      for (let k = 0; k < start.length; k++) {
        if (start[k] === find) {
          return true;
        }
      }
    }
    // END
    while (find >= arr[middle] && find <= arr[arr.length - 1]) {
      var end = arr.slice(middle, arr.length);
      for (let l = 0; l < end.length; l++) {
        if (end[l] === find) {
          return true;
        }
      }
    }
  }
  return false;
};

let result = ex01([1, 2, 3, 4, 5], 1);
console.log("ex01 =====>", result);

// bài 1
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  throw new Error("Không có hai số nào trong mảng có tổng bằng đích.");
}

const nums1 = [2, 7, 11, 15];
const target1 = 18;
console.log(twoSum(nums1, target1)); // [0, 1]

const nums2 = [3, 2, 4];
const target2 = 5;
console.log(twoSum(nums2, target2)); // [1, 2]

const nums3 = [8, 9, 10, 13, 17, 20];
const target3 = 23;
console.log(twoSum(nums3, target3)); // [4, 5]

// bài 2
function isValid(s: string): boolean {
  // Ngăn xếp để lưu trữ các ký tự mở ngoặc đã gặp phải
  const stack: string[] = [];

  const map: { [key: string]: string } = {
    "(": ")",
    "[": "]",
    "{": "}",
  }; // Đối tượng map dùng để ánh xạ các ký tự mở ngoặc tương ứng với các ký tự đóng ngoặc

  for (let i = 0; i < s.length; i++) {
    const char = s[i]; // Lấy ký tự tại vị trí i trong chuỗi s
    if (map.hasOwnProperty(char)) {
      // Nếu ký tự là mở ngoặc, thêm nó vào ngăn xếp
      stack.push(char);
    } else {
      // Nếu ký tự là đóng ngoặc
      const top = stack.pop(); // Lấy phần tử đầu ngăn xếp
      if (char !== map[top!]) {
        // Kiểm tra xem ký tự đóng ngoặc có phù hợp với ký tự mở ngoặc không
        return false; // Nếu không phù hợp, trả về false
      }
    }
  }

  return stack.length === 0; // Trả về true nếu ngăn xếp rỗng, false nếu còn phần tử trong ngăn xếp
}

console.log(isValid("()")); // true
console.log(isValid("{]")); // false
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false

// bài 3
function isPalindrome(s: string): boolean {
  // Chuyển đổi chuỗi về dạng lowercase và loại bỏ các ký tự không chữ và không phải số
  const cleanedStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Kiểm tra tính palindrome bằng cách so sánh chuỗi ban đầu và chuỗi đảo ngược
  return cleanedStr === cleanedStr.split("").reverse().join("");
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false

// bài 4
function isAnagram(s: string, t: string): boolean {
  // Kiểm tra hai chuỗi có cùng độ dài hay không
  if (s.length !== t.length) {
    return false;
  }

  // Tạo đối tượng để đếm số lần xuất hiện của các ký tự trong chuỗi s
  const charCount: { [key: string]: number } = {};

  // Đếm số lần xuất hiện của các ký tự trong chuỗi s
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Kiểm tra các ký tự trong chuỗi t
  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    // Nếu ký tự không có trong đối tượng charCount hoặc số lần xuất hiện đã bằng 0, không phải từ hoán vị
    if (!charCount[char]) {
      return false;
    }
    // Giảm số lần xuất hiện của ký tự trong đối tượng charCount
    charCount[char]--;
  }

  return true;
}

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false

// bài 5
function maxSubArraySum(arr: number[], size: number) {
  let maxNumber = Math.pow(2, 53); // Tạo ra số lớn nhất JS có ther tạo được
  let minNumber = -maxNumber - 1; // Tạo ra số nhỏ nhất JS có thể tạo
  let numberNow = 0; // Giá trị hiện tại

  for (let i = 0; i < size; i++) {
    numberNow = numberNow + arr[i];
    // Lần 1:  numberNow = -2 => minNumber=-2 => numberNow=0
    // Lần 2:  numberNow = -3 => minNumber=-3 => numberNow=0
    // Lần 3:  numberNow = 4 => minNumber= 4 => [4]
    // Lần 4:  numberNow = 3 => minNumber= 3 => [3]
    // Lần 5:  numberNow = 1 => minNumber= 1 => [1]
    // Lần 6:  numberNow = 2 => minNumber= 2 => [2]
    // Lần 7:  numberNow = 7 => minNumber= 7 => [7] => Dừng

    if (minNumber < numberNow) {
      minNumber = numberNow;
    }

    if (numberNow < 0) {
      numberNow = 0;
    }
  }
  return minNumber;
}

// Driver code
let arr = [-2, -3, 4, -1, -2, 1, 5, -3, -4];
console.log(maxSubArraySum(arr, arr.length));
