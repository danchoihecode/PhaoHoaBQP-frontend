<template>
    <div class="item-product-cart">
        <div class="thumb">
            <div class="img"><img :src="props.image" alt="product" class="h-auto max-h-[120px] object-contain"></div>
            <div class="flex justify-center">
                <button class="btn-delete" @click="deleteProduct">
                    <img src="data:image/svg+xml,%3csvg%20width=&#39;24&#39;%20height=&#39;24&#39;%20viewBox=&#39;0%200%2024%2024&#39;%20fill=&#39;none&#39;%20xmlns=&#39;http://www.w3.org/2000/svg&#39;%3e%3cpath%20d=&#39;M14.9%202H9.10001C8.42001%202%207.46%202.4%206.98%202.88L2.88%206.98001C2.4%207.46001%202%208.42001%202%209.10001V14.9C2%2015.58%202.4%2016.54%202.88%2017.02L6.98%2021.12C7.46%2021.6%208.42001%2022%209.10001%2022H14.9C15.58%2022%2016.54%2021.6%2017.02%2021.12L21.12%2017.02C21.6%2016.54%2022%2015.58%2022%2014.9V9.10001C22%208.42001%2021.6%207.46001%2021.12%206.98001L17.02%202.88C16.54%202.4%2015.58%202%2014.9%202Z&#39;%20stroke=&#39;%23ABADAF&#39;%20stroke-width=&#39;1.5&#39;%20stroke-linecap=&#39;round&#39;%20stroke-linejoin=&#39;round&#39;/%3e%3cpath%20d=&#39;M8.5%2015.5L15.5%208.5&#39;%20stroke=&#39;%23ABADAF&#39;%20stroke-width=&#39;1.5&#39;%20stroke-linecap=&#39;round&#39;%20stroke-linejoin=&#39;round&#39;/%3e%3cpath%20d=&#39;M15.5%2015.5L8.5%208.5&#39;%20stroke=&#39;%23ABADAF&#39;%20stroke-width=&#39;1.5&#39;%20stroke-linecap=&#39;round&#39;%20stroke-linejoin=&#39;round&#39;/%3e%3c/svg%3e"
                        alt="icon"> Xóa </button>
            </div>
        </div>
        <div class="info-product">
            <div class="title">{{ props.name }}</div>
            <div class="promotion" v-if="props.gifts">
                <div class="text-grey-800 text-[14px] mb-[6px] leading-4 font-normal">
                    Quà tặng
                </div>
                <ul class="list-disc pl-4">
                    <li v-for="gift in props.gifts" class="text-grey-800 text-[12px] leading-5 font-normal">
                        {{ gift.description }}</li>
                </ul>
            </div>
        </div>
        <div class="info-price flex flex-col gap-1">
            <div class="flex flex-col gap-[4px]">
                <div class="price_recommendation">{{ props.discount_price.toLocaleString('vi-VN') }}₫ </div>
                <div class="price">{{ props.price.toLocaleString('vi-VN') }}₫ </div>
            </div>
            <div class="quantity mt-auto">
                <div class="box-quantity">
                    <button class="minus" :disabled="isMinusDisabled"
                        :style="{ color: isMinusDisabled ? 'rgb(204,204,204)' : '' }" @click="decreaseQuantity"> -
                    </button>
                    <input class="input" type="text" :value="props.quantity" width="36" @keypress="validateInput"
                        @keydown="handleEnterKey" @blur="handleBlur">
                    <button class="plus" :disabled="isPlusDisabled"
                        :style="{ color: isPlusDisabled ? 'rgb(204,204,204)' : '' }" @click="increaseQuantity"> +
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, watchEffect } from 'vue';
import { useCartStore } from '~/stores/cart';

const cartStore = useCartStore();

const props = defineProps({
    id: Number,
    slug: String,
    name: String,
    image: String,
    price: Number,
    discount_price: Number,
    gifts: Array,
    quantity: Number,
    qtyInStock: Number
});

