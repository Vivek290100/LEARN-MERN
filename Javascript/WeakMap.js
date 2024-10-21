// If obj is no longer referenced, it can be garbage collected.
const weakMap = new WeakMap();
const obj = {};

weakMap.set(obj, 'This is an object');
console.log(weakMap.get(obj));

