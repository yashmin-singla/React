


function add(a,b){
    let sum=a+b;
    return sum;
}
function sub(a,b){
    let sub=a-b;
    return sub;
}
function multi(a,b){
    let multi=a*b;
    return multi;
}
function div(a,b){
    let div=a/b;
    div=div.toFixed(2);
    return div;
}
export default add;
export {sub,multi,div};