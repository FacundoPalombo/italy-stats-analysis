function addZeros(number, numZeros) {
  // convert number to string
  let numberStr = String(number);

  // calculate how much zeroes should be aggregated
  let zerosToAdd = Math.max(0, numZeros - numberStr.length);

  // create a string with zeroes to add
  let zeros = "0".repeat(zerosToAdd);

  // concat strings
  let result = zeros + numberStr;

  return result;
}

module.exports = { addZeros };
