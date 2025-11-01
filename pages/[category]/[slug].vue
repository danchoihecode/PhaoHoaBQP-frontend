<template>
    <div class="product-detail" v-if="product.name !== undefined">
        <div class="container mx-auto pt-6">
            <div>
                <div class="text-[18px] leading-5 font-bold break-words mb-1">
                    {{ product.name }}
                </div>
                <!-- <div class="flex items-center justify-between mb-[14px] w-full">
                    <div class="flex items-center lg:justify-start justify-between w-full">
                        <div class="flex items-center">
                            <div class="flex items-center cursor-pointer">
                                <div v-for="star in Math.round(product.rating)" :key="star" class="mr-1 mb-[2px]">
                                    <svg width="14" height="13" viewBox="0 0 18 17" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.25726 13.2339L9 13.0795L8.74274 13.2339L4.195 15.9627L5.40078 10.8242L5.47005 10.529L5.24029 10.3311L1.2285 6.87605L6.51302 6.43034L6.81292 6.40504L6.93094 6.12819L9 1.27495L11.0691 6.12819L11.1871 6.40504L11.487 6.43034L16.7715 6.87605L12.7597 10.3311L12.53 10.529L12.5992 10.8242L13.805 15.9627L9.25726 13.2339Z"
                                            stroke="#FA6B31" fill="#FA6B31"></path>
                                    </svg>
                                </div>
                            </div>
                            <div
                                class="flex gap-1 text-[13px] font-normal lg:text-grey-800  leading-[15px] text-nowrap">
                                {{ product.total_reviews }} <span class="lg:block hidden">đánh giá</span>
                            </div>
                        </div>
                        <span
                            class="text-primary-500 text-[13px] font-normal mx-2 cursor-pointer lg:block hidden leading-[15px]"
                            href="">(Viết đánh giá)
                        </span>
                        <div class="flex items-center cursor-pointer gap-1 leading-[15px]" href="/compare-product">
                            <img src="data:image/svg+xml,%3csvg%20width=&#39;13&#39;%20height=&#39;14&#39;%20viewBox=&#39;0%200%2013%2014&#39;%20fill=&#39;none&#39;%20xmlns=&#39;http://www.w3.org/2000/svg&#39;%3e%3cpath%20d=&#39;M6.50293%200.5C2.91893%200.5%200.00292969%203.416%200.00292969%207C0.00292969%2010.584%202.91893%2013.5%206.50293%2013.5C10.0869%2013.5%2013.0029%2010.584%2013.0029%207C13.0029%203.416%2010.0869%200.5%206.50293%200.5ZM6.50293%201.5C9.54643%201.5%2012.0029%203.9565%2012.0029%207C12.0029%2010.0435%209.54643%2012.5%206.50293%2012.5C3.45943%2012.5%201.00293%2010.0435%201.00293%207C1.00293%203.9565%203.45943%201.5%206.50293%201.5ZM6.00293%204V6.5H3.50293V7.5H6.00293V10H7.00293V7.5H9.50293V6.5H7.00293V4H6.00293Z&#39;%20fill=&#39;%234A91E2&#39;/%3e%3c/svg%3e"
                                alt="icon compare">
                            <div class="text-[14px] font-normal leading-3 text-primary-500">So sánh</div>
                        </div>
                    </div>
                    <button
                        class="text-white font-bold text-[12px] bg-primary-700 rounded-md w-[60px] h-[22px] lg:block hidden">
                        Share
                    </button>
                </div> -->
                <hr class="border-grey-300 mt-[14px] mb-4">
                <div class="grid grid-cols-5 gap-x-[36px]">
                    <div class="col-span-3">
                        <ImageSlider :images="product.images" />
                        <ProductSummary :image="product.images[0].img_url" />
                        <div class="w-full mt-[42px]">
                            <div class="text-grey-900 text-[20px] leading-5 font-bold mb-6">Thông tin sản phẩm
                            </div>
                            <ProductInformation :description="product.description" :embedUrl="embedUrl" />
                        </div>

                    </div>

                    <div class="col-span-2">
                        <div class="flex">
                            <div class="text-[16px] font-light text-grey-800 mb-[10px] leading-[18px]"> Mã sản phẩm:
                                <span class="font-bold ml-1">{{ product.sku }}</span>
                            </div>
                        </div>
                        <div class="flex items-center text-[16px] font-normal text-grey-900 mb-4">
                            <div> Giá bán: <span class="text-[20px] text-error font-bold leading-[26px] ml-1"
                                    style="word-spacing:-5px;">{{ product.discount_price_format }}
                                    <span class="text-[16px]">₫</span>
                                </span>
                            </div>
                            <div> <span class="text-[16px] price font-normal leading-[18.4px] ml-1 line-through"
                                    style="word-spacing:-5px;">{{ product.price_format }} <span
                                        class="text-[12px]">₫</span>
                                </span>
                            </div>
                        </div>
                        <div class="flex justify-center w-full mb-4">
                                <img src="/slide-4925.png" class="w-full h-full object-contain">
                        </div>

                        <div class="mb-6 grid grid-cols-2 gap-x-2 gap-y-[10px]">
                            <div class="col-span-2" @click="addToCart">
                                <div
                                    class="w-full px-[5px] py-[6px] flex justify-center items-center rounded-md cursor-pointer bg-error bg-error">
                                    <div>
                                        <div class="text-[15px] font-bold text-white uppercase text-center leading-5">
                                            MUA NGAY</div>
                                        <div
                                            class="text-white font-normal text-[12px] flex items-center leading-[14px] justify-center">
                                            Xem hàng không mua không sao
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-2 text-[16px] font-medium text-primary-800 text-center mt-1">Cần tư vấn? Gọi ngay!</div>
                            <div class="col-span-2 grid grid-cols-5 gap-x-[1px] mb-[10px]">
                                <div class="bg-grey-300 flex justify-center p-2.5 rounded-l-[6px]">
                                    <img src="data:image/svg+xml,%3csvg%20width=&#39;32&#39;%20height=&#39;32&#39;%20viewBox=&#39;0%200%2032%2032&#39;%20fill=&#39;none&#39;%20xmlns=&#39;http://www.w3.org/2000/svg&#39;%3e%3cpath%20d=&#39;M23.4934%2014.3355C22.9201%2014.3355%2022.4667%2013.8688%2022.4667%2013.3087C22.4667%2012.8154%2021.9734%2011.7888%2021.1467%2010.8954C20.3334%2010.0288%2019.4401%209.52208%2018.6934%209.52208C18.1201%209.52208%2017.6667%209.05542%2017.6667%208.49542C17.6667%207.93542%2018.1334%207.46875%2018.6934%207.46875C20.0267%207.46875%2021.4267%208.18875%2022.6534%209.48208C23.8001%2010.6954%2024.5334%2012.2021%2024.5334%2013.2954C24.5334%2013.8688%2024.0668%2014.3355%2023.4934%2014.3355Z&#39;%20fill=&#39;%23ABADAF&#39;/%3e%3cpath%20d=&#39;M28.3064%2014.3327C27.733%2014.3327%2027.2797%2013.866%2027.2797%2013.306C27.2797%208.57268%2023.4264%204.73268%2018.7064%204.73268C18.133%204.73268%2017.6797%204.26602%2017.6797%203.70602C17.6797%203.14602%2018.133%202.66602%2018.693%202.66602C24.5597%202.66602%2029.333%207.43935%2029.333%2013.306C29.333%2013.866%2028.8664%2014.3327%2028.3064%2014.3327Z&#39;%20fill=&#39;%23ABADAF&#39;/%3e%3cpath%20d=&#39;M14.7334%2019.9327L12.2667%2022.3993C11.7467%2022.9193%2010.9201%2022.9193%2010.3867%2022.4127C10.2401%2022.266%2010.0934%2022.1327%209.94675%2021.986C8.57341%2020.5993%207.33341%2019.146%206.22675%2017.626C5.13341%2016.106%204.25341%2014.586%203.61341%2013.0793C2.98675%2011.5594%202.66675%2010.106%202.66675%208.71935C2.66675%207.81268%202.82675%206.94602%203.14675%206.14602C3.46675%205.33268%203.97341%204.58602%204.68008%203.91935C5.53341%203.07935%206.46675%202.66602%207.45341%202.66602C7.82675%202.66602%208.20008%202.74602%208.53341%202.90602C8.88008%203.06602%209.18675%203.30602%209.42675%203.65268L12.5201%208.01268C12.7601%208.34602%2012.9334%208.65268%2013.0534%208.94602C13.1734%209.22602%2013.2401%209.50602%2013.2401%209.75935C13.2401%2010.0793%2013.1467%2010.3993%2012.9601%2010.706C12.7867%2011.0127%2012.5334%2011.3327%2012.2134%2011.6527L11.2001%2012.706C11.0534%2012.8527%2010.9867%2013.026%2010.9867%2013.2393C10.9867%2013.346%2011.0001%2013.4393%2011.0267%2013.546C11.0667%2013.6527%2011.1067%2013.7327%2011.1334%2013.8127C11.3734%2014.2527%2011.7867%2014.826%2012.3734%2015.5194C12.9734%2016.2127%2013.6134%2016.9193%2014.3067%2017.626C14.4401%2017.7593%2014.5867%2017.8927%2014.7201%2018.026C15.2534%2018.546%2015.2667%2019.3993%2014.7334%2019.9327Z&#39;%20fill=&#39;%23ABADAF&#39;/%3e%3cpath%20d=&#39;M29.2929%2024.4387C29.2929%2024.8121%2029.2262%2025.1988%2029.0929%2025.5721C29.0529%2025.6788%2029.0129%2025.7854%2028.9595%2025.8921C28.7329%2026.3721%2028.4395%2026.8254%2028.0529%2027.2521C27.3995%2027.9721%2026.6795%2028.4921%2025.8662%2028.8254C25.8529%2028.8254%2025.8395%2028.8388%2025.8262%2028.8388C25.0395%2029.1588%2024.1862%2029.3321%2023.2662%2029.3321C21.9062%2029.3321%2020.4529%2029.0121%2018.9195%2028.3588C17.3862%2027.7054%2015.8529%2026.8254%2014.3329%2025.7188C13.8129%2025.3321%2013.2929%2024.9454%2012.7996%2024.5321L17.1595%2020.1721C17.5329%2020.4521%2017.8662%2020.6654%2018.1462%2020.8121C18.2129%2020.8388%2018.2929%2020.8788%2018.3862%2020.9188C18.4929%2020.9588%2018.5995%2020.9721%2018.7195%2020.9721C18.9462%2020.9721%2019.1195%2020.8921%2019.2662%2020.7454L20.2795%2019.7454C20.6129%2019.4121%2020.9329%2019.1588%2021.2395%2018.9988C21.5462%2018.8121%2021.8529%2018.7188%2022.1862%2018.7188C22.4395%2018.7188%2022.7062%2018.7721%2022.9995%2018.8921C23.2929%2019.0121%2023.5995%2019.1854%2023.9329%2019.4121L28.3462%2022.5454C28.6929%2022.7854%2028.9329%2023.0654%2029.0795%2023.3988C29.2129%2023.7321%2029.2929%2024.0654%2029.2929%2024.4387Z&#39;%20fill=&#39;%23ABADAF&#39;/%3e%3c/svg%3e"
                                        alt="icon calling">
                                </div>
                                <div class="col-span-2 p-1 bg-grey-300">
                                    <div class="text-[16px] font-bold text-error text-center cursor-pointer leading-5">
                                        <a href="tel:18001161">1800.1161</a>
                                    </div>
                                    <div class="text-[13px] font-normal text-grey-800 text-center mt-1">(8:00 - 19:00)
                                    </div>
                                </div>
                                <div class="col-span-2 p-1 bg-grey-300 rounded-r-[6px]">
                                    <div
                                        class="text-[16px] font-bold text-primary-800 text-center cursor-pointer leading-5">
                                        <a href="tel:0937222066">0937.222.066</a>
                                    </div>
                                    <div class="text-[13px] font-normal text-grey-800 text-center mt-1">(8:00 - 19:00)
                                    </div>
                                </div>
                            </div>
                            <div v-if="product.additional_info.length > 0" class="col-span-2">
                                <ProductSpecification :name="product.name" :content="product.additional_info" />
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div v-show="showPopup">
            <div class="bg-hidden"></div>
            <div class="addcartsuccess w-[30%] h-auto">
                <div class="row text-center">
                    <strong class="text-[#3fb846]">Thêm vào giỏ hàng thành công</strong>
                </div>
                <div class="flex items-center justify-center gap-2 mb-5">
                    <img :src="product.images[0].img_url" alt="image" class="w-12 h-12">
                    <div class="text-left">{{ product.name }}</div>
                </div>
                <div class="flex justify-center mb-3">
                    <button
                        class="btn-submit bg-gradient-to-b from-secondary-600 to-secondary-900 text-white font-bold rounded-lg px-6 py-3 text-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        @click="togglePopup">TIẾP TỤC MUA SẮM
                    </button>
                </div>
                <div class="cursor-pointer text-[#288ad6] text-center" @click="goToCart">
                    Xem giỏ hàng
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <p>Loading ...</p>
    </div>
