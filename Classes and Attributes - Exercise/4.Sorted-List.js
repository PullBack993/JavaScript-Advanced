class List{
    constructor(){
        this.myList = []
        this.size = this.myList.length;
    }

    add(element){
        if (element !== undefined){
            this.myList.push(element) 
            this.myList.sort((a, b) => a - b)
            this.size = this.myList.length
        }
           
    }
    remove(index){
        if(this.myList[index] !== undefined){
            this.myList.splice(index, 1);
            this.myList.sort((a, b) => a - b)
            this.size = this.myList.length
        }
    }

    get(index){
        if (this.myList[index] !== undefined){
            this.myList.sort((a, b) => a - b)
            this.size = this.myList.length
            return this.myList[index]

        }
     
    }

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));

