// BEGIN (write your solution here)
const uniq = (array) => {
  return array.reduce((acc, value, index, arr) => {
    if (!acc.includes(value)) {
      acc.push(value);
    }
    return acc;
  }, []);
};
// END

console.log(uniq([1, 2, 3, 3, 5, 5, 6]));
