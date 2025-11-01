import { defineStore } from 'pinia';
const API_BASE_URL = import.meta.env.VUE_APP_API_URL || 'http://127.0.0.1:8000';
export const useSupermarketStore = defineStore('supermarket', {
    state: () => ({
        supermarkets: []
    }),
    actions: {
        async fetchStores() {           
            try {
                const response = await fetch(`${API_BASE_URL}/api/stores`);
                const data = await response.json();
                this.supermarkets = data.data;
                return data.data;
            } catch (error) {
                console.error('Error fetching supermarkets:', error);
            }
        }
    }
});