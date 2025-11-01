import { defineStore } from 'pinia';
interface OrderResponse {
    order_id: number,
    gender: string,
    customer_name: string,
    customer_phone: string,
    other_request: string,
    delivery_address: string,
    total_amount: number
}
const API_BASE_URL = import.meta.env.VUE_APP_API_URL || 'http://127.0.0.1:8000';
export const useOrderStore = defineStore('orderStore', {
    state: () => ({
        gender: 0,
        name: '',
        phone: '',
        requirement: '',
        localDelivery: true,
        supermarket: 0,
        province: '',
        home: '',
        card: false,
        bill: false,
        captcha: '',
        response: {} as OrderResponse
    }),
    actions: {
        async placeOrder() {         
            try {
                const orderData = {
                    cart_id: localStorage.getItem('cartId'),
                    gender: this.gender === 0 ? 'Anh' : 'Chị',
                    customer_name: this.name,
                    customer_phone: this.phone,
                    other_request: this.requirement,
                    delivery_method: this.localDelivery ? 'giao_tan_noi' : 'nhan_tai_sieu_thi',
                    store_id: this.localDelivery ? undefined : this.supermarket,
                    province: this.localDelivery ? this.province : undefined,
                    street_address: this.localDelivery ? this.home : undefined
                };

                const response = await fetch(`${API_BASE_URL}/api/order`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(orderData),
                });
                const data = await response.json();
                if (data.status === 1) {
                    this.response = data.data;
                    return this.response;
                } else if (data.status === 2) {
                    alert(data.message[0]);
                } else if (data.status === 0) {
                    alert('Đã xảy ra lỗi phía máy chủ !');
                }
            } catch (error) {
                console.error('Error placing order:', error);
            }
        },
        clearForm() {
            this.gender = 0;
            this.name = '';
            this.phone = '';
            this.requirement = '';
            this.home = '';
            this.localDelivery = true;
            this.supermarket = 0;
        }
    }
});
