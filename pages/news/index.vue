<template>
        <div class="flex flex-col justify-center sm:bg-[#F1F2F5] pb-3">
                <div class="content pt-10">
                        <div class="title">Pháo hoa Z121 Bộ Quốc Phòng</div>
                        <div class="date-and-view">
                                <div><span>Cập nhật ngày 02/11/2025</span></div>
                                <div class="flex items-center gap-[3px]"><img
                                                src="data:image/svg+xml,%3csvg%20width=&#39;24&#39;%20height=&#39;24&#39;%20viewBox=&#39;0%200%2024%2024&#39;%20fill=&#39;none&#39;%20xmlns=&#39;http://www.w3.org/2000/svg&#39;%3e%3cpath%20d=&#39;M15.5799%2011.9999C15.5799%2013.9799%2013.9799%2015.5799%2011.9999%2015.5799C10.0199%2015.5799%208.41992%2013.9799%208.41992%2011.9999C8.41992%2010.0199%2010.0199%208.41992%2011.9999%208.41992C13.9799%208.41992%2015.5799%2010.0199%2015.5799%2011.9999Z&#39;%20stroke=&#39;%23ABADAF&#39;%20stroke-width=&#39;1.5&#39;%20stroke-linecap=&#39;round&#39;%20stroke-linejoin=&#39;round&#39;/%3e%3cpath%20d=&#39;M11.9999%2020.27C15.5299%2020.27%2018.8199%2018.19%2021.1099%2014.59C22.0099%2013.18%2022.0099%2010.81%2021.1099%209.39997C18.8199%205.79997%2015.5299%203.71997%2011.9999%203.71997C8.46984%203.71997%205.17984%205.79997%202.88984%209.39997C1.98984%2010.81%201.98984%2013.18%202.88984%2014.59C5.17984%2018.19%208.46984%2020.27%2011.9999%2020.27Z&#39;%20stroke=&#39;%23ABADAF&#39;%20stroke-width=&#39;1.5&#39;%20stroke-linecap=&#39;round&#39;%20stroke-linejoin=&#39;round&#39;/%3e%3c/svg%3e"
                                                alt="icon"><span>23 lượt
                                                xem</span></div>
                        </div>
                        <div class="summary">
                                <div class="my-8 newContent">
                                        <p><img src="/phao-hoa-banner.png" alt=""></p>
                                </div>
                        </div>
                        <div>
                                <div class="recommend-news">
                                        <div class="text-grey-800 font-semibold"> Xem thêm </div>
                                        <ul class="list-disc list-items">
                                                <li><router-link :to="`/news`">Chính sách bảo mật</router-link></li>                                                                  
                                                <li><router-link :to="`/news`">Chính sách đổi trả</router-link> </li>
                                                <li><router-link :to="`/news`">Chính sách vận chuyển</router-link></li>
                                                <li><router-link :to="`/news`">Hướng dẫn sử dụng</router-link></li>
                                        </ul>
                                </div>
                        </div>
                </div>
        </div>
</template>
<script setup>
import BreadCrumb from '~/components/BreadCrumb.vue';
import { useBreadCrumbStore } from '~/stores/bread-crumb';

const breadCrumbStore = useBreadCrumbStore();
breadCrumbStore.setBreadCrumbs([{ label: 'Trang chủ', path: '/' }, { label: 'Giới thiệu về Bếp Nam Dương', path: '/' }]);
</script>
<style scoped>
.content {
        padding-left: 10px;
        padding-right: 10px;
        width: 100%
}

@media (min-width:400px) {
        .content {
                max-width: 400px
        }
}

@media (min-width:641px) {
        .content {
                max-width: 641px;
                padding-left: 0;
                padding-right: 0
        }
}

@media (min-width:769px) {
        .content {
                max-width: 769px
        }
}

@media (min-width:1025px) {
        .content {
                max-width: 1025px;
                padding-left: 0;
                padding-right: 0
        }
}

@media (min-width:1281px) {
        .content {
                max-width: 1281px;
                padding-left: 3.5rem;
                padding-right: 3.5rem
        }
}

@media (min-width:1537px) {
        .content {
                max-width: 1537px;
                padding-left: 10.5rem;
                padding-right: 10.5rem
        }
}

.content {
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 1.5rem
}

.content .title {
        font-size: 20px;
        font-weight: 600;
        color: rgb(51 51 51/1)
}

@media (min-width:769px) {
        .content .title {
                font-size: 26px
        }
}

.content .date-and-view {
        align-items: center;
        display: flex;
        font-size: 14px;
        gap: 2rem;
        margin-top: .5rem;
        color: rgb(129 130 133/1)
}

@media (min-width:769px) {
        .content .date-and-view {
                font-size: 15px;
                margin-top: 11px
        }
}

.content .short-description {
        font-size: 15px;
        font-weight: 500;
        margin-top: 1.5rem;
        color: rgb(51 51 51/1)
}

@media (min-width:769px) {
        .content .short-description {
                font-size: 18px
        }
}

.content .summary {
        margin-top: 20px
}

@media (min-width:769px) {
        .content .summary {
                margin-top: 30px
        }
}

.content .conent-news {
        margin-bottom: 2rem;
        margin-top: 2rem
}

.newContent>* {
        font-size: revert;
        font-weight: revert;
        margin: revert
}

.recommend-news {
        border-radius: 8px;
        border-width: 1px;
        height: auto;
        width: 100%;
        border-color: rgb(152 199 241/1);
        background-color: rgb(228 241 251/1);
        padding: 1rem
}

.recommend-news .list-items {
        line-height: 1.75rem;
        margin-top: .5rem;
        padding-left: 1.5rem;
        color: rgb(74 145 226/1)
}
</style>