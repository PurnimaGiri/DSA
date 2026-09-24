var isIsomorphic = function(s, t) {
    if(s.length != t.length){
        return false
    }
    for(let i = 0 ;
     i < s.length ; i++){
        for(let j = 0 ; 
        j < i ; j++){
            if(s[j] ==s[i] && t[j]!= t[i]){
                return false
            }
            if( t[j] == t[i] && s[j] != s[i]){
                return false
            } 
        }
     }
     return true
};
