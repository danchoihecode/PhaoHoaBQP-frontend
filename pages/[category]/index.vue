<template>
    <div class="content-home">
        <div>
            <img src="/phao-hoa-banner.png" alt="banner" class="object-contain w-full">
        </div>
        <div class="container mx-auto">
            <ProductGrid :category-name="item.name" :category-slug="category" />
        </div>

    </div>
</template>
<script setup>
import ProductGrid from '~/components/ProductGrid.vue';
import { useRoute } from 'vue-router';
import { useCategoryStore } from '~/stores/category';

const route = useRoute();
const category = computed(() => route.params.category);
const categoryStore = useCategoryStore();
const { data: item } = await useAsyncData(
    `category-${category.value}`,
    () => categoryStore.fetchCategory(category.value),
    {
        default: () => ({}),
        server: true,
        lazy: false,
    }
);

</script>
<style scoped>
.content-home {
    margin-top: -1px;
    padding-bottom: 40px;
    background-color: white;
}

.container {
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
}

@media (min-width:641px) {
    .container {
        max-width: 641px;
        padding-left: 0;
        padding-right: 0
    }
}

@media (min-width:769px) {
    .container {
        max-width: 769px
    }
}

@media (min-width:1025px) {
    .container {
        max-width: 1025px;
        padding-left: 0;
        padding-right: 0
    }
}

@media (min-width:1281px) {
    .container {
        max-width: 1281px;
        padding-left: 3.5rem;
        padding-right: 3.5rem
    }
}

@media (min-width:1537px) {
    .container {
        max-width: 1537px;
        padding-left: 10.5rem;
        padding-right: 10.5rem
    }
}
</style>