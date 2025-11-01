<template>
  <div class="content-submenu">
    <div class="list-category">
      <div>
        <RouterLink class="item-category" :to="`/`">Trang chủ</RouterLink>
      </div>
      <div>
        <RouterLink class="item-category" :to="`/news`">Giới thiệu</RouterLink>
      </div>
      <div v-for="(category, index) in categories" :key="index">
        <RouterLink class="item-category" :to="`/${category.slug}`">{{ category.name }}</RouterLink>
      </div>
      <!-- <div>
        <RouterLink class="item-category" :to="`/`">Tin tức</RouterLink>
      </div> -->
      <div>
        <RouterLink class="item-category" :to="`/news`">Liên hệ</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTopMenuStore } from '~/stores/top-menu';

const topMenuStore = useTopMenuStore();

const { data: categories } = await useAsyncData('top-menu', async () => {
  return await topMenuStore.fetchCategories();
});

</script>

<style scoped>
.content-submenu {
  align-items: center;
  display: flex;
  margin-top: 26px;
  padding-bottom: 24px
}

.content-submenu .all-category .btn-all-category {
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 10px;
  text-wrap: nowrap;
  color: rgb(255 255 255/1)
}

.content-submenu .slash {
  border-right-width: 1px;
  height: 24px;
  border-color: rgb(255 255 255/1)
}

.content-submenu .list-category {
  display: flex;
  max-width: 80vw;
  overflow: auto;
  text-align: center
}

.content-submenu .list-category .item-category {
  cursor: pointer;
  font-weight: 400;
  text-wrap: nowrap;
  color: rgb(255 255 255/1)
}

::-webkit-scrollbar {
  height: 4px;
  width: 4px
}

::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 2px
}

::-webkit-scrollbar-thumb {
  background: #c9cacd;
  border-radius: 2px
}

::-webkit-scrollbar-thumb:hover {
  background: #555
}

@media (min-width:1025px) {
  .content-submenu {
    gap: 10px
  }
}

@media (min-width:1281px) {
  .content-submenu {
    gap: 16px
  }
}

@media (min-width:1025px) {
  .content-submenu .all-category .btn-all-category {
    font-size: 13px
  }
}

@media (min-width:1281px) {
  .content-submenu .all-category .btn-all-category {
    font-size: 14px
  }
}

@media (min-width:1025px) {
  .content-submenu .list-category {
    gap: 12px
  }
}

@media (min-width:1281px) {
  .content-submenu .list-category {
    gap: 20px
  }
}

@media (min-width:1025px) {
  .content-submenu .list-category .item-category {
    font-size: 13px
  }
}

@media (min-width:1281px) {
  .content-submenu .list-category .item-category {
    font-size: 14px
  }
}

.layout-menu {
  display: flex;
  height: 100%;
  position: relative;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255/1);
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -4px rgba(0, 0, 0, .1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}

.group-categories {
  position: relative;
  width: 250px
}

.group-categories .item-group-category {
  align-items: center;
  border-bottom-width: 1px;
  cursor: pointer;
  display: flex;
  height: 30px;
  width: 100%;

  border-color: rgb(235 235 235/1);
  padding-left: 7px;
  padding-right: 1.25rem
}

.group-categories .item-group-category:hover {
  font-weight: 700
}

.group-categories .item-group-category .name-group {
  font-family: Arial, Helvetica, sans-serif !important;
  font-size: 14px;
  line-height: 1rem;
  text-wrap: nowrap;

  color: rgb(51 51 51/1)
}

.group-categories .item-group-category .name-group:hover {

  color: rgb(24 119 242/1)
}

.group-categories .item-group-category .name-group:after {
  content: ",";
  margin-right: 2px
}

.group-categories .item-group-category .name-group:last-of-type:after {
  content: ""
}

.group-categories .arrow-right {
  position: absolute;
  right: 10px
}

.categories {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  padding: 8px 16px;
  width: calc(100% - 250px);
}

.categories .category-parent {
  min-height: 28px
}

.categories .category-parent .item-category-parent {
  align-items: center;
  border-bottom-width: 1px;
  cursor: pointer;
  display: flex;
  gap: 4px;
  min-height: 28px;

  border-color: rgb(235 235 235/1)
}

.categories .category-parent .item-category-parent .title {
  font-family: Arial, Helvetica, sans-serif !important;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.25rem;
  text-transform: uppercase;

  color: rgb(51 51 51/1)
}

.categories .category-parent .item-category-parent .view-all {
  align-items: center;
  display: flex;
  font-size: 12px;
  font-weight: 500;
  gap: 2px;
  line-height: 1.25rem;

  color: rgb(47 128 237/1)
}

.categories .category-parent .category-child {
  margin-top: .5rem
}

.categories .category-parent .category-child .item-category-child {
  min-height: 28px
}

.categories .category-parent .category-child .item-category-child .title {
  font-family: Arial, Helvetica, sans-serif !important;
  font-size: 14px;
  font-weight: 400;

  color: rgb(51 51 51/1)
}

.categories .category-parent .category-child .item-category-child .title:hover {

  color: rgb(24 119 242/1)
}
</style>