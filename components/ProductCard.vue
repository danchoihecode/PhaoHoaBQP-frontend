<template>
  <div class="border border-grey-200 w-full h-full bg-white group relative overflow-hidden"
    :class="props.shadow ? 'isShadow' : ''">
    <router-link :to="`/${props.categorySlug}/${props.slug}`">
      <div class="relative pt-3 flex items-center justify-center">
        <img :src="props.productImage" alt="product"
          class="h-[220px] max-h-[220px] object-contain transition-transform duration-300 group-hover:translate-y-[-10px]">
      </div>
    </router-link>
    <div class="p-2.5">
      <router-link :to="`/${props.categorySlug}/${props.slug}`">
        <div class="font-normal text-[14px] text-grey-800 leading-5 name cursor-pointer hover:underline">
          {{ props.productName }}</div>
      </router-link>
      <div class="flex items-center mb-2 mt-2">
        <div v-if="props.productRating !== null" class="flex items-center">
          <div v-for="star in Math.round(props.productRating)" :key="star" class="mr-1 mb-[2px]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.20935 1.01093L9.44122 3.49501C9.6092 3.84082 10.0571 4.17249 10.4351 4.23601L12.6679 4.61003C14.0957 4.84997 14.4317 5.89441 13.4028 6.92474L11.667 8.6749C11.373 8.97129 11.212 9.54292 11.303 9.95223L11.8 12.1187C12.1919 13.8336 11.289 14.497 9.78418 13.6007L7.69141 12.3516C7.31345 12.1258 6.69052 12.1258 6.30557 12.3516L4.21278 13.6007C2.71495 14.497 1.80505 13.8266 2.19701 12.1187L2.69395 9.95223C2.78494 9.54292 2.62396 8.97129 2.32999 8.6749L0.594186 6.92474C-0.427699 5.89441 -0.0987362 4.84997 1.3291 4.61003L3.56185 4.23601C3.93281 4.17249 4.38076 3.84082 4.54874 3.49501L5.78063 1.01093C6.45255 -0.336975 7.54443 -0.336975 8.20935 1.01093Z"
                fill="#FFDE00" />
            </svg>
          </div>
        </div>
        <div v-else class="flex items-center">
          <div v-for="star in 5" :key="star" class="mr-1 mb-[2px]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.20935 1.01093L9.44122 3.49501C9.6092 3.84082 10.0571 4.17249 10.4351 4.23601L12.6679 4.61003C14.0957 4.84997 14.4317 5.89441 13.4028 6.92474L11.667 8.6749C11.373 8.97129 11.212 9.54292 11.303 9.95223L11.8 12.1187C12.1919 13.8336 11.289 14.497 9.78418 13.6007L7.69141 12.3516C7.31345 12.1258 6.69052 12.1258 6.30557 12.3516L4.21278 13.6007C2.71495 14.497 1.80505 13.8266 2.19701 12.1187L2.69395 9.95223C2.78494 9.54292 2.62396 8.97129 2.32999 8.6749L0.594186 6.92474C-0.427699 5.89441 -0.0987362 4.84997 1.3291 4.61003L3.56185 4.23601C3.93281 4.17249 4.38076 3.84082 4.54874 3.49501L5.78063 1.01093C6.45255 -0.336975 7.54443 -0.336975 8.20935 1.01093Z"
                fill="#FFDE00" />
            </svg>
          </div>
        </div>
      </div>
      <div class="price text-[14px] font-normal lg:mt-0 mt-1 line-through">
        <span>{{ props.productPrice }}</span>
        <span class="text-[12px]">₫</span>
      </div>
      <div class="text-error text-[20px] font-semibold leading-6 mt-1">
        <span>{{ props.productDiscountPrice }}</span>
        <span class="text-[16px] leading-5">₫</span>
      </div>
      <div class="flex justify-between w-full mt-1">

        <div class="flex items-center justify-between">
          <div class="flex items-center cursor-pointer gap-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.9992 5.71896C21.9992 4.10756 20.6909 2.79673 19.0826 2.79673C17.4744 2.79673 16.1661 4.10756 16.1661 5.71896C16.1661 7.18843 17.2544 8.40826 18.666 8.61114V14.9031C18.666 16.5145 17.3577 17.8254 15.7494 17.8254H11.6688C11.7296 17.6684 11.8229 17.5215 11.9488 17.3946L14.0662 15.273C14.2287 15.1102 14.2287 14.8455 14.0662 14.6827C13.9037 14.5199 13.6395 14.5199 13.477 14.6827L11.3596 16.8043C10.9763 17.1883 10.7496 17.8254 10.7496 18.2428C10.7496 18.6603 10.9513 19.3474 11.3596 19.7566L13.477 21.8781C13.5587 21.9599 13.6653 22 13.772 22C13.8787 22 13.9853 21.9591 14.067 21.8781C14.2295 21.7153 14.2295 21.4506 14.067 21.2878L11.9496 19.1663C11.8029 19.0193 11.7013 18.8457 11.6429 18.6603H15.7503C17.8177 18.6603 19.5001 16.9746 19.5001 14.9031V8.61114C20.9117 8.40826 21.9992 7.18843 21.9992 5.71896ZM19.0826 7.80628C17.9343 7.80628 16.9994 6.86949 16.9994 5.71896C16.9994 4.56844 17.9343 3.63165 19.0826 3.63165C20.2309 3.63165 21.1659 4.56844 21.1659 5.71896C21.1659 6.86949 20.2309 7.80628 19.0826 7.80628ZM13.3187 5.71896C13.3187 5.16123 13.102 4.6369 12.7087 4.24282L10.5913 2.12211C10.428 1.9593 10.1647 1.9593 10.0022 2.12211C9.83967 2.28492 9.83967 2.54959 10.0022 2.7124L12.1196 4.83394C12.2537 4.96837 12.3537 5.12784 12.4146 5.30234H8.24974C6.18233 5.30234 4.4999 6.98805 4.4999 9.0595V15.3515C3.08829 15.5544 2 16.7742 2 18.2437C2 19.8551 3.30828 21.1659 4.91655 21.1659C6.52481 21.1659 7.83309 19.8551 7.83309 18.2437C7.83309 16.7742 6.7448 15.5544 5.33319 15.3515V9.0595C5.33319 7.44809 6.64147 6.13726 8.24974 6.13726H12.4137C12.3521 6.31093 12.2529 6.47123 12.1187 6.60565L10.0013 8.7272C9.83884 8.89001 9.83884 9.15468 10.0013 9.31749C10.083 9.39931 10.1897 9.43939 10.2963 9.43939C10.403 9.43939 10.5096 9.39848 10.5913 9.31749L12.7087 7.19595C13.102 6.80186 13.3187 6.27669 13.3187 5.71896ZM6.99979 18.2428C6.99979 19.3934 6.06483 20.3302 4.91655 20.3302C3.76826 20.3302 2.8333 19.3934 2.8333 18.2428C2.8333 17.0923 3.76826 16.1555 4.91655 16.1555C6.06483 16.1555 6.99979 17.0923 6.99979 18.2428Z"
                fill="#4A91E2" />
            </svg>
            <div class="text-[12px] font-normal leading-3 text-primary-500">So sánh</div>
          </div>
        </div>
        <div @click="addToCart" class="cursor-pointer">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.3563 3.75C13.3563 3.51667 13.54 3.33333 13.7737 3.33333H18.7823C19.0161 3.33333 19.1997 3.51667 19.1997 3.75C19.1997 3.98333 19.0161 4.16667 18.7823 4.16667H13.7737C13.54 4.16667 13.3563 3.98333 13.3563 3.75ZM19.6672 5.33333C19.4501 5.29167 19.2247 5.43333 19.1747 5.65833L18.4401 9.31667C18.1646 10.675 16.9625 11.6583 15.5768 11.6583H4.90844L3.86498 4.15833H11.2694C11.5031 4.15833 11.6868 3.975 11.6868 3.74167C11.6868 3.50833 11.5031 3.325 11.2694 3.325H3.74812L3.53108 1.79167C3.38916 0.775 2.50431 0 1.46919 0H0.417385C0.183649 0 0 0.183333 0 0.416667C0 0.65 0.183649 0.833333 0.417385 0.833333H1.46919C2.09527 0.833333 2.62118 1.3 2.713 1.90833L4.19889 12.6C4.45767 14.4417 6.05208 15.8333 7.92196 15.8333H16.2864C16.5201 15.8333 16.7037 15.65 16.7037 15.4167C16.7037 15.1833 16.5201 15 16.2864 15H7.91361C6.46946 15 5.22566 13.925 5.02531 12.5H15.5768C17.3632 12.5 18.9075 11.2333 19.2581 9.48333L19.9927 5.825C20.0345 5.6 19.8926 5.38333 19.6672 5.33333ZM7.51293 18.3333C7.51293 19.25 6.76163 20 5.84339 20C4.92514 20 4.17385 19.25 4.17385 18.3333C4.17385 17.4167 4.92514 16.6667 5.84339 16.6667C6.76163 16.6667 7.51293 17.4167 7.51293 18.3333ZM6.67816 18.3333C6.67816 17.875 6.30251 17.5 5.84339 17.5C5.38426 17.5 5.00862 17.875 5.00862 18.3333C5.00862 18.7917 5.38426 19.1667 5.84339 19.1667C6.30251 19.1667 6.67816 18.7917 6.67816 18.3333ZM15.8606 18.3333C15.8606 19.25 15.1093 20 14.1911 20C13.2728 20 12.5215 19.25 12.5215 18.3333C12.5215 17.4167 13.2728 16.6667 14.1911 16.6667C15.1093 16.6667 15.8606 17.4167 15.8606 18.3333ZM15.0259 18.3333C15.0259 17.875 14.6502 17.5 14.1911 17.5C13.732 17.5 13.3563 17.875 13.3563 18.3333C13.3563 18.7917 13.732 19.1667 14.1911 19.1667C14.6502 19.1667 15.0259 18.7917 15.0259 18.3333Z"
              fill="#D0021B" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '~/stores/cart';
