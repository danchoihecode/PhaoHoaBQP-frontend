<template>
    <div class="info-customer">
        <div class="text-grey-800 text-[14px]"> THÔNG TIN KHÁCH HÀNG </div>
        <div class="gender">
            <RadioButton :content="'Anh'" :name="'gender'" :index="0" :selected="orderStore.gender === 0"
                @change="updateGender(0)" />
            <RadioButton :content="'Chị'" :name="'gender'" :index="1" :selected="orderStore.gender === 1"
                @change="updateGender(1)" />
        </div>
        <div class="base-info">
            <div class="col-span-1">
                <div>
                    <div class="w-full">
                        <input type="text" placeholder="Họ và tên" v-model="orderStore.name"
                            class="w-full border border-grey-400 rounded-[10px] focus:outline-none px-4 py-2.5 text-[14px] placeholder:text-grey-800 text-grey-800"
                            name="file">
                    </div>
                </div>
            </div>
            <div class="col-span-1">
                <div>
                    <div class="w-full">
                        <input type="text" placeholder="Số điện thoại" v-model="orderStore.phone"
                            class="w-full border border-grey-400 rounded-[10px] focus:outline-none px-4 py-2.5 text-[14px] placeholder:text-grey-800 text-grey-800"
                            name="file">
                    </div>
                </div>
            </div>
            <div class="col-span-2">
                <div>
                    <div class="w-full">
                        <input type="text" placeholder="Yêu cầu khác (không bắt buộc)" v-model="orderStore.requirement"
                            class="w-full border border-grey-400 rounded-[10px] focus:outline-none px-4 py-2.5 text-[14px] placeholder:text-grey-800 text-grey-800"
                            name="file">
                    </div>
                </div>
            </div>
        </div>
        <div class="delivery">
            <div>
                <span class="font-semibold">Để được phục vụ
                    nhanh hơn,</span><span> chọn cách thức nhận hàng</span>
            </div>
            <div class="flex gap-[20px] sm:mt-0 mt-[10px]">
                <RadioButton :content="'Giao tận nơi'" :name="'delivery'" :index="0"
                    :selected="orderStore.localDelivery" @change="updateDelivery(true)" />
                <RadioButton :content="'Nhận tại kho'" :name="'delivery'" :index="1"
                    :selected="!orderStore.localDelivery" @change="updateDelivery(false)" />
            </div>
        </div>
        <div class="detail-address" v-show="orderStore.localDelivery">
            <div class="item-field">
                <DetailAddress :content="'Chọn Tỉnh/TP'" />
            </div>
            <div class="item-field">
                <div>
                    <div class="w-full">
                        <input type="text" placeholder="Nhập địa chỉ" v-model="orderStore.home"
                            class="w-full border border-grey-400 rounded-[10px] focus:outline-none px-4 py-2.5 text-[14px] placeholder:text-grey-800 text-grey-800"
                            name="file">
                    </div>
                </div>
            </div>
        </div>
        <div class="list-address" v-show="!orderStore.localDelivery">
            <RadioButton v-for="(supermarket, i) in supermarkets" :content="supermarket.address" :name="'supermarket'"
                :index="i" :selected="orderStore.supermarket === supermarket.id" @change="updateSupermarket(supermarket.id)" />
        </div>
    </div>
</template>
<script setup>
import DetailAddress from './DetailAddress.vue';
import RadioButton from './RadioButton.vue';
import { ref } from 'vue';
import { useOrderStore } from '~/stores/order';
import { useSupermarketStore } from '~/stores/supermarket';

const orderStore = useOrderStore();
const supermarketStore = useSupermarketStore();
const supermarkets = ref([]);

onMounted(async () => {
    supermarkets.value = await supermarketStore.fetchStores();
});

function updateDelivery(value) {
    orderStore.localDelivery = value;
}

function updateGender(value) {
    orderStore.gender = value;
}

function updateSupermarket(value) {
    orderStore.supermarket = value;
}

function toggleCard() {
    orderStore.card = !orderStore.card;
}

function toggleBill() {
    orderStore.bill = !orderStore.bill;
}

</script>
<style scoped>
.info-customer {
    margin-top: 1.5rem
}

.info-customer .gender {
    display: flex;
    gap: 60px;
    margin-top: 1rem
}

.info-customer .base-info {
    -moz-column-gap: 28px;
    column-gap: 28px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 1rem;
    row-gap: 20px
}

.info-customer .delivery {
    align-items: center;
    font-size: 14px;
    gap: 20px;
    margin-top: 20px;
    color: rgb(77 78 80/1)
}

@media (min-width:641px) {
    .info-customer .delivery {
        display: flex
    }
}

.info-customer .list-address {
    display: flex;
    flex-direction: column
}

.info-customer .detail-address,
.info-customer .list-address {
    border-radius: 6px;
    gap: 1rem;
    margin-top: 10px;
    background-color: rgb(248 248 248/1);
    padding: 1.5rem 1rem
}

.info-customer .detail-address {
    display: grid;
    grid-template-columns: 1fr;
}

.info-customer .detail-address .item-field {
    grid-column: span 2/span 2
}

@media (min-width:641px) {
    .info-customer .detail-address .item-field {
        grid-column: span 1/span 1
    }
}

.border-grey-400 {
    border-color: rgb(201 202 205/1)
}

.placeholder\:text-grey-800::-moz-placeholder {

    color: rgb(77 78 80/1)
}

.placeholder\:text-grey-800::placeholder {

    color: rgb(77 78 80/1)
}

.text-grey-800 {

    color: rgb(77 78 80/1)
}

.info-customer .detail-address .item-field:first-child {
    width: 30%;
    min-width: 200px; 
}

.info-customer .detail-address .item-field:last-child {
    width: 100%;
}
</style>