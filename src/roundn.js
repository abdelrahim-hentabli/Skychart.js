function roundN(num, n){
    var powerOf10 = Math.pow(10, n);
    return Math.round(num * powerOf10)/ powerOf10;
}

export default roundN;