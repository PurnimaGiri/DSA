/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let capitals = 0;
    
    for (let char of word) {
        if (char >= 'A' && char <= 'Z') {
            capitals++;
        }
    }
    
    return capitals === word.length || 
           capitals === 0 || 
           (capitals === 1 && word[0] >= 'A' && word[0] <= 'Z');
};