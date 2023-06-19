"use strict";
console.log("hello world!");
var fName = "Quan";
console.log(fName);
var age = 18;
var single = true;
var funny = false;
var wife = "";
var kids = null;
var jobs = "Nhảy thoát y";
jobs = ["Nhảy thoát y ", "Công an"];
wife = "quan's wife";
console.log(fName, age, single, funny);
console.log(`${fName} is ${age} years old . ${fName} is single because `);
var sum = function (num1, num2) {
    console.log(num1 + num2);
};
sum(1, 2);
var person = {
    name: "quan",
    job: "model",
    tall: false,
};
var students = ["quan", "kiên", "thảo"];
var points = [1, 1, 0, 0];
var randomList = ["hihi", 1, false, true, {}];
var modelList = [
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
let sum2 = (num1, num2, num3) => {
    return num1 + num2 + num3;
};
sum2(1, 2, 3);
function findNumber(arr, find) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === find) {
            return true;
        }
        else if (arr[i] > find) {
            return false;
        }
    }
    return false;
}
const array = [1, 3, 5, 7, 9];
const numberToFind = 5;
console.log(findNumber(array, numberToFind));
const numberToFind2 = 4;
console.log(findNumber(array, numberToFind2));
var ex01 = (arr, find) => {
    for (let i = 0; i < arr.length; i++) {
        var middle = Math.floor((arr.length - 1) / 2);
        while (find < arr[middle] && find >= arr[0]) {
            var start = arr.slice(0, middle);
            for (let k = 0; k < start.length; k++) {
                if (start[k] === find) {
                    return true;
                }
            }
        }
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
function twoSum(nums, target) {
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
console.log(twoSum(nums1, target1));
const nums2 = [3, 2, 4];
const target2 = 5;
console.log(twoSum(nums2, target2));
const nums3 = [8, 9, 10, 13, 17, 20];
const target3 = 23;
console.log(twoSum(nums3, target3));
function isValid(s) {
    const stack = [];
    const map = {
        "(": ")",
        "[": "]",
        "{": "}",
    };
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (map.hasOwnProperty(char)) {
            stack.push(char);
        }
        else {
            const top = stack.pop();
            if (char !== map[top]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
console.log(isValid("()"));
console.log(isValid("{]"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
function isPalindrome(s) {
    const cleanedStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanedStr === cleanedStr.split("").reverse().join("");
}
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const charCount = {};
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }
    return true;
}
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
function maxSubArraySum(arr, size) {
    let maxNumber = Math.pow(2, 53);
    let minNumber = -maxNumber - 1;
    let numberNow = 0;
    for (let i = 0; i < size; i++) {
        numberNow = numberNow + arr[i];
        if (minNumber < numberNow) {
            minNumber = numberNow;
        }
        if (numberNow < 0) {
            numberNow = 0;
        }
    }
    return minNumber;
}
let arr = [-2, -3, 4, -1, -2, 1, 5, -3, -4];
console.log(maxSubArraySum(arr, arr.length));
