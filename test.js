function check(value, predicate) {
  if (predicate(value)) {
    return true;
  }
  return false;
}

const predicate = value => value >= 200 && value < 300;
const predicate2 = value => value === 200 || value === 201;

console.log(check(500, predicate));
console.log(check(200, predicate2));
console.log(check(204, predicate));
console.log(check(100, predicate));
