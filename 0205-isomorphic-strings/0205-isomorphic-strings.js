/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const posS = new Uint32Array(256);
    const posT = new Uint32Array(256);

    for (let i = 0; i < s.length; i++) {
        const charS = s.charCodeAt(i);
        const charT = t.charCodeAt(i);
        if (posS[charS] !== posT[charT]) {
            return false;
        }
        posS[charS] = i + 1;
        posT[charT] = i + 1;
    }

    return true;
};