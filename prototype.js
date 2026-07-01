Array.prototype.mypop = function() {
    let lastElement = this[this.length-1];
    this.length -= 1;
    return lastElement;
}

Array.prototype.mypush = function(...elements) {
    for(let element of elements) {
        this[this.length] = element;
    }
    return this.length;
}

const arr = [1,2,3];
console.log(arr.mypop());
console.log(arr);
console.log(arr.mypush(5,6,6));
console.log(arr);