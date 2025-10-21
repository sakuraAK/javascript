let m1 = new Map();

//adding values

m1.set("a", 1);

console.log(`Size of map: ${m1.size}`);

let key = "a";
console.log(`Value for ${key}: ${m1.get(key)}`);

key = "b";
console.log(`Value for ${key}: ${m1.get(key)}`);

m1.set("a", 2);
key = "a";
console.log(`Value for ${key}: ${m1.get(key)}`);

m1.delete(key);
console.log(`Size of map: ${m1.size}`);


m1.set("a", 2);
m1.set("b", 3);
m1.set("c", 4);
console.log(`Size of map: ${m1.size}`);

//accessing key, values, and key value pairs
console.log(`Keys of map: ${m1.keys()}`);
console.log(`Keys of map: ${m1.values()}`);
console.log(`Keys of map: ${m1.entries()}`);

let m = new Map();

m.set(1, "Number");
m.set([1, 2, 3], "Array");
let arKey = [];
m.set(arKey, "Empty array");
m.set(() => {}, "Function");
m.set(new Date(), "Date");

console.log(m);

console.log(m.get(arKey));



