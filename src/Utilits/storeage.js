const addCartData= (id)=>{
    let shoppingCart ={};

    const stordCart = localStorage.getItem('shopping-cart')
    if(stordCart){
        shoppingCart = JSON.parse(stordCart)
        const quantity = shoppingCart[id]
        if(quantity){
            const newQuantity = quantity + 1;
            shoppingCart[id] = newQuantity
        }
        else{
            shoppingCart[id]=1
        }
    }
    else{
        shoppingCart[id]=1;
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
}

const removeCartData=(id)=>{ 
    const stordCart = localStorage.getItem('shopping-cart')
    if(stordCart){
        const shoppingCart = JSON.parse(stordCart)
        if(id in shoppingCart){
            delete shoppingCart[id]
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }

}
const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}

export{addCartData,removeCartData,deleteShoppingCart}