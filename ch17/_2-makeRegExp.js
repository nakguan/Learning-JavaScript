const input = "As I was going to Saint Ives";
const re = /\w{3,}/gi;

const a = input.match(re);
console.log(a);
input.search(re);

console.log(re.exec(input));
console.log(re.exec(input));
re.exec(input);
re.exec(input);
re.exec(input);
re.test(input);

input.match(/\w{3,}/gi);
input.search(/\w{3,}/gi);
