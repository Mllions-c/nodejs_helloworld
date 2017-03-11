/**
 * Created by dingyl on 2017/2/24.
 */
    function sum(n){
var sum=0;
for(var i=0; i<=n; i++){
    sum +=i;
}
    return sum;
}

exports.sum= sum//暴露返回值，赋予到exports
