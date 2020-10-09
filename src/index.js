module.exports = function toReadable(number) {
  let stringNum = number.toString()
  let readable = ''

  let units = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: 'nine'
  }

  let tens = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  }

  for (let i = 0; i <= stringNum.length - 1; i++) {
    if (stringNum.length === 3) {
      readable = `${readable}${units[stringNum[0]]} hundred`;
      console.log("console " + readable);
      if (+stringNum[1]) {
        stringNum = stringNum.slice(1);
      } else stringNum = stringNum.slice(2);
    }

    if (stringNum.length === 2) {
      if (tens.hasOwnProperty(stringNum)) {
        readable = `${readable} ${tens[stringNum]}`;
        stringNum = "";
      } else {
        let index = `${stringNum[0]}0`;
        readable = `${readable} ${tens[index]}`;
        stringNum = stringNum.slice(-1);
      }
    }

    if (stringNum.length === 1) {
      if (+stringNum === 0 && number.toString().length === 1) {
        readable = `${units[stringNum]}`;
      } else if (+stringNum !== 0) {
        readable = `${readable} ${units[stringNum]}`;
      } else stringNum = "";
    }
  }

  return readable.trim()

  

}
