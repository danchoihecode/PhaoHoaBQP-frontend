import { defineStore } from 'pinia';
const API_BASE_URL ='https://api.phaohoabqp.me';
export const useFooterStore = defineStore('footer', {
  state: () => ({
    footerData: {
      news: []
    }
  }),
  actions: {
    async fetchFooterDetail() {    
      try {
        const response = await fetch(`${API_BASE_URL}/api/footer`);
        const data = await response.json();
        this.footerData = {
          news: data.data.column_2
        };
      } catch (error) {
        console.error('Error fetching footer:', error);
      }
    }
  }
});
