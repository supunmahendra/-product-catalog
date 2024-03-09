
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
//const productPrint = document.querySelector(".Product")
const productPrintBox = document.querySelector("#product-list")

console.log(productPrintBox)


function productsPrint(A) {
    for(let i=0 ; i < A.length; i++ ){
        const productBox =document.createElement("div")
        productBox.setAttribute("class", "Product")
        
        const product = document.createElement("img")
        product.setAttribute ("src", A[i].image)

        const productName = document.createElement("p")
        productName.textContent = 'Name:'+ A[i].title

        const productPrice = document.createElement("p")
        productPrice.textContent = 'Price:' + A[i].price
        
        productBox.appendChild(product)
        productBox.appendChild(productName)
        productBox.appendChild(productPrice)
        
        productPrintBox.appendChild(productBox)
    }
}



fetch('https://fakestoreapi.com/products').then((response)=>{
    return response.json();
}).then((data)=>{
    const productList= data;
    console.log(productList);
    productsPrint(productList);
}).catch((A)=>{
    console.log(A);
})


/*
<di class="Product">
                    <img src="https://i.ebayimg.com/thumbs/images/g/ldcAAOSwmgJlsz5f/s-l300.webp" alt="dd">                 
                    <p class="product-title">casio</p>
                    <p class="product-price">250</p>
</di


var a=[1,2]
console.log*/