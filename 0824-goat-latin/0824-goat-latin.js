/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
     const words = sentence.split(' ');
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const result = [];


    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let converted;


        if (vowels.has(word[0])) {
            converted = word + 'ma';
        } else {
            converted = word.slice(1) + word[0] + 'ma';
        }


        converted += 'a'.repeat(i + 1);
        result.push(converted);
    }


    return result.join(' ');

};