</template>
<script setup>
import ImageSlider from '~/components/ImageSlider.vue';
import ProductInformation from '~/components/ProductInformation.vue';
import ProductSpecification from '~/components/ProductSpecification.vue';
import ProductSummary from '~/components/ProductSummary.vue';
import { useBreadCrumbStore } from '~/stores/bread-crumb';
import { useCartStore } from '~/stores/cart';
import { useProductStore } from '~/stores/product';
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCategoryStore } from '~/stores/category';

const route = useRoute();
const router = useRouter();
const slug = route.params.slug;
const category = route.params.category;

const productStore = useProductStore();
const breadCrumbStore = useBreadCrumbStore();
const categoryStore = useCategoryStore();
const showPopup = ref(false);
const { data: product } = await useAsyncData('productDetail', async () => {
    return await productStore.fetchProductDetail(slug);
});
const { data: item } = await useAsyncData('categoryName', async () => {
    return await categoryStore.fetchCategory(category);
});

const embedUrl = computed(() => {
    const videoId = product.value?.youtube_url;
    return `https://www.youtube.com/embed/${videoId}`;
});


breadCrumbStore.setBreadCrumbs([
    { label: 'Trang chủ', path: '/' },
    { label: item.value.name, path: '/' + category },
    { label: product.value.name, path: '/' }
]);


