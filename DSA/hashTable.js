// class HashTable{
//     constructor(size=10){
//         this.Table = new Array(size)
//     }

//     hash(key){
//         let hash = 0
//         for(let i=0;i<key.length;i++){
//             hash +=(key.charCodeAt(i))
//         }
//         return hash % this.Table.length
//     }

//     set(key, value){
//         const index = this.hash(key)      
//         this.Table[index] = value
//     }

//     get(key){
//         const index = this.hash(key)
//         return this.Table[index]
//     }

//     remove(key){
//         let index = this.hash(key)
//         this.Table[index] = undefined
//     }

//     removeduplicates(array){    
//         const result = []
//         const newHashTable = new Set()

//         for(let i=0;i<array.length;i++){
//             if(!newHashTable.has(array[i])){
//                 result.push(array[i])
//                 newHashTable.add(array[i])
//             }
//         }
//         return result
        
//     }

//     display(){
//         for(let i=0;i<this.Table.length;i++){
//             if(this.Table[i]){
//                 console.log(i,this.Table[i]);
                
//             }
//         }
//     }
// }


// const hashtable = new HashTable()

// hashtable.set("vivek1", 101) 
// hashtable.remove("apple")
// hashtable.set("vivek2", 102)

// hashtable.display()

// const result = hashtable.removeduplicates([1,3,3,3,5,7,8,8,8])
// console.log(result);







//collision handling
class HashTable {
    constructor(size) {
        this.table = new Array(size);
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.table.length;
    }


    set(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        // Always add the new key-value pair to the array
        this.table[index].push([key, value]);
    }

    get(key) {
        const index = this.hash(key);
        if (this.table[index]) {
            const pair = this.table[index].find(item => item[0] === key);
            if (pair) {
                return pair[1];
            }
        }
        return undefined;
    }

    remove(key){
        const index = this.hash(key)
        this.table[index] = undefined
    }

    removeDuplicates(array) {
        let result = [];
        for (let i = 0; i < array.length; i++) {
            if (!result.includes(array[i])) {
                result.push(array[i]);
            }
        }
        return result;
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(this.table[i]);
            }
        }
    }
}

const table = new HashTable(10);

table.set("vivek", 12);
table.set("varun345", 13);
table.set("aswin", 14);
table.set("vivek", 99);  
table.set("vivek", 919);  
table.set("vivek", 929);  
table.set("vivek", 939);  

table.remove("varun345");
// console.log(table.removeDuplicates([1, 1, 1, 2, 3, 5, 6, 6, 7, 8, 6, 5, 4, 3]));

table.display();








