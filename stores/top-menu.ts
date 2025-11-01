import { defineStore } from 'pinia';
const API_BASE_URL ='https://api.phaohoabqp.me';
export const useTopMenuStore = defineStore('top-menu', {
    state: () => ({
        categories: [],
    }),
    actions: {
        async fetchCategories() {          
            try {
                const response = await fetch(`${API_BASE_URL}/api/topmenu`);
                const data = await response.json();
                this.categories = data.data;
                return data.data;
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        }
    }
});