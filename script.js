const twiceAsOld = (fatherAge, sonAge) => {
  return Math.abs(fatherAge - 2 * sonAge);
};

// Test cases
console.log(twiceAsOld(36, 7)); // Output: 22
console.log(twiceAsOld(45, 20)); // Output: 5
console.log(twiceAsOld(55, 30)); // Output: 5
console.log(twiceAsOld(30, 15)); // Output: 0
console.log(twiceAsOld(20, 5)); // Output: 10
console.log(twiceAsOld(60, 35)); // Output: 10
