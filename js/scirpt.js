const product = {
    crazy:{
        name:crazy,
        price:31000,
        amount:0,
        img:"images/burger_1.png",
        get summ (){
         return this.price * this.amount 
        }
    },
    light:{
        name:light,
        price:26000,
        amount:0,
        img:"images/burger_2.png",
        get summ (){
         return this.price * this.amount 
        }
    },
    cheeseburger:{
        name:cheeseburger,
        price:29000,
        amount:0,
        img:"images/burger_3.png",
        get summ (){
         return this.price * this.amount 
        }
    },
    dburger:{
        name:dburger,
        price:24000,
        amount:0,
        img:"images/burger_4.png",
        get summ (){
         return this.price * this.amount 
        }
    },
} 


const btns = document.querySelectorAll('.card__shop')
const basketboxthecond = document.querySelector('.basket__box')
btns.forEach(btn =>{
    btn.addEventListener('click',(e)=>{
        e.preventDefault()
        const parent = btn.closest('.card')
        const parentId = parent.getAttribute('id')
        // console.log(product[parentId]);
        product[parentId].amount++
        basketInfo()
    })
})
function basketInfo() {
    const productArr = []
    for (const key in product) {
       const pk = product[key]
       const productCard = document.querySelector(`#${key}`)
       const span = productCard.querySelector('.card__item')
    if (pk.amount) {
        span.classList.add('active')
        span.innerHTML = pk.amount
        productArr.push(pk)
    }
    }
    basketboxthecond.innerHTML = ""
    for (let i = 0; i < productArr.length; i++) {
        
        basketboxthecond.innerHTML += basketCard(productArr[i])
        
    }
}

function basketCard(card) {
    const {img, name, price, amount} = card
    return `<div class="basket__card">
    <img src="${img}" alt="" class="basket__img">
    <div class="basket__info">
        <h3 class="basket__title">${name}</h3>
        <p class="basket__price">${price} сум</p>
    </div>
    <div class="basket__btns">
        <span class="basket__sym">-</span>
        <span class="basket__amount">${amount}</span>
        <span class="basket__sym">+</span>
    </div>
   </div>`
}
const shopImg = document.querySelector('.shop__img')
const basketbox = document.querySelector('.basket')
const basketboxClose = document.querySelector('.basket__close')

shopImg.addEventListener('click',()=>{
    basketbox.classList.add('active')
    basketboxClose.addEventListener('click',()=>{
        basketbox.classList.remove('active')
    })
})
