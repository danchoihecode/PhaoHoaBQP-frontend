import { defineStore } from 'pinia';
const API_BASE_URL = import.meta.env.VUE_APP_API_URL || 'http://127.0.0.1:8000';
export const useFooterStore = defineStore('footer', {
  state: () => ({
    footerData: {
      column: []
    }
  }),
  actions: {
    async fetchFooterDetail() {    
      try {
        const response = await fetch(`${API_BASE_URL}/api/footer`);
        const data = await response.json();
        this.footerData = {
          column: data.data.column_2
        };
      } catch (error) {
        console.error('Error fetching footer:', error);
      }
    }
  }
});
