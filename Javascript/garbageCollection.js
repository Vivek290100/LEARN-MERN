let obj = { name: 'Eve' };
obj = null; // Now the object can be garbage collected since there are no references to it
// After this line, the memory occupied by the object may be cleaned up by the garbage collector
