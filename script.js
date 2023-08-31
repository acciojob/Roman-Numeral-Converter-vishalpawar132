function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  let roman = '';
  let i = 0;

  while (num > 0) {
    if (num >= obj[i][1]) {
      roman += obj[i][0];
      num -= obj[i][1];
    } else if (i % 2 === 0 && i < 6 && num >= obj[i + 2][1] - obj[i][1]) {
      roman += obj[i + 2][0] + obj[i][0];
      num -= obj[i + 2][1] - obj[i][1];
    } else if (i % 2 === 1 && i < 6 && num >= obj[i + 1][1] - obj[i][1]) {
      roman += obj[i + 1][0] + obj[i][0];
      num -= obj[i + 1][1] - obj[i][1];
    } else {
      i++;
    }
  }

  return roman;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
