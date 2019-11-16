const u1 = {name:'Cynthia'};
const u2 = {name: 'Jackson'};
const u3 = {name: 'Olive'};
const u4 = {name: 'James'};

const userRoles = new Map();
userRoles.set(u1, 'User');
userRoles.set(u2, 'User');
userRoles.set(u3, 'Admin');

console.log(userRoles);

for(let u of userRoles.keys())
    console.log(u.name);

for(let r of userRoles.values())
    console.log(r);

for(let ur of userRoles.entries())
    console.log(`${ur[0].name}:${ur[1]}`);

for(let [u, r] of userRoles.entries())
    console.log(`${u.name}:${r}`);

for(let [u,r] of userRoles)
    console.log(`${u.name}:${r}`);