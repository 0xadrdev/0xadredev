import {nextNodeAnimation, newNodeAnimation, setNodeAnimation, insertNodeAnimation, removeNodeAnimation} from './animations.js'
import {getAnimationsDurations} from './settings.js' 
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

  async add(newNode) {
    let aux = this.first; 

    if (aux == null) {
      this.first = newNode;
      await newNodeAnimation(newNode);
      this.size++;
      return true;
    }

    while (aux.next != null) {
      await nextNodeAnimation(aux);
      aux = aux.next;
    }

    aux.next = newNode;
    await nextNodeAnimation(aux);
    await newNodeAnimation(newNode);
    this.size++;
    return true;
  }

  async insert(index, newNode) {
    let pos = 0;
    let previous = null; 
    let current = this.first;

    while (current != null) {
      if (pos == index) {
        if (index == 0) {
          newNode.next = this.first; 
          this.first = newNode;
        } else {
          previous.next = newNode;
          newNode.next = current;
        }
        await insertNodeAnimation(current, newNode);
        this.size++;
        return true;
      }
      await nextNodeAnimation(current);
      previous = current; 
      current = current.next;
      pos++;
    }
    return false;
  }
  
  async set(index, data) {
    let pos = 0;
    let current = this.first;

    while(current != null) {
      if (pos == index) {
        await setNodeAnimation(current, data);
        return true;
      }
      await nextNodeAnimation(current);
      current = current.next;
      pos++;
    }

    return false;
  }

  async removeAtIndex(index) {
    let pos = 0;
    let previous = null; 
    let current = this.first;

    while (current != null) {
      if (pos == index) {
        if (pos == 0) {
          this.first = this.first.next;
        } else {
          previous.next = current.next;
        }
        this.size--;
        await removeNodeAnimation(current);
        return true;
      }

      await nextNodeAnimation(current);
      previous = current;
      current = current.next;
      pos++;
    }

    return false;
  }

  async remove(data) {
    let previous = null;
    let current = this.first;

    while (current != null) {
      if (this.getData(current) == data) {
        if (current == this.first) {
          this.first = current.next;
        } else {
          previous.next = current.next; 
        }
        await removeNodeAnimation(current);
        current = current.next;
        this.size--;
      } else {
        await nextNodeAnimation(current);
        previous = current; 
        current = current.next;
      }
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

  getData(node) {
    let nodeData = node.querySelector(".data");
    return nodeData.innerText;
  }

  toConsole() {
    let aux = this.first; 
    while (aux != null) {
      aux = aux.next;
    }
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