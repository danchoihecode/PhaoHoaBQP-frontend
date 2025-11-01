<template>
    <div class="content-home">
        <div class="banner">
            <div class="img"><img src="/slide-4925.png" alt="banner" class="h-[450px] object-cover w-full"></div>
        </div>
        <div class="container mx-auto">
            <!-- <ContentCategory :slug="'flash-sale'" :banner-link="'/flash-sale.png'" :bg-color="'#ffde00'" :group-size="2" /> -->
            <ContentCategory :slug="'best-seller'" :banner-link="'/best-seller.png'" :bg-color="'#F4F6F9'" :group-size="1" />
        </div>
    </div>
</template>
<script setup>
import ContentCategory from '~/components/ContentCategory.vue';
</script>
<style scoped>
.content-home {
    margin-top: -1px;
    padding-bottom: 40px;
    background-color: #f1f2f5;
}

.container {
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
}

@media (min-width:641px) {
    .container {
        max-width: 641px;
        padding-left: 0;
        padding-right: 0
    }
}

@media (min-width:769px) {
    .container {
        max-width: 769px
    }
}

@media (min-width:1025px) {
    .container {
        max-width: 1025px;
        padding-left: 0;
        padding-right: 0
    }
}

@media (min-width:1281px) {
    .container {
        max-width: 1281px;
        padding-left: 3.5rem;
        padding-right: 3.5rem
    }
}

@media (min-width:1537px) {
    .container {
        max-width: 1537px;
        padding-left: 10.5rem;
        padding-right: 10.5rem
    }
}

.banner,
.banner .img {
    margin: 0;
    padding: 0;
    position: relative;
}

.banner .slider-banner {
    padding-left: 10px;
    padding-right: 10px;
}

@media (min-width:641px) {
    .banner .slider-banner {
        max-width: 641px;
        padding-left: 0;
        padding-right: 0
    }
}

@media (min-width:769px) {
    .banner .slider-banner {
        max-width: 769px
    }
}

@media (min-width:1025px) {
    .banner .slider-banner {
        max-width: 1025px;
        padding-left: 0;
        padding-right: 0
    }
}

@media (min-width:1281px) {
    .banner .slider-banner {
        max-width: 1281px;
        padding-left: 3.5rem;
        padding-right: 3.5rem
    }
}

@media (min-width:1537px) {
    .banner .slider-banner {
        max-width: 1537px;
        padding-left: 10.5rem;
        padding-right: 10.5rem
    }
}

.banner .slider-banner {
    margin-left: auto;
    margin-right: auto;
    margin-top: 12px;
    width: 100%
}

@media (min-width:1025px) {
    .banner .slider-banner {
        margin-top: -5vw;
    }
}
</style>