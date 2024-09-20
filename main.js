class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null){
        this.head = head;
    }
    append(value) {
        let newNode = new Node(value);
        let current = this.head;
        if (this.head == null) return this.head = newNode;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }
    prepend(value) {
        let newNode = new Node(value);
        let head = list.head;
        newNode.next = head;
        list.head = newNode; 
    }
    size(){
        let counter = 1;
        let current = this.head;
        if(!current) return console.log("There is no list.");
        while (current.next){
            counter++;
            current = current.next;
        }
        return console.log("List Size: " + counter);
    }
    header() {
        let headNode = this.head
        return "Head:" + console.log("Head: " + headNode.data);
    }
    tail() {
        let current = this.head;
        if (current.next == null) return current.data;
        while (current.next) {
            current = current.next;
        }
        return console.log("Tail: " + current.data);
    }
    at(index) {
        let counter = 0;
        let current = this.head;
        while (counter != index) {
            current = current.next;
            counter ++;
        }
        return console.log(`Node at index ${index}: ` + current.data);
    }
    pop() {
        let current = this.head;
        while (current.next.next) {
            current = current.next
        }
        return current.next = null;
    }
    contains(value) {
        let current = this.head;
        while (current.data != value && current.next != null) {
           current = current.next;
        } 
        if (current.data === value){
        console.log(true)
        } else return console.log(false);
    }
    find(value) {
        let current = this.head;
        let counter = 0;
        while(current.data != value && current.next) {
            current = current.next;
            counter++;
        }
        if(current.data == value) {
            return console.log(counter)
        } else return console.log(null);
    }
    toString() {
        let current = this.head;
        let string = `( ${current.data} )` + ` -> `;
        while (current.next) {
            string += `( ${current.next.data} )` + ` -> `;
            current = current.next;
        }
        string += `${current.next}`;
        return console.log(string);
    }
    insertAt(value, index){
        if(index < 0) return console.log("Must be a positive number");
        let newNode = new Node(value);
        let current = this.head;
        if(index === 0) return this.prepend(value);
        if(index > 0) {
            for(let i = 0; i < index-1; i++){
            current = current.next;
            }
        newNode.next = current.next;
        current.next = newNode;
        }
    }
    removeAt(index) {
        let current = this.head;
        if(index < 0) return console.log("Must be a positive number");
        if(index === 0) return this.head = this.head.next;
        if(index > 0){
            for(let i = 0; i < index-1; i++){
                current = current.next;
            }
            current.next = current.next.next;
        }
    }
    remove(value) {
        if (this.head.data === value) return this.removeAt(0);
        let current = this.head;
        while(current.next) {
            if (current.next.data === value) {
                return current.next = current.next.next;
            } else {
                current = current.next
            }
        }
    }
}