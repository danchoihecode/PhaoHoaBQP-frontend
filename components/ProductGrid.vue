<template>
    <ProductFilter :total="products.length" :category-name="props.categoryName" @filterSelected="updateFilter" />
    <div class="grid grid-cols-4 mb-6">
        <ProductCard v-for="product in visibleProducts" :id="product.id" :slug="product.slug"
            :productImage="product.main_image_url" :productName="product.name" :productPrice="product.price_format"
            :productDiscountPrice="product.discount_price_format" :productGift="product.gifts"
            :productRating="product.average_rating" :categorySlug="props.categorySlug" :shadow="true"
            class="w-full min-h-[420px] bg-white"></ProductCard>
    </div>
    <div class="flex justify-center" v-if="remainingProducts > 0">
        <div class="group rounded-[4px] text-[14px] text-[#333333] font-normal text-grey-800 cursor-pointer w-[340px] h-[40px] flex justify-center gap-1 items-center border border-grey-300 hover:bg-[#2a83e9] hover:text-white"
            @click="loadMoreProducts">
            Xem thêm {{ remainingProducts }} {{ props.categoryName }}
            <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                    d='M13.4391 6.13477H8.7666H4.55908C3.83908 6.13477 3.47908 7.00477 3.98908 7.51477L7.8741 11.3998C8.4966 12.0223 9.5091 12.0223 10.1316 11.3998L11.6091 9.92227L14.0166 7.51477C14.5191 7.00477 14.1591 6.13477 13.4391 6.13477Z'
                    fill='#4D4E50' class="group-hover:fill-white" />
            </svg>
        </div>
    </div>
</template>

<script setup>
import ProductFilter from '~/components/ProductFilter.vue';
import ProductCard from '~/components/ProductCard.vue';
import { ref, computed } from 'vue';
import { useProductStore } from '~/stores/product';
const props = defineProps({
    categoryName: String,
    categorySlug: String,
});
const selectedFilter = ref('Mới nhất');

const productStore = useProductStore();
const { data: products } = await useAsyncData(
    `grid-${props.categorySlug}`,
    () => productStore.fetchProducts(props.categorySlug),
    {
        default: () => [],
        server: true,
        lazy: false,
    }
);

const remainingProducts = computed(() => products.value.length - visibleProducts.value.length);

const sortedProducts = computed(() => {
    let sorted = [...products.value];
    if (selectedFilter.value === 'Tăng dần') {
        sorted.sort((a, b) => a.discount_price - b.discount_price);
    } else if (selectedFilter.value === 'Giảm dần') {
        sorted.sort((a, b) => b.discount_price - a.discount_price);
    } else {
        sorted.sort((a, b) => b.id - a.id);
    }
    return sorted;
});

const visibleProductCount = ref(8);

const visibleProducts = computed(() => sortedProducts.value.slice(0, visibleProductCount.value));

const loadMoreProducts = () => {
    visibleProductCount.value += 8;
};

const updateFilter = (filter) => {
    selectedFilter.value = filter;
};

</script>





<style scoped>
.border-grey-300 {
    border-color: rgb(235, 236, 238, 1)
}
</style>