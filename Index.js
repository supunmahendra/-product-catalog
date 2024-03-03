
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

/*
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

*/

/*const getProductsPromiseFunction =(resourceURL) =>{
  return new Promise ((resolve,reject)=>{
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', ()=> {
        if(request.status === 200 && request.readyState ===4){
            resolve(request.responseText)
        }
        else if (request.readyState ===4) {
            reject("error"); 
        }
    } )
    request.open('GET',resourceURL);
    request.send();
  })

}

const URL='https://fakestoreapi.com/products'

result=getProductsPromiseFunction(URL).then((data)=>{
    const convertProducts =JSON.parse(data);
    console.log(convertProducts)
}).catch((A)=>{
    console.log(A)
});
*/

fetch('https://fakestoreapi.com/products').then((response)=>{
    return response.json();
}).then((data)=>{
    const ProductList= data;
    console.log(ProductList);
}).catch((A)=>{
    console.log(A);
})

function productsPrint (){
    
}

/*
<div class="ProductList ProductDetail">
    <div>
        <img class="image" src="https://i.ebayimg.com/thumbs/images/g/ldcAAOSwmgJlsz5f/s-l300.webp" alt="dd"> 
    </div>
                
    <div>
        <p>nsdfn</p>
        <p>asdjnf</p>

    </div>
</div>
*/