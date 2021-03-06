 // 9.

function digitize(n) {
  const arr = Array.from(String(n), Number).reverse();
  return arr;
  }

  // 10.

  function multipleOfIndex(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++){
      if (array[i] % i === 0){
        newArr.push(array[i]);
      }
    }
    return newArr;
  }

  // 11.
  function sumMix(x){
    let sum = 0;
    for (let i = 0; i < x.length; i++){
      sum += parseFloat(x[i]);
    }
    return sum;
  }

  // 12.
  function divisibleBy(num, div){
    let arr = [];
    for (let i = 0; i < num.length; i++){
      if(num[i] % div === 0){
        arr.push(num[i]);
      }
    }
    return arr;
  }

  // 13. 
  function noSpace(x){
    return x.replace(/ /g, '');
    }

  // 14. 
  const noTrailingZeros = n => parseInt(n.toString().replace(/0+$/g, '') + 0)/10;

  // 15. 
  function sumStr(a,b) {
    a = Number(a);
    b = Number(b);
    let sum = a + b;
    return sum.toString();
  }

  // 16. Turn full name into initials
  let getInitials = function (string) {
    let names = string.split(' ');
    let initials = names[0].substring(0, 1).toUpperCase();
    
    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
};

// 17.
function isToday(date) {
  const today = new Date();
      return date.getDate() === today.getDate() &&
          date.getMonth() === today.getMonth() &&
          date.getFullYear() === today.getFullYear();
  };

const date = new Date(2020, 11, 13);
console.log(isToday(date)); // true

  // 18.
  function isOpposite(s1,s2){
    if(s1 === s2 || s1.toLowerCase() !== s2.toLowerCase()) return false;
    for(var i = 0; i < s1.length; i++) {
      if(s1.charAt(i) === s2.charAt(i)) return false;
    }
    return true;
  }

  // 19
function rndCode(){
    var p1 = 'ABCDEFGHIJKLM';
    var p2 = '0123456789';
    var p3 = '~!@#$%^&*';
    return [p1,p1,p2,p2,p2,p2,p3,p3].map((v) => v[~~(Math.random() * v.length)]).join('');
}

// 20.
function rentalCarCost(d) {
  if(d<3) return d * 40;
  if(7>d && d>=3) return (d*40 -20);
  if(d>=7) return (d*40 -50);
}

// 21.
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(sonYearsOld * 2 - dadYearsOld);
}

// 22. 
function roundIt(n){
  var [a, b] = n.toString().split('.');
  return a.length > b.length ? Math.floor(n) : a.length === b.length ? Math.round(n) : Math.ceil(n);
}

// 23. 
function updateLight(current) {
  let lights = ['green', 'yellow', 'red'];
  if (current === 'green') return 'yellow';
  else if (current === "yellow") return 'red';
  return 'green';
  }

  // 24.
  function find_average(arr) {
    let sum = 0;
    let average;
    for (let i = 0; i < arr.length; i++){
      sum += arr[i]; 
      average = sum/arr.length;
    }
    return average;
  }

  // 25.
  function replace(s){
    return s.replace(/[aeiou]/gi, "!")
   }

   // 26.
   function isDigit(s) {
    if(typeof(s) !== 'string') return false;
    return !isNaN(s) && !isNaN(parseFloat(s));
    }

  // 27.
  function splitAndMerge(s, sep){
    let words = s.split(' ');
    let arr = [];
    var res = []
    for(let i = 0; i < words.length; i++){
     arr.push(words[i].split('').join(sep));
    }
    res = arr.join(' ');
    return res;
    
  }

  // 28 v1.
  function removeDuplicates(array) {
    return array.filter((a, b) => array.indexOf(a) === b)
  };

  // 28 v2. 
  function distinct(a) {
    return [...new Set(a)];
  }
  
  // 28 v3.

  function distinct(a) {
    return Array.from(new Set(a));
  }
  
  // 28 v4. 
  
  function distinct(arr) {
  let res = []; 
  for(let i = 0; i < arr.length; i++){
    if(!res.includes(arr[i])){
      res.push(arr[i]);
    }
  }
  return res;
  }
  
  // 28 v5. Using hash-map

  function removeDuplicates(array) {
    const result = [];
    const map = {};
  
    for (let i = 0; i < array.length; i++) {
      if (map[array[i]]) {
        continue;
      } else {
        result.push(array[i]);
        map[array[i]] = true;
      }
    }
    return result;
  }

// 29 (my solution)

function mergeArrays(arr1, arr2) {
  let merged = arr1.concat(arr2);
  let sorted = merged.sort((a, b) => {
    return a - b;
  });
 let res = []; 
  for(let i = 0; i < sorted.length; i++){
    if(!res.includes(sorted[i])){
      res.push(sorted[i]);
    }
  }
  return res;
}

// 29 v2.
function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
}

// 30.
//return price without vat
 function excludingVatPrice(price){
  const prodPrice = price/(1+(15/100));
 return parseFloat(prodPrice.toFixed(2));
}

// 31. 
function datingRange(age){
  return `${min(age)}-${max(age)}`;
  
  function min(age) {
    return Math.floor(age > 14 ? (age / 2) + 7 : age - 0.10 * age);
  }
  
  function max(age) {
    return Math.floor(age > 14 ? (age - 7) * 2 : age + 0.10 * age);
  }
}

// 32.
function charFreq(message) {
  var obj = {};
  for (var i=0; i<message.length; i++) {
    obj[message[i]] = ++obj[message[i]] || 1;
  }
  return obj;
}

// 33.
function getStrings(city) {
  city = city.toLowerCase();
  let obj = {};
  let str = '';

  for (let elem of city) {
      if (!(elem in obj)) {
          obj[elem] = '*';
      } else {
          obj[elem] += '*';
      }
  }

  for (let key in obj) {
      if (key !== ' ') {
          str += key + ':' + obj[key] + ',';
      }
  }

  return str.substring(0, str.length - 1);
}

// 34.
function getCount(str) {
  let v = str.match(/[aeiou]/gi);
  return v === null ? 0 : v.length;
}

// 35.
function solve(a,b){
  const arr = [];
   
   for (let i = 0; i < a.length; i ++){
       if (!b.includes(a[i])){
         arr.push(a[i]);
       }
   }
       
   for (let i = 0; i < b.length; i ++){
       if (!a.includes(b[i])){
         arr.push(b[i]);
       }
   }
   
   return arr.join('');
   
 };

 36. 
 

