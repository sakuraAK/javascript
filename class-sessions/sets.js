let s = new Set();

s.add(1);
console.log(`The size of set: ${s.size}`);
s.add(2);
console.log(`The size of set: ${s.size}`);


s.add(1);
console.log(`The size of set: ${s.size}`);

let val = 1;
console.log(`Set has value ${val}: ${s.has(val)}`);

s.delete(1);
console.log(`The size of set: ${s.size}`);



