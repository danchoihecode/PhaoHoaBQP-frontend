<template>
  <div class="flex items-center justify-between my-4">
    <div class="lg:text-[15px] text-[16px] font-bold text-grey-800">{{ props.total }} {{ props.categoryName }}
    </div>
    <div class="w-[148px] h-[34px]" v-click-outside="hideDropdown">
      <div class="relative w-full h-full border border-grey-400 rounded-[10px] bg-white">
        <div class="cursor-pointer w-full h-full" @click="toggleDropdown">
          <div class="flex items-center justify-between w-full h-full px-2.5 py-2">
            <div style="width:calc(100% - 18px);">
              <div class="truncate text-[12px] font-normal text-grey-800">Xếp theo: {{ selectedFilter }}</div>
            </div>
            <div>
              <img
                src="data:image/svg+xml,%3csvg%20width=&#39;18&#39;%20height=&#39;18&#39;%20viewBox=&#39;0%200%2018%2018&#39;%20fill=&#39;none&#39;%20xmlns=&#39;http://www.w3.org/2000/svg&#39;%3e%3cpath%20d=&#39;M13.4391%206.13477H8.7666H4.55908C3.83908%206.13477%203.47908%207.00477%203.98908%207.51477L7.8741%2011.3998C8.4966%2012.0223%209.5091%2012.0223%2010.1316%2011.3998L11.6091%209.92227L14.0166%207.51477C14.5191%207.00477%2014.1591%206.13477%2013.4391%206.13477Z&#39;%20fill=&#39;%234D4E50&#39;/%3e%3c/svg%3e"
                width="18">
            </div>
          </div>
        </div>
        <div v-show="showDropdown" class="max-h-[200px] overflow-x-auto rounded w-[200px] mt-1 items" id="cms-select">
          <div v-for="filter in filters" :key="filter" @click="selectFilter(filter)"
            class="flex items-center p-2 w-full cursor-pointer hover:bg-gray-400 text-[12px]">
            <div class="truncate">{{ filter }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useProductStore } from '~/stores/product';

const productStore = useProductStore();
const emits = defineEmits(['filterSelected']);
const props = defineProps({
  categoryName: String,
  total: Number
})

const selectedFilter = ref('Mới nhất');
const showDropdown = ref(false);
const filters = ['Tăng dần', 'Giảm dần', 'Mới nhất'];

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

function hideDropdown() {
  showDropdown.value = false;
}

const selectFilter = (filter) => {
  selectedFilter.value = filter;
  hideDropdown();
  emits('filterSelected', filter);
};
</script>



<style scoped>
.text-grey-800 {
  color: rgb(77, 78, 80, 1)
}

.border-grey-400 {
  border-color: rgb(201, 202, 205, 1)
}

.items {
  background: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, .251);
  left: 0;
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 11
}

.items::-webkit-scrollbar {
  width: 5px
}

.items::-webkit-scrollbar-thumb {
  background-color: #abadaf;
  border-radius: 2.5px
}
</style>