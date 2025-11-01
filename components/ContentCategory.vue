<template>
    <div class="content-category">
        <div class="banner">
            <img :src="props.bannerLink" alt="banner">
        </div>
        <div :style="{ backgroundColor: props.bgColor }"
            class="lg:pb-7 pb-[10px] lg:pt-4 pt-[10px] lg:rounded-b-[10px]">
            <ProductSlider :group-size="props.groupSize" :slug="props.slug" :slider="props.slider" />
        </div>
    </div>
</template>
<script setup>
import ProductSlider from './ProductSlider.vue';
const props = defineProps({
    slug: String,
    bannerLink: String,
    bgColor: String,
    groupSize: Number,
    slider: Boolean
})
</script>
<style scoped>
.content-category {
    border-radius: 16px;
    margin-top: 0;
    max-width: 80vw;
    margin: auto;
}

@media (min-width:769px) {
    .content-category {
        margin-top: 30px
    }
}

.banner img {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    width: 100%
}

@media (min-width:1025px) {
    .banner img {
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem
    }
}
</style>