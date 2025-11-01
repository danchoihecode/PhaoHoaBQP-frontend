<template>
    <div class="relative navigation-circle">
        <Swiper :modules="[Navigation]" :slides-per-view="2" :space-between="15" :navigation="{
            nextEl: '#swiper-button-next-banner',
            prevEl: '#swiper-button-prev-banner'
        }" :loop="true">
            <SwiperSlide>
                <a href="/bep-tu">
                    <img src="/group-2033.png" alt="" class="w-full object-cover">
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="/may-giat-say">
                    <img src="/group-2073.png" alt="" class="w-full object-cover">
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="/bep-tu">
                    <img src="/group-2033.png" alt="" class="w-full object-cover">
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="/may-giat-say">
                    <img src="/group-2073.png" alt="" class="w-full object-cover">
                </a>
            </SwiperSlide>
        </Swiper>
        <div id="swiper-button-prev-banner" class="swiper-button-prev"></div>
        <div id="swiper-button-next-banner" class="swiper-button-next"></div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

</script>

<style scoped>
.navigation-circle #swiper-button-next-banner,
.navigation-circle #swiper-button-prev-banner {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 100%;
    width: 48px;
    display: block !important
}

.navigation-circle #swiper-button-prev-banner {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' fill='none'%3E%3Ccircle cx='24' cy='24' r='24' fill='%234A90E2' fill-opacity='.68'/%3E%3Cpath fill='%23fff' d='M29.372 15.367a1.25 1.25 0 0 0-1.77 0l-8.31 8.31a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77l-7.24-7.25 7.25-7.25c.48-.48.48-1.28-.01-1.76'/%3E%3C/svg%3E");
}

.navigation-circle #swiper-button-next-banner {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' fill='none'%3E%3Ccircle cx='24' cy='24' r='24' fill='%234A90E2' fill-opacity='.68' transform='matrix(-1 0 0 1 48 0)'/%3E%3Cpath fill='%23fff' d='M18.628 15.367a1.25 1.25 0 0 1 1.77 0l8.31 8.31a.996.996 0 0 1 0 1.41l-8.31 8.31c-.49.49-1.28.49-1.77 0a1.25 1.25 0 0 1 0-1.77l7.24-7.25-7.25-7.25c-.48-.48-.48-1.28.01-1.76'/%3E%3C/svg%3E");
}

.navigation-circle #swiper-button-next-banner {
    right: -24px
}

.navigation-circle #swiper-button-prev-banner {
    left: -24px
}

.navigation-circle #swiper-button-next-banner:after,
.navigation-circle #swiper-button-prev-banner:after {
    content: ""
}
</style>