const beer99 =
  "99 bottles of beer on the wall " +
  "take 1 down and apss it around --" +
  "98 bottles of beer on the wall";

// 숫자만 찾음
const m1 = beer99.match(/[0123456789]/g);
const m2 = beer99.match(/[0-9]/g);

console.log(m1);
console.log(m2);

// 문자열만 찾음
const match = beer99.match(/[\-0-9a-z.]/gi);
console.log(match);

// ---> 다른 표현
const m3 = beer99.match(/[\w\d]/gi);
console.log(m3);

// 문자열 제외하고 공백만 찾음
const matchEx = beer99.match(/[^\-0-9a-z.]/);
console.log(matchEx);
