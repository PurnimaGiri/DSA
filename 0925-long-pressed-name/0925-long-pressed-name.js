/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
      let i = 0;
    let j = 0;
    const m = name.length;
    const n = typed.length;
    while (j < n) {
        if (i < m && name[i] === typed[j]) {
            i++;
            j++;
        } else if (j > 0 && typed[j] === typed[j - 1]) {
            j++;
        } else {
            return false;
        }
    }
    return i === m;

};