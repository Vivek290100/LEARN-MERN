class HashTable{
  constructor(size){
    this.table = new Array(size)
  }

  hash(key){
    let total = 0
    for (let i = 0; i < key.length; i++) {
      total+=key.charCodeAt(i)
    }
    return total%this.table.length
  }

  set(key,value){
    const index = this.hash(key)
    this.table[index] = value
  }

  get(key){
    const index = this.hash(key)
    return this.table[index]
  }

  remove(key){
    const index = this.hash(index)
    this.table[index = undefined]
  }

  display(){
    for(let i=0;i<this.table.length;i++){
      if(this.table){
        console.log(i,this.table[i]);
      }
    }
  }

  removeDups(arr){

  }
}

const tble = new HashTable(10)
tble.set("vivek12",12)
tble.set("vi12v1ek",12)
tble.set("v12i11vek",12)
tble.display()