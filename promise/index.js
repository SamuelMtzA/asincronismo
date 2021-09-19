sometimesWillHappen = () => {
    //si se resuelve como es hecha o si es rechazada.
    return new Promise(( result,reject ) => {
        if (true) {
            result('Get it!');
            
        } else {
            reject('Ups!');
        }
    });
};

sometimesWillHappen()
    .then(resp => console.log(resp))
    .catch(err => console.error(err));

sometimesWillHappen2 = () => {
    return new Promise((result, reject) =>{
        if (true) {
            setTimeout(()=>{
                result('true');
            },2000);
        } else {
            const error = new Error('Ups');
            reject(error);
        }
    })
}

sometimesWillHappen2()
.then(Response => console.log(Response))
.catch(err => console.log(err))

//ejecutar promesas al mismo tiempo

Promise.all([sometimesWillHappen(), sometimesWillHappen2()])
.then(response =>{
    console.log('array of results', response);
})
.catch(err=> {
    console.error(err);
})