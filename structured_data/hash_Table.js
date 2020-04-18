
class HashTable{
    constructor(size=53){
        this.keyMap = new Array(size)
    }
    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
          let char = key[i];
          let value = char.charCodeAt(0) - 96
          total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total
    }
    set(key,value){
        let index = this._hash(key);
        if(!this.keyMap[index]){
          this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
      }
    get(key){
        let index = this._hash(key);
        if(this.keyMap[index]){
          for(let i = 0; i < this.keyMap[index].length; i++){
            if(this.keyMap[index][i][0] === key) {
              return this.keyMap[index][i][1]
            }
          }
        }
        return undefined;
    }
    values(){
        let valuesArray = []
        for (let index = 0; index < this.keyMap.length; index++) {
            if(this.keyMap[index]){
                for(let i = 0; i < this.keyMap[index].length; i++){
                    if(!valuesArray.includes(this.keyMap[index][i][1])){
                        valuesArray.push(this.keyMap[index][i][1])
                    }
                }
            }
            
        }
        return valuesArray
    }
    keys(){
        let keysArray = []
        for (let index = 0; index < this.keyMap.length; index++) {
            if(this.keyMap[index]){
                for(let i = 0; i < this.keyMap[index].length; i++){
                    if(!keysArray.includes(this.keyMap[index][i][0])){
                        keysArray.push(this.keyMap[index][i][0])
                    }
                }
            }
            
        }
        return keysArray
    }
}

let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")

console.log(ht.keys())
console.log(ht.values())


//let hashTable = new HashTable()

//hashTable.set("")

// console.log(hashTable._hash("k"))
// console.log(hashTable._hash("bb"))
// console.log(hashTable._hash("ccc"))

// hashTable.set("k","VALUE_FIRST")
// hashTable.set("bb","VALUE_SECOND")
// hashTable.set("ccc","VALUE_THREE")
// console.log(hashTable.keyMap)
