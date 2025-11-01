<template>
    <div class="h-[43px] relative" v-click-outside="hideDropdown">
        <div class="relative w-full h-full border border-grey-400 rounded-[10px] bg-white">
            <div class="cursor-pointer w-full h-full" @click="toggleDropdown">
                <div class="flex items-center justify-between w-full h-full px-2.5 py-2">
                    <div style="width: calc(100% - 18px);">
                        <div class="truncate text-[14px] font-normal text-grey-800">{{ selectedItem.name || content }}
                        </div>
                    </div>
                    <div>
                        <img src="data:image/svg+xml,%3csvg%20width=&#39;18&#39;%20height=&#39;18&#39;%20viewBox=&#39;0%200%2018%2018&#39;%20fill=&#39;none&#39;%20xmlns=&#39;http://www.w3.org/2000/svg&#39;%3e%3cpath%20d=&#39;M13.4391%206.13477H8.7666H4.55908C3.83908%206.13477%203.47908%207.00477%203.98908%207.51477L7.8741%2011.3998C8.4966%2012.0223%209.5091%2012.0223%2010.1316%2011.3998L11.6091%209.92227L14.0166%207.51477C14.5191%207.00477%2014.1591%206.13477%2013.4391%206.13477Z&#39;%20fill=&#39;%234D4E50&#39;/%3e%3c/svg%3e"
                            width="18">
                    </div>
                </div>
            </div>
            <div v-show="dropdownVisible"
                class="absolute z-10 max-h-[200px] overflow-x-auto rounded w-[200px] mt-1 bg-white shadow-lg">
                <div v-for="item in items" :key="item.id" @click="selectItem(item)">
                    <div class="flex items-center p-2 w-full cursor-pointer hover:bg-grey-400 text-[12px]">
                        <div class="truncate">{{ item.name }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useLocationStore } from '~/stores/location';
import { useOrderStore } from '~/stores/order';

const props = defineProps({
    content: String
});
const locationStore = useLocationStore();
const orderStore = useOrderStore();
const dropdownVisible = ref(false);
const selectedItem = ref({});

const items = computed(() => locationStore.provinces);

function toggleDropdown() {
    dropdownVisible.value = !dropdownVisible.value;
}

function selectItem(item) {
    selectedItem.value = item;
    orderStore.province = selectedItem.value.name;
    dropdownVisible.value = false;
}

function hideDropdown() {
    dropdownVisible.value = false;
}
</script>


<style scoped>
.border-grey-400 {
    border-color: rgb(201 202 205/1)
}

.text-grey-800 {
    color: rgb(77 78 80/1)
}

.hover\:bg-grey-400:hover {
    background-color: rgb(201 202 205/1)
}

</style>