<template>
  <div>
    <button class="btn-cart">
      <div class="relative"><svg width="20" height="20" viewBox="0 0 59 55" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.0351562 1.2793C6.42228 1.45471 10.0984 3.89202 11.0635 8.5892C15.074 23.9646 17.0793 31.6519 17.0793 31.6519C17.7864 35.0523 19.4572 36.7231 22.0925 36.6651C41.4784 36.6651 51.1717 36.6651 51.1717 36.6651C55.1829 23.2957 57.1882 16.611 57.1882 16.611"
            stroke="#FEFEFE" stroke-width="2.56017" stroke-miterlimit="2.61313">
          </path>
          <path
            d="M25.1011 53.7109C27.8698 53.7109 30.1143 51.6908 30.1143 49.1987C30.1143 46.7067 27.8698 44.6865 25.1011 44.6865C22.3324 44.6865 20.0879 46.7067 20.0879 49.1987C20.0879 51.6908 22.3324 53.7109 25.1011 53.7109Z"
            fill="#FEFEFE" stroke="#FEFEFE" stroke-width="2.56017" stroke-miterlimit="2.61313">
          </path>
          <path
            d="M43.1499 53.7109C45.9186 53.7109 48.1631 51.6908 48.1631 49.1987C48.1631 46.7067 45.9186 44.6865 43.1499 44.6865C40.3812 44.6865 38.1367 46.7067 38.1367 49.1987C38.1367 51.6908 40.3812 53.7109 43.1499 53.7109Z"
            fill="#FEFEFE" stroke="#FEFEFE" stroke-width="2.56017" stroke-miterlimit="2.61313">
          </path>
        </svg>
        <div class="cart-number">{{ totalQuantity }}</div>
      </div>
      <span>Giỏ hàng</span>
    </button>
  </div>
</template>

<script setup>
import { useCartStore } from '~/stores/cart';
import { computed, onMounted } from 'vue';
const cartStore = useCartStore();
onMounted(async () => {
  await cartStore.getCart();
})
const totalQuantity = computed(() => cartStore.totalQuantity);
</script>

<style scoped>
.btn-cart {
  align-items: center;
  border-radius: 4px;
  border-width: 1px;
  display: flex;
  gap: 8px;
  height: 40px;
  position: relative;
  width: 108px;
  border-color: rgb(168 208 255/1);
  font-size: 13px;
  font-weight: 500;
  padding: 6px 10px;
  color: rgb(255 255 255/1)
}

.btn-cart .cart-number {
  left: 6px;
  top: -3px
}

.btn-cart .cart-number,
.cart-number {
  align-items: center;
  border-radius: 50%;
  display: flex;
  height: 12px;
  justify-content: center;
  line-height: inherit;
  position: absolute;
  width: 12px;
  background-color: rgb(208 2 27/1);
  font-size: 10px;
  font-weight: 700;
  color: rgb(255 255 255/1)
}

.cart-number {
  left: 9px;
  top: 0
}
</style>