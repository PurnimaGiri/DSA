var maxProfit = function(prices) {
    let buy = prices[0]
    let mp = 0 // max_profit
    for(let i = 1 ; i < prices.length ; i++){ 
        let today = prices[i]
        if(buy > today){
            buy = today
        }else{
        let cp = today - buy //current_profit
        mp = Math.max(mp,cp)
    }
    }
    return mp
};
