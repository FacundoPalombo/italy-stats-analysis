function ensureThreeZeros(number) {
  const num = number + "";
  if (num.length > 3)
    throw new Error("Your number length should be lesser than 3");
  if (num.length === 3) {
    return;
  }
  if (num.length === 2) {
    return `0${num}`;
  }
  if (num.length === 1) {
    return `00${num}`;
  }
  if (num.length === 0) {
    return "000";
  }
}
module.exports = { ensureThreeZeros };
