/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.capacity = k;
    this.queue = new Array(k);
    this.headIndex = 0;
    this.count = 0;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) {
        return false;
    }
    const tailIndex = (this.headIndex + this.count) % this.capacity;
    this.queue[tailIndex] = value;
    this.count++;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
   if (this.isEmpty()) {
        return false;
    }
    this.headIndex = (this.headIndex + 1) % this.capacity;
    this.count--;
    return true; 
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (this.isEmpty()) {
        return -1;
    }
    return this.queue[this.headIndex];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) {
        return -1;
    }
    const tailIndex = (this.headIndex + this.count - 1) % this.capacity;
    return this.queue[tailIndex];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.count === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.count === this.capacity;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */