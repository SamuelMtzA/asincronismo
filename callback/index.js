sum = (a, b) => {
    return a + b;
}

calc = (a,b,callback)  => {
    return callback(a,b);
}

console.log(calc(4,4,sum));


date = (callback)  => {
    console.log(new Date());

    setTimeout(() =>{
        let date = new Date();
        callback(date);
    }, 3000)
}

printDate = (dateNow) => {
    console.log(dateNow);
}

date(printDate);