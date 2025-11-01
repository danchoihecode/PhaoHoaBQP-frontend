<template>
    <div class="captcha-container">
        <div class="w-[110px] text-[14px]">
            <div class="w-full text-[14px]">
                <input v-model="userInput" type="text" placeholder="Mã bảo mật"
                    class="w-full border border-grey-400 rounded-[10px] focus:outline-none px-4 py-2.5 text-[14px] placeholder:text-grey-800 text-grey-800" />
            </div>
        </div>
        <canvas width="120" height="40"></canvas>
        <button @click="refreshCaptcha">
            <img src="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_2433_25496)'%3e%3cpath%20d='M30.1456%2021C30.6986%2019.436%2030.9996%2017.753%2030.9996%2016C30.9996%207.716%2024.2836%201%2015.9996%201C10.6566%201%205.96559%203.794%203.30859%208'%20stroke='%234A91E2'%20stroke-width='2'%20stroke-miterlimit='10'%20stroke-linejoin='round'/%3e%3cpath%20d='M3%200V8H11'%20stroke='%234A91E2'%20stroke-width='2'%20stroke-miterlimit='10'%20stroke-linejoin='round'/%3e%3cpath%20d='M1.854%2011C1.301%2012.564%201%2014.247%201%2016C1%2024.284%207.716%2031%2016%2031C21.343%2031%2026.034%2028.206%2028.691%2024'%20stroke='%234A91E2'%20stroke-width='2'%20stroke-miterlimit='10'%20stroke-linejoin='round'/%3e%3cpath%20d='M29%2032V24H21'%20stroke='%234A91E2'%20stroke-width='2'%20stroke-miterlimit='10'%20stroke-linejoin='round'/%3e%3cpath%20d='M16%207V16H23'%20stroke='%234A91E2'%20stroke-width='2'%20stroke-miterlimit='10'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2433_25496'%3e%3crect%20width='32'%20height='32'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                alt="Refresh Captcha" />
        </button>
        <div class="flex items-center justify-center max-w-[28px]">
            <img v-if="orderStore.captcha === 'error'"
                src="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.0003%200.666504C6.62699%200.666504%200.666992%206.6265%200.666992%2013.9998C0.666992%2021.3732%206.62699%2027.3332%2014.0003%2027.3332C21.3737%2027.3332%2027.3337%2021.3732%2027.3337%2013.9998C27.3337%206.6265%2021.3737%200.666504%2014.0003%200.666504ZM20.667%2018.7865L18.787%2020.6665L14.0003%2015.8798L9.21366%2020.6665L7.33366%2018.7865L12.1203%2013.9998L7.33366%209.21317L9.21366%207.33317L14.0003%2012.1198L18.787%207.33317L20.667%209.21317L15.8803%2013.9998L20.667%2018.7865Z'%20fill='%23D0021B'/%3e%3c/svg%3e"
                alt="Error" class="w-full h-auto object-contain" />
            <img v-if="orderStore.captcha === 'success'" src="/success.png" alt="Success"
                class="w-full h-auto object-contain" />
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useOrderStore } from '~/stores/order';

const captchaText = ref('');
const userInput = ref('');
const orderStore = useOrderStore();

const drawCaptcha = () => {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    captchaText.value = '';

    for (let i = 0; i < 5; i++) {
        captchaText.value += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '30px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(captchaText.value, 10, 30);
};

const validateCaptcha = () => {
    if (userInput.value === captchaText.value) {
        orderStore.captcha = 'success';
    } else {
        orderStore.captcha = 'error';
    }
};

const refreshCaptcha = () => {
    userInput.value = '';
    orderStore.captcha = '';
    drawCaptcha();
};

onMounted(() => {
    orderStore.captcha = '';
    drawCaptcha();
});

watch(userInput, (newValue) => {
    validateCaptcha();
});
</script>

<style scoped>
.captcha-container {
    align-items: center;
    display: flex;
    gap: 1.5rem;
    margin-top: 1.5rem
}

canvas {
    background-color: rgb(241 242 245/1);
    color: rgb(77 78 80/1)
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
</style>