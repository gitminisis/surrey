import axios from "axios";
class Data {
  constructor() {
    this.title = "";
    this.refd = "";
    this.refdHigher = "";
    this.hasChildren = false;
    this.searchLink = "";
    this.getChildrenLink = "";
  }
  toString() {
    return JSON.stringify(this);
  }
}

class Node {
  constructor(data, tree) {
    this.data = data ? data : new Data();
    this.tree = tree;
    this.children = [];
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
}

