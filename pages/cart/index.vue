<template>
    <div class="flex flex-col justify-center sm:bg-[#F1F2F5] pb-3">
        <div class="cart container mx-auto mt-10">
            <div>
                <div class="list-product-cart">
                    <div v-for="product in products">
                        <CartProduct :id="product.id" :slug="product.slug" :name="product.name" :image="product.image"
                            :price="product.price" :discount_price="product.discount_price" :gifts="product.gifts"
                            :quantity="parseInt(product.quantity)" :qty-in-stock="parseInt(product.product_quantity)" />
                    </div>
                </div>
            </div>
            <div class="total-price">
                <div class="label"> Tổng tiền </div>
                <div class="price">{{ cartStore.total.toLocaleString('vi-VN') }}₫ </div>
            </div>
            <div>
                <DeliveryForm />
            </div>
            <div>
                <CaptchaContainer />
            </div>
            <div class="flex justify-center mt-6">
                <div>
                    <button
                        class="btn-submit bg-gradient-to-b from-secondary-600 to-secondary-900 text-white font-bold rounded-lg px-6 py-3 text-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        @click="placeOrder">ĐẶT HÀNG
                    </button>
                    <div class="text-center mt-[7px] text-grey-800 text-[14px]">(Xem hàng,
                        không mua không sao)</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import BreadCrumb from '~/components/BreadCrumb.vue';
import CartProduct from '~/components/CartProduct.vue';
import DeliveryForm from '~/components/DeliveryForm.vue';
import CaptchaContainer from '~/components/CaptchaContainer.vue';
import { useBreadCrumbStore } from '~/stores/bread-crumb';
import { useCartStore } from '~/stores/cart';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useOrderStore } from '~/stores/order';

const router = useRouter();
const cartStore = useCartStore();
const orderStore = useOrderStore();

const products = computed(() => cartStore.products);
const breadCrumbStore = useBreadCrumbStore();
breadCrumbStore.setBreadCrumbs([{ label: 'Trang chủ', path: '/' },
{ label: 'Giỏ hàng', path: '/' }
]);

const placeOrder = async () => {
    if (cartStore.totalQuantity === 0)
        alert('Vui lòng chọn sản phẩm trước khi đặt hàng!');
    else {
        if (orderStore.captcha === 'success') {
            const response = await orderStore.placeOrder();
            if (response) {
                if (response.error) {
                    alert(response.message[0]);
                } else {
                    cartStore.clearCart();
                    orderStore.clearForm();
                    router.push('/cart/ordersuccess');
                }
            }
        } else
            alert('Mã captcha không đúng!');
    }

};


</script>
<style scoped>
.cart {
    max-width: 736px;
    width: 100%;
    background-color: rgb(255 255 255/1);
    padding: 15px
}

@media (min-width:641px) {
    .cart {
        padding: 1.5rem
    }
}

.cart .total-price {
    align-items: center;
    display: flex;
    justify-content: space-between
}

.cart .total-price .label {
    font-size: 14px;
    font-weight: 500;
    color: rgb(77 78 80/1)
}

.cart .total-price .price {
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    color: rgb(208 2 27/1)
}

.cart .btn-submit {
    cursor: pointer;
    font-weight: 700;
    height: 48px;
    width: 348px
}

.from-secondary-600 {
    --tw-gradient-from: #ffde00 var(--tw-gradient-from-position);
    --tw-gradient-to: rgba(255, 222, 0, 0) var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)
}

.to-secondary-900 {
    --tw-gradient-to: #ec7823 var(--tw-gradient-to-position)
}
</style>