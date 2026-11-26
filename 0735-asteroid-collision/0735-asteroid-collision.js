var asteroidCollision = function(asteroids) {
    let stack = [];
    for (let a of asteroids) {
        let alive = true;
        while (alive && a < 0 && stack.length &&
               stack[stack.length - 1] > 0) {
            if (stack[stack.length - 1] < -a) {
                stack.pop();
            }
            else if (stack[stack.length - 1] === -a) {
                stack.pop();
                alive = false;
            }
            else {
                alive = false;
            }
        }
        if (alive) stack.push(a);
    }
    return stack;
}
