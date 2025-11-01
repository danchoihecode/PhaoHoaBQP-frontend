import { defineStore } from 'pinia';
const API_BASE_URL ='https://api.phaohoabqp.me';
export const useProductStore = defineStore('product', {
    state: () => ({
        products: [],
        product: {}
    }),
    actions: {
        async fetchProducts(slug: any) {           
            try {
                const response = await fetch(`${API_BASE_URL}/api/products/${slug}`);
                const data = await response.json();
                this.products = data.data;
                return data.data;
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },
        async fetchProductDetail(slug: string) {           
            try {
                const response = await fetch(`${API_BASE_URL}/api/product-by-slug/${slug}`);
                const data = await response.json();
                this.product = data.data;
                return data.data;
            } catch (error) {
                console.error('Error fetching product detail:', error);
            }
        }
    }
});