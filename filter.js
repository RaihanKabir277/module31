
// filter selects elements based on a condition and returns an array with the elements that fullfilled the condition

const numbers = [1, 5, 6, 4, 15];

const players = [75, 65, ,67, 72, 55, 59];
// const selected = players.filter(p => p > 70);
// const selected = players.filter(p => p > 80);
// const selected = players.filter(p => p > 50);
const selected = players.filter(p => p % 2 === 1);
// console.log(selected);

const friends = ['tom', 'john', 'michel', 'olliver','tim', 'joshna'];

const oldFriends = friends.filter(friend => friend.length > 4);
console.log(oldFriends);