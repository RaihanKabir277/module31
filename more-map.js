

const numbers = [12, 10, 8, 15, 7];

const doubled = numbers.map(num => num *2);
// console.log(doubled);

const fiveBonus = numbers.map(num => num + 5);
// console.log(fiveBonus);

const friends = ['tom', 'john', 'michel', 'olliver'];
const lengths = friends.map(frnd => frnd.length);
// console.log(lengths);
const firstletter = friends.map(friend => friend[0]);
console.log(firstletter);