const addToCart = () => {
    useCartStore().addToCart(product.value.id);
    togglePopup();
};
const togglePopup = () => {
    showPopup.value = !showPopup.value;
}

const goToCart = () => {
    togglePopup();
    router.push('/cart');
}
</script>

<style scoped>
.product-detail {
    max-width: 80vw;
    margin: auto;
    margin-bottom: 40px;
}

.bg-error {
    background-color: rgb(208 2 27/1)
}

.bg-secondary-800 {
    background-color: rgb(251 110 46/1)
}

.bg-primary-500 {
    background-color: rgb(74 145 226/1)
}

.bg-primary-700 {
    background-color: rgb(24 119 242/1)
}

.bg-grey-300 {
    background-color: rgb(235 236 238/1)
}

.text-error {
    color: rgb(208 2 27/1)
}

.price {
    color: #6d6e70;
}

.text-primary-800 {
    color: rgb(56 97 175/1)
}

.text-grey-900 {
    color: rgb(43 44 46/1)
}

.text-grey-800 {
    color: rgb(77 78 80/1)
}

.lg\:text-grey-800 {
    color: rgb(77 78 80/1);
}

.text-primary-500 {
    color: rgb(74 145 226/1)
}

.border-grey-300 {
    border-color: rgb(235 236 238/1)
}

