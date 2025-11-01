<template>
    <div class="w-full flex justify-center mt-[40px]">
        <div class="all-action">
            <button class="btn-action" :class="{ active: activeButton === 1 }" @click="setActiveButton(1)">
                <div class="box"><img :src="props.image" alt="icon" class="object-contain"></div>
                <div class="h-[28px]">Hình ảnh</div>
            </button>
            <button class="btn-action" :class="{ active: activeButton === 3 }" @click="setActiveButton(3)">
                <div class="box"><img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGhSURBVHgBxVbbUcMwEFwy+ScdoFQAHZBUQDqIqQBSQZwOoAKSCoIrsKkAU4HdASkBLZLHiiz5gQXszE7i0+lWp9PrAsBWMkJYLCVLV8MnwmIlGbsaJpInhIU33gR/iKn1LaBqaOJe8knyEn68Se7xA7E5mnP+Cj9mkg8eMQ78EWqwu6nDoZDMLFsGP4THTqG5ZkrDFL+DNVTGFOKCYSlSlxidFh3BSh3kBs3MbqFqSJ9UCx0lN7ZYroOs0Y7E8kv0bzV1EeqBv2vBPQ0FwmCL80UidOzIdAoh1ksohFhvIdbs2bJxT1zDjRJq/k0hs0YCalEk6LHJh8CXEW2xr1OK4eDJfnQIRVDbJnZ1msB/ArSBS/rDEOKAd+iYOtem3upgG8kXq+2k7cSd5BVUJp1CPrHE+H9wiBEZ6puYCyxHD7jEzI6Zu9u3UImB+NfLk+DhOrNszFZoe4nzrHiXrYxv+iToKbZAc1Pnhv1giAmoy3GpvyOow3kPD8YcVwvUK3atYwmfc6iaUShGy3uxwtjMCnRkVIE1Yw34UB3zfuzMiPgCVWBfPd10bwsAAAAASUVORK5CYII="
                        alt="icon" class="object-contain"></div>
                <div class="h-[28px]">Thông tin sản phẩm</div>
            </button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const activeButton = ref(null);

const setActiveButton = (buttonId) => {
    activeButton.value = buttonId;
};
const props = defineProps({
    image: String
});
</script>
<style scoped>
.all-action {
    display: flex;
    gap: 10px
}

@media (min-width:1025px) {
    .all-action {
        gap: 12px
    }
}

.all-action .btn-action {
    align-items: flex-start;
    flex-direction: column;
    font-size: 11px;
    height: 91px;
    line-height: 14px;
    text-align: center;
    width: 52px;
    color: rgb(43 44 46/1)
}

@media (min-width:1025px) {
    .all-action .btn-action {
        font-size: 12px;
        width: 56px
    }
}

.all-action .btn-action .box {
    align-items: center;
    border-radius: 3px;
    border-width: 1px;
    display: flex;
    height: 52px;
    justify-content: center;
    margin-bottom: .5rem;
    width: 100%;
    border-color: rgb(235 236 238/1);
    padding: 10px
}

@media (min-width:1025px) {
    .all-action .btn-action .box {
        height: 56px
    }
}

.all-action .btn-action.active .box {
    border-color: rgb(251 110 46/1)
}
</style>