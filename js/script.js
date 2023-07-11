const btnCart=document.querySelector('#cart-icon');
const cart=document.querySelector('.cart');
const btnClose=document.querySelector('#cart-close');


btnCart.addEventListener('click',()=>{
    cart.classList.add('cart-active');
});

btnClose.addEventListener('click',()=>{
    cart.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded',loadFood);

function loadFood(){
    loadContent();
}

function loadContent(){
    //remove items from the  cart
    let btnRemove=document.querySelectorAll('.cart-remove');
    console.log(btnRemove);
    btnRemove.forEach((btn)=>{
        btn.addEventListener('click',removeItem);
    });
    //cart quantity change event
    let qtyElement=document.querySelectorAll('.cart-quantity');
    console.log(btnRemove);
    qtyElement.forEach((input)=>{
       // btn.addEventListener('click',removeItem);
       input.addEventListener('change',changeQty);
    });
}

function removeItem(){
    if(confirm('are you sure to remove')){
        this.parentElement.remove();
    }
    this.parentElement.remove();
}

//change quantity
function changeQty(){
    if(isNaN(this.value)||this.value<1){
        this.value=1;
    }
}