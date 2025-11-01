<template>
    <div class="header">
        <div class="content">
            <div class="top-header">
                <div class="logo">
                    <a href="/">
                        <img src="/logo.png" alt="logo" class="w-[230px]">
                    </a>
                </div>
                <div class="flex justify-end" style="width: 35%;">
                    <SearchBox style="width: 100%;" />
                </div>
                <div>
                    <div class="flex flex-nowrap justify-end items-center">
                        <router-link to="/cart">
                            <CartButton />
                        </router-link>
                        <!-- <div class="consulting_and_promotion">
                            <router-link class="consulting" :to="`/news`">
                                Tư vấn chọn mua </router-link>
                            <div class="slash"></div>
                            <router-link class="promotion" :to="`/news`">
                                Khuyến mãi
                            </router-link>

                        </div> -->
                    </div>
                </div>
            </div>
            <div class="sub-header">
                <SubHeader />
            </div>
        </div>
    </div>
</template>

<script setup>
import CartButton from './CartButton.vue';
import SubHeader from './SubHeader.vue';
import SearchBox from './SearchBox.vue';
import { RouterLink } from 'vue-router';
</script>
<style scoped>
.header {
    max-height: 114px;
    background-color: rgb(74 144 226/1);
    padding-top: 10px
}

.header .content {
    padding-left: 10px;
    padding-right: 10px;
    width: 100%
}

.header .content {
    margin-left: auto;
    margin-right: auto
}

.header .content .top-header {
    display: flex;
    justify-content: space-between
}

.header .content .top-header .consulting_and_promotion {
    align-items: center;
    display: flex;
    font-size: 14px;
    line-height: 16px;
    color: rgb(255 255 255/1)
}

.header .content .top-header .consulting_and_promotion .consulting {
    margin-left: 12px;
    padding-right: 11px;
    text-align: center
}

.header .content .top-header .consulting_and_promotion .promotion {
    padding-left: 11px;
    padding-right: 11px
}

.header .content .top-header .consulting_and_promotion .go-to-kitchen {
    padding-left: 11px
}

.header .content .top-header .consulting_and_promotion .slash {
    border-right-width: 1px;
    height: 24px;
    border-color: rgb(168 208 255/1)
}

@media (min-width:641px) {
    .header .content {
        max-width: 641px;
        padding-left: 0;
        padding-right: 0
    }
}

@media (min-width:769px) {
    .header .content {
        max-width: 769px
    }
}

@media (min-width:1025px) {
    .header .content {
        max-width: 1025px;
        padding-left: 0;
        padding-right: 0
    }
}

@media (min-width:1281px) {
    .header .content {
        max-width: 1281px;
        padding-left: 3.5rem;
        padding-right: 3.5rem
    }
}

@media (min-width:1537px) {
    .header .content {
        max-width: 1537px;
        padding-left: 10.5rem;
        padding-right: 10.5rem
    }
}

@media (min-width:1281px) {
    .header .content .top-header .consulting_and_promotion {
        margin-left: 12px
    }
}
</style>