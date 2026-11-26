/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let stack = [];
    for (let op of operations) {
        if (op === "C") {
            stack.pop();
        }
        else if (op === "D") {
            stack.push(stack[stack.length - 1] * 2);
        }
        else if (op === "+") {
            let n = stack.length;
            stack.push(stack[n - 1] + stack[n - 2]);
        }
        else {
            stack.push(Number(op));
        }
    }
    return stack.reduce((sum, x) => sum + x, 0);
};