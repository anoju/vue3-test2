export class Stack {
  constructor() {
    this.arr = [];
    this.index = 0;
  }
  push(item) {
    this.arr[(this.index += 1)] = item;
  }
  pop() {
    if (this.index <= 0) return null;
    const result = this.arr[(this.index -= 1)];
    return result;
  }
  print() {
    const disp = [];
    this.arr.forEach((element, idx) => {
      disp.push({ index: idx, item: element });
    });
    return disp.reverse();
  }
}
