<template>
    <div class="relative navigation-normal">
        <Swiper :modules="[Navigation]" :slides-per-view="1" :space-between="30" :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }">
            <SwiperSlide v-for="(image, index) in props.images" :key="index" >
                <div class="flex justify-center w-full lg:h-[404px] h-[263px]">
                    <img :src="image.img_url" class="w-full h-full object-contain">
                </div>
            </SwiperSlide>

        </Swiper>
        <div class="swiper-button-next custom-next"></div>
        <div class="swiper-button-prev custom-prev"></div>
    </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const props = defineProps({
    images:Array
});
</script>
<style scoped>
.navigation-normal .swiper-button-next,
.navigation-normal .swiper-button-prev {
    background-position: 50%;
    background-repeat: no-repeat;
    height: 60px;
    width: 34px
}

.navigation-normal .custom-prev {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='39' height='68' fill='none'%3E%3Cg filter='url(%23a)'%3E%3Cpath fill='%23fff' fill-opacity='.7' d='M4 0h28a3 3 0 0 1 3 3v54a3 3 0 0 1-3 3H4z'/%3E%3Cpath fill='%23ADADAD' d='M27.416 15.587a1.98 1.98 0 0 0-1.4-.587 1.96 1.96 0 0 0-1.401.587L11.463 28.873A1.6 1.6 0 0 0 11 30a1.6 1.6 0 0 0 .463 1.127l13.152 13.286a1.964 1.964 0 0 0 2.801 0 2.01 2.01 0 0 0 0-2.83L15.958 29.992 27.432 18.4c.76-.767.76-2.046-.016-2.814'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='a' width='39' height='68' x='0' y='0' color-interpolation-filters='sRGB' filterUnits='userSpaceOnUse'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' result='hardAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset dy='4'/%3E%3CfeGaussianBlur stdDeviation='2'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'/%3E%3CfeBlend in2='BackgroundImageFix' result='effect1_dropShadow_1914_5522'/%3E%3CfeBlend in='SourceGraphic' in2='effect1_dropShadow_1914_5522' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: contain;
    width: 39px
}

.navigation-normal .custom-next {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='39' height='68' fill='none'%3E%3Cg filter='url(%23a)'%3E%3Cpath fill='%23fff' fill-opacity='.7' d='M35 0H7a3 3 0 0 0-3 3v54a3 3 0 0 0 3 3h28z'/%3E%3Cpath fill='%23ADADAD' d='M11.584 15.587a1.98 1.98 0 0 1 1.4-.587 1.96 1.96 0 0 1 1.401.587l13.152 13.286A1.6 1.6 0 0 1 28 30a1.6 1.6 0 0 1-.463 1.127L14.385 44.413a1.964 1.964 0 0 1-2.801 0 2.01 2.01 0 0 1 0-2.83l11.458-11.591L11.568 18.4a2.007 2.007 0 0 1 .016-2.814'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='a' width='39' height='68' x='0' y='0' color-interpolation-filters='sRGB' filterUnits='userSpaceOnUse'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' result='hardAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset dy='4'/%3E%3CfeGaussianBlur stdDeviation='2'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'/%3E%3CfeBlend in2='BackgroundImageFix' result='effect1_dropShadow_1914_5525'/%3E%3CfeBlend in='SourceGraphic' in2='effect1_dropShadow_1914_5525' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: contain;
    width: 39px
}

@media screen and (max-width:1023px) {

    .navigation-normal .custom-next,
    .navigation-normal .custom-prev {
        display: none
    }
}

.navigation-normal .swiper-button-next {
    right: -7px
}

.navigation-normal .swiper-button-prev {
    left: -7px
}

.navigation-normal .custom-next:after,
.navigation-normal .custom-prev:after {
    content: ""
}
</style>