.block__promo {
    border: 1px solid #e0e0e0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

}

.pr-top {
    background-color: #f1f2f5;
    border: 1px solid #C9CACD;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 8px 10px
}

.pr-txtb {
    font-weight: bold;
    color: #2B2C2E;
}

.pr-top .pr-txt {
    color: #6D6E70;
    font-size: 12px;
    line-height: 1.4;
    margin-top: 5px;
    font-style: normal
}

.pr-content {
    border: 1px solid #C9CACD;
}

.pr-content .pr-item {
    padding: 15px 10px 10px 10px
}

.pr-content .pr-item:last-child {
    border: 0
}

.pr-content .pr-item p {
    line-height: 1.5
}

.divb {
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.divb:last-child {
    margin-bottom: 0
}

.divb .nb {
    align-items: center;
    border-radius: 50%;
    display: flex;
    height: 18px;
    justify-content: center;
    background-color: rgb(74 145 226/1);
    font-size: 13px;
    font-weight: 700;
    line-height: 15px;
    padding-left: 5.5px;
    padding-right: 5.5px;
    color: rgb(255 255 255/1);
}

.divb-right {
    padding-left: 14px
}

.divb-right p {
    font-size: 14px;
    color: #4D4E50
}

.product-extra-info-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0px 1px;
    padding: 40px 18px 0px 18px;
    border-radius: 8px;
    border: 1px solid #ebecee;
}

.divider {
    position: relative;
    border-color: #ebecee;
}

.bg-hidden {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #333;
    opacity: .8;
    z-index: 999
}

.addcartsuccess {
    position: fixed;
    background: #fff;
    border-radius: 4px;
    padding: 10px 20px 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999
}

.addcartsuccess .row {
    display: block;
    overflow: hidden;
    padding: 10px 0
}

.addcartsuccess .row strong {
    display: inline-block;
    vertical-align: middle;
    padding: 10px 0;
    width: 70%
}

.btn-submit {
    cursor: pointer;
    font-weight: 700;
    height: 48px;
    width: 348px
}

.from-secondary-600 {
    --tw-gradient-from: #ffde00 var(--tw-gradient-from-position);
    --tw-gradient-to: rgba(255, 222, 0, 0) var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)
}

.to-secondary-900 {
    --tw-gradient-to: #ec7823 var(--tw-gradient-to-position)
}
</style>