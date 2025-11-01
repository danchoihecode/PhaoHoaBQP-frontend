import { defineStore } from 'pinia';

interface CartProduct {
  id: number,
  slug: string,
  name: string,
  image: string,
  price: number,
  discount_price: number,
  gifts: object[],
  quantity: string,
  product_quantity: string
}
const API_BASE_URL = import.meta.env.VUE_APP_API_URL || 'http://127.0.0.1:8000';
export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    products: [] as CartProduct[],
    total: 0,
    totalQuantity: 0
  }),
  actions: {
    async getCart() {  
      let cartId = localStorage.getItem('cartId');
      if (cartId) {
        try {
          const response = await fetch(`${API_BASE_URL}/api/cart/${cartId}`);
          const data = await response.json();
          this.products = data.data.products;
          this.total = data.data.totalPrice;
          this.totalQuantity = data.data.totalQuantity;
          return data.data;
        } catch (error) {
          console.error('Error fetching cart:', error);
        }
      }
    },
    async addToCart(id: number) {   
      let cartId = localStorage.getItem('cartId');
      if (!cartId) {
        try {
          const response = await fetch(`${API_BASE_URL}/api/cart/id`);
          const data = await response.json();
          cartId = data.data.cart_id;
          localStorage.setItem('cartId', cartId ? cartId : '');
        } catch (error) {
          console.error('Error fetching cartId:', error);
          return;
        }
      }

      try {
        const response = await fetch(`${API_BASE_URL}/api/cart/add-item`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            cart_id: cartId,
            product_id: id
          }),
        });

        const data = await response.json();
        this.products = data.data.products;
        this.total = data.data.totalPrice;
        this.totalQuantity = data.data.totalQuantity;
      } catch (error) {
        console.error('Error adding product to cart:', error);
      }
    },

    async removeFromCart(id: number) {      
      try {
        const response = await fetch(`${API_BASE_URL}/api/cart/delete-item`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            cart_id: localStorage.getItem('cartId'),
            product_id: id
          }),
        });

        const data = await response.json();
        this.products = data.data.products;
        this.total = data.data.totalPrice;
        this.totalQuantity = data.data.totalQuantity;
      } catch (error) {
        console.error('Error remove product from cart:', error);
      }
    },

    async increaseQuantity(id: number) {     
      try {
        const response = await fetch(`${API_BASE_URL}/api/cart/increase-item`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            cart_id: localStorage.getItem('cartId'),
            product_id: id
          }),
        });

        const data = await response.json();
        this.products = data.data.products;
        this.total = data.data.totalPrice;
        this.totalQuantity = data.data.totalQuantity;
      } catch (error) {
        console.error('Error increase quantity:', error);
      }
    },

    async decreaseQuantity(id: number) {     
      try {
        const response = await fetch(`${API_BASE_URL}/api/cart/decrease-item`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            cart_id: localStorage.getItem('cartId'),
            product_id: id
          }),
        });

        const data = await response.json();
        this.products = data.data.products;
        this.total = data.data.totalPrice;
        this.totalQuantity = data.data.totalQuantity;
      } catch (error) {
        console.error('Error decrease quantity:', error);
      }
    },

    async updateQuantity(id: number, quantity: number) {     
      try {
        const response = await fetch(`${API_BASE_URL}/api/cart/update-item`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            cart_id: localStorage.getItem('cartId'),
            product_id: id,
            quantity: quantity
          }),
        });

        const data = await response.json();
        this.products = data.data.products;
        this.total = data.data.totalPrice;
        this.totalQuantity = data.data.totalQuantity;
      } catch (error) {
        console.error('Error update quantity:', error);
      }
    },
    clearCart() {
      localStorage.clear();
      this.$reset();
    },
  },
});
