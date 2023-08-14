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

  add(newNode) {
    let aux = this.first; 
    let durations = getAnimationsDurations();
    let animationDuration = durations.nodeAnimationDuration + durations.pointerAnimationDuration + 10;
    let add = () => {
      if (this.first == null) {
        this.first = newNode;
        newNodeAnimation(newNode);
        return true;
      }
      nextNodeAnimation(aux);
      if (aux.next == null) {
        aux.next = newNode;
        setTimeout(newNodeAnimation, animationDuration, newNode);
        return true;
      }
      setTimeout(add, animationDuration);
      aux = aux.next; 
    }
    setTimeout(add, 0);
    this.size++;
  }

  insert(index, newNode) {
    let previous = null; 
    let current = this.first;
    let durations = getAnimationsDurations();
    let animationDuration = durations.nodeAnimationDuration + durations.pointerAnimationDuration;
    let pos = 0;
    let insert = () => {
      if (current == null) return;
      if (index == pos) {
        if (index == 0) {
          newNode.next = this.first; 
          this.first = newNode;
        } else {
          previous.next = newNode;
          newNode.next = current;
        }
        insertNodeAnimation(current, newNode);
        this.size++;
        return true;
      }
      pos++;
      nextNodeAnimation(current);
      previous = current; 
      current = current.next; 
      setTimeout(insert, animationDuration);
    }
    setTimeout(insert, 0);
    return false;
  }

  set(index, data) {
    let current = this.first;
    let durations = getAnimationsDurations();
    let animationDuration = durations.nodeAnimationDuration + durations.pointerAnimationDuration;
    let pos = 0;
    let set = () => {
      if (current == null) return;
      if (pos == index) return setNodeAnimation(current, data);
      pos++;
      nextNodeAnimation(current);
      current = current.next;
      setTimeout(set, animationDuration);
    }
    setTimeout(set, 0);
    return false;
  }

  removeAtIndex(index) {
    let previous = null; 
    let current = this.first;
    let durations = getAnimationsDurations();
    let animationDuration = 0;
    let pos = 0;
    let remove = () => {
      if (current == null) return;
      if (pos == index) {
        if (pos == 0) {
          this.first = this.first.next;
        } else {
          previous.next = current.next;
        }
        this.size--;
        removeNodeAnimation(current);
        return true;
      }
      pos++;
      nextNodeAnimation(current);
      previous = current;
      current = current.next;
      animationDuration = durations.nodeAnimationDuration + durations.pointerAnimationDuration;
      setTimeout(remove, animationDuration);
    }
    setTimeout(remove, animationDuration);
    return false;
  }

  remove(data) {
    let previous = null;
    let current = this.first;
    let durations = getAnimationsDurations();
    let animationDuration = 0;
    let remove = () => {
      if (current == null) return;
      if (this.getData(current) == data) {
        if (current == this.first) {
          this.first = current.next;
        } else {
          previous.next = current.next; 
        }
        removeNodeAnimation(current);
        animationDuration = durations.pointerAnimationDuration + durations.deleteAnimationDuration;
        current = current.next;
        this.size--;
      } else {
        nextNodeAnimation(current);
        animationDuration = durations.pointerAnimationDuration + durations.nodeAnimationDuration;
        previous = current; 
        current = current.next;
      }
      setTimeout(remove, animationDuration);
    }
    setTimeout(remove, animationDuration);
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