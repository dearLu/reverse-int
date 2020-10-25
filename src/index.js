module.exports = function reverse (n) {
    let result=n;
    if(result<0){
            result=n*(-1);
    }
    let wholePath;
    let decadePart;
    let hundredPart;
    wholePath=parseInt(result/100);
    decadePart=parseInt((result%100)/10);
    hundredPart=result%10;
    
    return Number(`${hundredPart}${decadePart}${wholePath}`);
}
