var kWeakestRows = function(mat, k) {
    let arr = [];
    for (let i = 0; i < mat.length; i++) {
        let count = 0;
        for (let num of mat[i]) {
            if (num === 1) {
                count++;
            }
        }
        arr.push([count, i]);
    }
    arr.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
return arr.slice(0, k).map(x => x[1]);
};


