class HashTable{
    constructor(size=10){
        this.Table = new Array(size)
    }

    hash(key){
        let hash = 0
        for(let i=0;i<key.length;i++){
            hash +=(key.charCodeAt(i))
        }
        return hash % this.Table.length
    }

    set(key, value){
        const index = this.hash(key)      
        this.Table[index] = value
    }

    get(key){
        const index = this.hash(key)
        return this.Table[index]
    }

    remove(key){
        let index = this.hash(key)
        this.Table[index] = undefined
    }

    removeduplicates(array){    
        const result = []
        const newHashTable = new Set()

        for(let i=0;i<array.length;i++){
            if(!newHashTable.has(array[i])){
                result.push(array[i])
                newHashTable.add(array[i])
            }
        }
        return result
        
    }

    display(){
        for(let i=0;i<this.Table.length;i++){
            if(this.Table[i]){
                console.log(i,this.Table[i]);
                
            }
        }
    }
}


const hashtable = new HashTable()

hashtable.set("vivek1", 101) 
hashtable.remove("apple")
hashtable.set("vivek2", 102)

hashtable.display()

const result = hashtable.removeduplicates([1,3,3,3,5,7,8,8,8])
console.log(result);











