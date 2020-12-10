 // 9.

function digitize(n) {
  const arrayOfDigits = Array.from(String(n), Number).reverse();
  return arrayOfDigits;
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