const isMinusDisabled = ref(false);
const isPlusDisabled = ref(false);

const increaseQuantity = () => {
    cartStore.increaseQuantity(props.id);
};

const decreaseQuantity = () => {
    cartStore.decreaseQuantity(props.id);
};

const deleteProduct = () => {
    cartStore.removeFromCart(props.id);
};

const updateQuantity = (event) => {
    let newQuantity = parseInt(event.target.value);
    if (newQuantity > parseInt(props.qtyInStock))
        cartStore.updateQuantity(props.id, props.qtyInStock);
    else
        cartStore.updateQuantity(props.id, newQuantity);
};

const validateInput = (event) => {
    const char = event.key;
    if (!/^[0-9]$/.test(char) && char !== 'Enter') {
        event.preventDefault();
    }
    const newValue = event.target.value + char;
    if (parseInt(newValue, 10) === 0) {
        event.preventDefault();
    }
};

const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
        updateQuantity(event);
    }
};

const handleBlur = (event) => {
    if (event.target.value === '')
        event.target.value = props.quantity;
    else
        updateQuantity(event);
};

watchEffect(() => {
    isMinusDisabled.value = props.quantity <= 1;
    isPlusDisabled.value = props.quantity >= props.qtyInStock;
});
</script>
<style scoped>
.item-product-cart {
    border-bottom-width: 1px;
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    margin-bottom: 1.5rem;
    border-color: rgb(235 236 238/1);
    padding-bottom: 1rem
}

.item-product-cart .thumb {
    grid-column: span 2/span 2;
    justify-self: center;
    padding-right: 1rem
}

@media (min-width:641px) {
    .item-product-cart .thumb {
        padding-right: 0
    }
}

.item-product-cart .thumb .img {
    display: flex;
    justify-content: center;
    padding: 15px
}

.item-product-cart .thumb .btn-delete {
    align-items: center;
    display: flex;
    font-size: 14px;
    gap: 2px;
    color: rgb(201 202 205/1)
}

.item-product-cart .info-product {
    grid-column: span 7/span 7;
    padding-bottom: 10px;
    padding-right: 1rem;
    padding-top: 10px
}

@media (min-width:641px) {
    .item-product-cart .info-product {
        padding-right: 0
    }
}

.item-product-cart .info-product .title {
    font-size: 14px;
    font-weight: 700;
    color: rgb(43 44 46/1)
}

.item-product-cart .info-product .promotion {
    margin-top: .75rem
}

.item-product-cart .info-price {
    grid-column: span 3/span 3
}

.item-product-cart .info-price .price_recommendation {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    text-align: right;
    color: rgb(208 2 27/1);

}

.item-product-cart .info-price .price {
    font-size: 12px;
    font-weight: 400;
    line-height: 13.8px;
    text-align: right;
    color: rgb(171 173 175/1);
    text-decoration-line: line-through
}

.item-product-cart .info-price .quantity {
    display: flex;
    justify-content: flex-end
}

.box-quantity {
    display: flex;
    height: 30px
}

.box-quantity .input {
    border-width: 1px;
    max-width: 36px;
    border-color: rgb(171 173 175/1);
    font-size: 14px;
    font-weight: 500;
    text-align: center
}

.box-quantity .input:focus {
    outline: 2px solid transparent;
    outline-offset: 2px
}

.box-quantity .minus {
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    border-width: 1px;
    border-color: rgb(171 173 175/1);
    color: rgb(74 145 226/1);
    font-size: 24px;
}

.box-quantity .plus {
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    border-width: 1px;
    border-color: rgb(171 173 175/1);
    color: rgb(74 145 226/1);
    font-size: 24px
}

.box-quantity .minus,
.box-quantity .plus {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 36px
}

.text-grey-800 {
    color: rgb(77 78 80/1)
}
</style>