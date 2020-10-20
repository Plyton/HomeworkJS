'use strict'

class Basket {
    constructor() {
        this.cart = '';
        this.total = 0;
        this._init();
    }
    _init() {
        this.render();
        this.handler();
    }

    render() {
        let basket = document.querySelector('.basket');
        let basketTotal = document.querySelector('.basket-total');
        let divBasketProduct = document.createElement('div');
        divBasketProduct.classList.add('basket-product');
        basket.insertBefore(divBasketProduct, basketTotal);
    }

    handler() {
        let buttons = document.querySelectorAll('button');
        let divBasketProduct = document.querySelector('.basket-product')
        buttons.forEach(element => {
            element.addEventListener('click', event => {
                divBasketProduct = document.querySelector('.basket-product');
                this.cart = element.parentNode.cloneNode(true);
                for (let i = 0; i < this.cart.children.length; i++) {
                    if (this.cart.children[i].localName == 'img' || this.cart.children[i].localName == 'button') {
                        this.cart.children[i].classList.add('basket--hidden');
                    }
                    if (this.cart.children[i].className == 'product-price') {
                        this.total += parseInt(this.cart.children[i].innerText);
                    }
                }
                divBasketProduct.appendChild(this.cart);
                document.querySelector('.basket-total').innerText = `Общая стоимость: ${this.total}$`
            }
            )
        })
    }
}
let basket = new Basket();
