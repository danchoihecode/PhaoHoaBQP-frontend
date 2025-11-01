<template>
    <router-link :to="props.categoryLink" class="item-top-category">
        <div class="img">
            <img :src="props.categoryImage" alt="thumb" class="w-[71px] h-[71px] object-cover rounded-full">
        </div>
        <div class="py-[5px] lg:w-[129px]">
            <div class="text-name">{{ props.categoryName }}</div>
            <div class="price text-nowrap"> từ <span class="text-price">{{ props.categoryPrice }}đ</span>
            </div>
        </div>
    </router-link>
</template>
<script setup>
const props = defineProps({
    categoryLink: String,
    categoryImage: String,
    categoryName: String,
    categoryPrice: String,
});
</script>
<style scoped>
.item-top-category {
    align-items: center;
    border-radius: 10px;
    display: flex;
    gap: 13px;
    justify-content: center;
    background-color: rgb(255 255 255/1);
    padding-bottom: 9px;
    padding-top: 9px;
    width: 80%;
}

.item-top-category .text-name {
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.item-top-category .price,
.item-top-category .text-name {
    font-size: 20px;
    line-height: 23px;
    color: rgb(43 44 46/1)
}

.item-top-category .price {
    margin-top: 5px
}
</style>