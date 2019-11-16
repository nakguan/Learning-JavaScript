const cards = [];
for(let suit of ['H', 'C', 'D', 'S'])
    for(let value=1; value<=13;value++)
        cards.push({suit, value});


const v2 = cards.filter(c => c.value===2);
const sD = cards.filter(c=>c.suit === 'D');
const v10 = cards.filter(c => c.value === 10);

console.log(v2.length, v2);
console.log(sD.length, sD);
console.log(v10.length, v10);