import { useRouter } from 'vue-router';
const props = defineProps({
  id: Number,
  slug: String,
  productImage: String,
  productName: String,
  productPrice: String,
  productDiscountPrice: String,
  productGift: Array,
  productRating: Number,
  categorySlug: String,
  shadow: Boolean,
});
const router = useRouter();

const addToCart = () => {
  useCartStore().addToCart(props.id);
  router.push('/cart');
};


</script>

<style scoped>
.not-rated {
  font-size: 13px;
  font-weight: 400;
  gap: 0.25rem;
  line-height: 15px;
  color: rgba(43, 44, 46, 1);
}

.name {
  display: -webkit-box;
  height: 40px;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.tag-product {
  align-items: center;
  border-radius: 9999px;
  display: inline-flex;
  font-size: 10px;
  font-weight: 700;
  gap: 6px;
  line-height: 11.5px;
  padding: 4.5px 8px;
  color: rgba(255, 255, 255, 1);
}

.text-error {
  color: #d0021b;

}

.text-grey-700 {
  color: rgb(109, 110, 112, 1)
}

.text-primary-500 {
  color: rgb(74, 145, 226, 1)
}

.text-grey-800 {
  color: rgb(77, 78, 80, 1)
}


.border-grey-200 {
  border-color: rgb(241, 242, 245, 1)
}

.price {
  line-height: 16.41px;
  color: #abadaf;
}

.gift {
  line-height: 14.06px;
  color: #4d4e50;
}

.value {
  line-height: 18px;
  color: #4d4e50;
}

.group:hover.isShadow {
  -webkit-box-shadow: 0 2px 12px rgba(0, 0, 0, .12);
  -moz-box-shadow: 0 2px 12px rgba(0, 0, 0, .12);
  box-shadow: 0 2px 12px rgba(0, 0, 0, .12);
}
</style>
