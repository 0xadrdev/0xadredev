import {nextNodeAnimation, newNodeAnimation, setNodeAnimation} from './animations.js'
export {LinkedList, Node};

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {

  constructor() {
    this.first = null;
    this.size = 0;
  }

  add(newNode) {
    let aux = this.first; 
    if (aux == null) {
      this.first = newNode;
      this.size++;
      newNodeAnimation(this.first);
      return true; 
    }

    let i = 0;
    while (aux.next != null) {
      setTimeout(nextNodeAnimation, 1660 * i, aux);
      aux = aux.next; 
      i++;
    }

    setTimeout(() => {
      aux.next = newNode;
      nextNodeAnimation(aux);
      setTimeout(() => newNodeAnimation(newNode), 1650); // 800 + 850 = 1650
    }, (this.length() - 1) * 1660);
    
    this.size++
    return true;
  }


  set(index, data) {
    setNodeAnimation(this.first, data);
    return;
    if (this.size == 0 || index < 0 || index >= this.size) return false;
    let previous = this.first;
    let current = previous.next;
    if (index === 0) {
      this.first.data = 0;
      return true;
    }
    let pos = 1;
    while (current != null) {
      if (pos === index) {
        current.data = data;
        return true;
      }
      pos++;
      previous = current; 
      current = current.next;
    }
    return false;
  }

  remove(data) {
    if (this.size == 0) return false;
    let previous = this.first;
    let current = previous.next;
    if (previous.data === data) {
      this.first = this.first.next;
      this.size--;
      return true;
    }
    while (current != null) {
      if (current.data === data) {
        previous.next = current.next;
        this.size--;
        return true;
      }
      previous = current; 
      current = current.next;
    }
    return false;
  }

  removeAtIndex(index) {
    if (this.size == 0 || index < 0 || index >= this.size) return false;
    let previous = this.first; 
    let current = previous.next;
    if (index == 0) {
      this.first = this.first.next;
      this.size--;
      return true;
    }
    let pos = 1; 
    while (current != null) {
      if(pos == index) {
        previous.next = current.next;
        this.size--;
        return true;
      }
      pos++;
      previous = current;
      current = current.next;
    }
    return false;
  }

  clear() {
    this.size = 0;
    this.first = null;
  }

  length() {
   return this.size;
  }

  toString() {
    if (this.size == 0) return '[]';
    let aux = this.first; 
    let s = "[";
    while (aux.next != null) {
      s += `${aux.data}, `;
      aux = aux.next;
    }
    s += `${aux.data}]`; 
    return s;
  }
}



// let lista = new LinkedList();

// console.log(lista.toString())

// let nuevoNodo = new Node(5);
// lista.add(nuevoNodo);

// nuevoNodo = new Node(3);
// lista.add(nuevoNodo);

// nuevoNodo = new Node(2);
// lista.add(nuevoNodo);

// nuevoNodo = new Node(1);
// lista.add(nuevoNodo);

// nuevoNodo = new Node(10);
// lista.add(nuevoNodo);

// nuevoNodo = new Node(20);
// lista.add(nuevoNodo);

// nuevoNodo = new Node(30);
// lista.add(nuevoNodo);

// console.log(lista.toString());

// console.log(lista.removeAtIndex(0))
// console.log(lista.length())

// console.log(lista.toString());


