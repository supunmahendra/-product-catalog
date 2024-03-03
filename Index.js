
/*getProduct=(callback)=>{
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', ()=> {
        if(request.status === 200 && request.readyState ===4){
                //getProduct(request.responseText)
                callback(request.responseText,undefined)
        }
        else if (request.readyState ===4) {
            //console.log("error"); 
            callback(undefined,request.responseText)
        }
    } )
    request.open('GET','https://fakestoreapi.com/products');
    request.send();

}

getProduct((data, error) =>{
    if (data) {
        console.log('call back triggered',data)
    }
    else{
        console.log("error"); 
    }
});
*/

const nowGetSomthing = () => {
    return new Promise ((resolve, reject)=>{
        resolve('i got someting')
        //reject('reject')
    });
}

nowGetSomthing().then((result) =>{
    console.log("promise return :",result)
}).catch(()=>{
    console.log("error")
})

const semthingRecived = nowGetSomthing();
console.log (semthingRecived)