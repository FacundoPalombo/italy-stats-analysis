function ensureThreeZeros(number) {
  const num = Number(number);
  if (!["string", "number"].includes(typeof num))
    throw new Error(
      `You should provide a number or a string instead of ${typeof num}`
    );
  if (num < 1 || num > 999) throw new Error("You are out of range");
  if (!Number.isInteger(Number(num)))
    throw new Error("You should provide a integer number as parameter");
  if (number.length > 3)
    throw new Error("Your number length should be lesser than 3");
  if (number.length === 3) {
    return;
  }
  if (number.length === 2) {
    return `0${num}`;
  }
  if (number.length === 1) {
    return `00${num}`;
  }
  if (number.length === 0) {
    return "000";
  }
}

module.exports = { ensureThreeZeros };
