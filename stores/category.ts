import { defineStore } from 'pinia';
const API_BASE_URL = import.meta.env.VUE_APP_API_URL || 'http://127.0.0.1:8000';
export const useCategoryStore = defineStore('category', {
    state: () => ({
        category: {}
    }),
    actions: {
        async fetchCategory(slug: any) {
            
            
            try {
                const response = await fetch(`${API_BASE_URL}/api/categories/name/${slug}`);
                const data = await response.json();
                this.category = data.data;
                return data.data;
            } catch (error) {
                console.error('Error fetching category:', error);
            }
        }
    }
});