<template>
    <div class="relative px-6 navigation-normal" v-if="products && products.length > 0">
        <Swiper :modules="[Navigation]" :slides-per-view="5" :space-between="18" :navigation="{
            nextEl: '#swiper-button-next-product',
            prevEl: '#swiper-button-prev-product'
        }" :loop="true">
            <SwiperSlide v-for="(group, groupIndex) in productGroups" :key="groupIndex">
                <div class="grid grid-cols-1 gap-4">
                    <div v-for="(product, index) in group" :key="index" class="flex justify-center">
                        <ProductCard :id="product.id" :slug="product.slug" :productImage="product.main_image_url"
                            :productName="product.name" :productPrice="product.price_format"
                            :productDiscountPrice="product.discount_price_format" :productGift="product.gifts"
                            :productRating="product.average_rating" :category-slug="props.slug" :shadow="true"
                            class="rounded-[10px] w-full min-h-[420px] bg-white" />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        <div id="swiper-button-next-product" class="swiper-button-next"></div>
        <div id="swiper-button-prev-product" class="swiper-button-prev"></div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductCard from './ProductCard.vue';
import { useProductStore } from '~/stores/product';

const props = defineProps({
    groupSize: Number,
    slug: String,
    slider: Boolean
})
const productStore = useProductStore();
const { data: products } = await useAsyncData('products' + props.slug, async () => {
    const response = await productStore.fetchProducts(props.slider ? props.slug + '-slider' : props.slug);
    return response || [];
}, {
    default: () => []
});
const productGroups = computed(() => {
    const groups = [];
    const numProducts = products.value ? products.value.length : 0;
    const size = props.groupSize;
    for (let i = 0; i < numProducts; i += size) {
        let group = products.value.slice(i, i + size);
        if (size == 2 && group.length === 1) {
            group.push(products.value[0]);
        }
        groups.push(group);
    }

    return groups;
});
</script>

<style scoped>
.navigation-normal #swiper-button-next-product,
.navigation-normal #swiper-button-prev-product {
    background-position: 50%;
    background-repeat: no-repeat;
    height: 60px;
    width: 31px;
    background-size: cover;
}

.navigation-normal #swiper-button-prev-product {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='39' height='68' fill='none'%3E%3Cg filter='url(%23a)'%3E%3Cpath fill='%23fff' fill-opacity='.7' d='M4 0h28a3 3 0 0 1 3 3v54a3 3 0 0 1-3 3H4z'/%3E%3Cpath fill='%23ADADAD' d='M27.416 15.587a1.98 1.98 0 0 0-1.4-.587 1.96 1.96 0 0 0-1.401.587L11.463 28.873A1.6 1.6 0 0 0 11 30a1.6 1.6 0 0 0 .463 1.127l13.152 13.286a1.964 1.964 0 0 0 2.801 0 2.01 2.01 0 0 0 0-2.83L15.958 29.992 27.432 18.4c.76-.767.76-2.046-.016-2.814'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='a' width='39' height='68' x='0' y='0' color-interpolation-filters='sRGB' filterUnits='userSpaceOnUse'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' result='hardAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset dy='4'/%3E%3CfeGaussianBlur stdDeviation='2'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'/%3E%3CfeBlend in2='BackgroundImageFix' result='effect1_dropShadow_1914_5522'/%3E%3CfeBlend in='SourceGraphic' in2='effect1_dropShadow_1914_5522' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E");
}

.navigation-normal #swiper-button-next-product {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='39' height='68' fill='none'%3E%3Cg filter='url(%23a)'%3E%3Cpath fill='%23fff' fill-opacity='.7' d='M35 0H7a3 3 0 0 0-3 3v54a3 3 0 0 0 3 3h28z'/%3E%3Cpath fill='%23ADADAD' d='M11.584 15.587a1.98 1.98 0 0 1 1.4-.587 1.96 1.96 0 0 1 1.401.587l13.152 13.286A1.6 1.6 0 0 1 28 30a1.6 1.6 0 0 1-.463 1.127L14.385 44.413a1.964 1.964 0 0 1-2.801 0 2.01 2.01 0 0 1 0-2.83l11.458-11.591L11.568 18.4a2.007 2.007 0 0 1 .016-2.814'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='a' width='39' height='68' x='0' y='0' color-interpolation-filters='sRGB' filterUnits='userSpaceOnUse'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' result='hardAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset dy='4'/%3E%3CfeGaussianBlur stdDeviation='2'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'/%3E%3CfeBlend in2='BackgroundImageFix' result='effect1_dropShadow_1914_5525'/%3E%3CfeBlend in='SourceGraphic' in2='effect1_dropShadow_1914_5525' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E");
}

@media screen and (max-width: 1023px) {

    .navigation-normal #swiper-button-next-product,
    .navigation-normal #swiper-button-prev-product {
        display: none;
    }
}

.navigation-normal #swiper-button-next-product {
    right: -2px;
}

.navigation-normal #swiper-button-prev-product {
    left: -2px;
}

.navigation-normal #swiper-button-next-product:after,
.navigation-normal #swiper-button-prev-product:after {
    content: "";
}
</style>
