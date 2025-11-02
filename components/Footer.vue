<template>
    <div class="footer">
        <div class="info-page">
            <div class="w-full max-w-[220px]">
                <div class="text-[14px] text-[#4D4E50] font-bold mb-[10px]">Chính sách và điều khoản</div>
                <div class="text" v-for="item in news" :key="item.url">
                    <router-link :to="`/news`">{{ item.title }}</router-link>
                </div>
            </div>
            <div>
                <div class="text-[14px] text-[#4D4E50] font-bold mb-[10px]">Liên hệ chúng tôi</div>

                <div class="grid grid-cols-12">
                    <div class="col-span-3"><span class="text">Hotline (Zalo):&nbsp</span></div>
                    <div class="col-span-9">
                        <div class="mb-[10px]">
                            <a href='tel:0862347123' >
                                <span class="phone-number">0862.3471.23</span>
                                <span class="time"> (8h00 - 19h00) </span>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- <div class="grid grid-cols-12">
                    <div class="col-span-3"><span class="text">Địa chỉ:</span></div>
                    <div class="col-span-9">
                        <div class="mb-[10px] text">
                            Lô 4 khu B2, Khu đô thị FPT City, Phường Hòa Hải, Quận Ngũ Hành Sơn, Đà Nẵng
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-12">
                    <div class="col-span-3"><span class="text">Email:</span></div>
                    <div class="col-span-9">
                        <div class="text">
                               hoanghai2003vp@gmail.com
                        </div>
                    </div>
                </div> -->
            </div>
            <div>
                <!-- <div class="social-network">
                    <div v-for="(info, index) in socialMediaInfo" :key="index" class="box">
                        <img v-if="info.platform === 'Facebook'"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKOSURBVHgBrZVdSBRRFMf/987sZkmpBZkjQV+u0QesKYUvYWAapktEL9VDFNLHS4VRJAQWBGUlveRL0IO+GPgQFVKugQiRGLsgtg+1PhSEu7lIrkUP287M7cy4G6zr7syu+4OZuffcc885c2buOQxZqPF0K5KQzwohGiFQDYaKxNIcXQGSjWpavH/ybee3TDbYckL3kXtbJFnupeUW2KNPU+O3l3MkLRXUenoucSYN0nAv7ONmXGpXqhvj4eDIh4wO9rX2dDEhHtKwCDlCqXDSvanC1Yxw0DuW5qDW8+AKE+w+Vgg5athU1Rz5Me31JebJnDv8NFyPwhClb1JjfBPZmEmSswsQlsZPtLhx8XQ9StetMed1bT2ZVEsXfxIcZYnov1rYhrKxBK+etafIsjgw0WRpqyzJzuMUPaxw7640n+HIL5y63I/ff2KWe7iqn+FkvA02KF7tMJ+h2QVbxg0YRIOcOKFZOX+yHrtci4dYKS8x5wZPB8ZhwU5W2/rIMj++19fSZJqm48Cxx1ZbIcMGU59D2FBWjEqK3kjPTDiKmciCna2QlKqmC5SitdmUXo4EEIvFcXD/dgS+hHHuxgDevQ/CBnNcMOGzo8kYQx4EuID4aEczHwc6MMxVofXaUc4nfqHGn/NPQ53zFN6AlbKOnOkzapEZ2J6mu5tXOYumaFiKAiDAorr61yx23BAEvLe+MyZuokAwXe9Kdrf//SAUHPFX7GimbKEBK4DKwx3/0PXu5Dylo4WnvWOK6/C8AK+j3BUjB4y0QBdXyXhKiU3rydRTJ8q3HRrkjJfR67hhz/gLVXN4Jt90jC5dy/r3Gb2CORxtdFiopMNFl5JYmiWzfgg24VT5k/Hhjp+ZbPwD8cbZO8Y8LVoAAAAASUVORK5CYII="
                            alt="facebook">
                        <img v-else-if="info.platform === 'Youtube'"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI8SURBVHgBrVXPSxtBFP5m0yJFbNeK0EoDyaXNxUPxH/DQa0V6663FQ2kPLZQeektz8F5LS+lJ20OOPSgePO3ZXwjBqxgQ/BFMNho1iMmO36xRs2bGbHQ/eGRn3+z3Xt735o3ANTgEBjzgrQRecPmM9rjh2qWtCsCpAf96gTw6gQsk9oDZfUCGtCn1TSjyCvCeH7gdkPvGhCr8/dKOPN0p8VVTHM2coqksn2LAd0QA6vbBBn5fBFD1uwMsU8yHiAblOvBciW+pFTNPR0iuYJPzl3oQKnsu1nW7hG1DJJOwUimIrq6AT7qub14uB1kua6PcBZI4AD7rxDoaHZVepSLbolqV1bExU2elwQdH56w5ToDH29w0xqivrJi6yrHk2QltgTU0FFifZLOojoxA5vOtpYzHoS0xkLLE5fEPOnt6Wt7VZmZwQE2OMxmwNJd7+/p0FGDyjyx0CF/4GNvC80LtZ/tjC5p/IYvFlsxiw8O4NzkJkUgE9xq6CGooUohprchLS0GRXdcs8uLitSIv6EKfTExAFgpoLo0OKvvj8XEYMCcYoJcDqqTzKlJrcJC1iUH090N0d5856nV429uQpRLk2pqxRBwXSX8WMUCWgV4jWvy9D7zxAxSBOI91jo82IgCTLXvNw469ssEXXxERSJo+v0YvzgFT/8PI33BLkCPDI/rDuIED6iPbq3CDK9Ollu8QBo1LfyosOXvo/xHwRMcl2gViDV9y0ysun9IGGq4dlmKZvnlq9/OBoc0VTgEDrdf+dGqaWwAAAABJRU5ErkJggg=="
                            alt="youtube">
                        <img v-else
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOvSURBVHgBrVVtbFRFFD133ntrS21dipBS27B0QwsUlTVNkxJ/tImWBKmkjUbBBDDxI1VDBY0pEek2BNCk2EYsrfrDoMFgqlkSI1L80ZoYQaAsX2VboMuGbwiBdkths+/tDLNvoSn73hIaepLZnXfvnXNm7tyZITwEHxXtzVWNjLdB4iUIUQSi6XE7QVwXoBOCo4u4/lNLqCKUioPsjB+7ulykKK2ScBEeBUTbha577YQsAusKOms52CYBODE+3GLEGzcOLGxKKbC5wNcQE8yLx4BC3Ls2WN1oEfjataMOYC2YABD4B6tDb7Ul+hJtOW0u5tB6ZDcbE4NBHtU9tVdqQ2r8K0vTG7jQLeR5C914tq4UU+Y9bc9y+gZOth9BsKM32eWESq3y/xXy5Wx2cYXOWsiri1G6dTH6m//F1e6zEFw84GcqQ3bJMyj+vAL7392FS3/1WybAYpGZaoZyu4YLa7XO+bAUweZuhJq6Rm1qVjrkeYAxHMGMd8qQWZiNgS3dKF5dhqHdfgsHMb5CTeORKht+ZM6ehuDa35COO9CckzDnh+VwLigwfVc6DiO8bwCR3iiG/efh/qTcjLMIEMpVOPQihlSIgmk63BsWQ5v8BI7WtIBHdBRuWYb0/Cwcf7MVmZ4ZiXTIOCtotkqaMT0lv2JAzdYwraYE/le/xEjgomk+9dnP8PxRD3WKJvMWS8Rqhh1DjkoOPSU/OWKyJQYqmQz3Y+P2hDEKUo17NnseJhzGZVM9ucUhZ2dEwhjq6YN7/VJkzMvFk/PzMGvTclz78z/Eordk7JgVWNv1eIoOyT2uslV3cHMF/fVbMXPNMsz/db1pDx/uw/n2DtPH0sS9FVhTJHlPqELTD8jdtgiE/Sfx1IK5CPcFYNwZxOmN2xBs+VGWHskyvZ0Icshqe8GNkYFzsm+7yZ0qJqOVRowNya4LO37H3KYvZI6BoUNHwY3Yg0OlkLPkeeStfA1nvtoG0uxWwHaaJ2D/y9W/cKKlyQFTK15E7utLMMldADsM9wZwscOHm/t6bMjF9rK9vpWmwD+VS/I1hzhGJMb7BthCCBokg3nK9uwKjZ7hg28seh8K2jEBII66kp27vzH7Yx3+9yobSCEvHgMiRo2e7/d4R8WSA45/WrlKUfg6eT9NxXiIhXwDYlT/XNPf34212z76AW+5S97nXsawAo8Azsmn6nzVrMbuC8k+etjAQHO5S2OiiimokTSF8nrMTcyWrsqfHkb0vxpN+zZ/TeeNVBx3AcsqTyIDh9LcAAAAAElFTkSuQmCC"
                            alt="instagram">
                        <div class="text-info">{{ info.likes }}</div>
                    </div>
                </div> -->
                <div class="logo-certificion">
                    <div class="h-[24px]"><img src="/certification1.png" alt="logo" height="24"
                            class="w-full h-full object-contain"></div>
                    <div class="h-[24px]"><img src="/certification2.png" alt="logo" height="24"
                            class="w-full h-full object-contain"></div>
                </div>
            </div>
        </div>
        <div class="line-dashed"></div>
        <div class="sign"> Copyright @ 2025 Bản quyền thuộc về PhaoHoaBQP.me </div>
    </div>
</template>
<script setup>
const news = [
    { title: 'Chính sách bảo mật', url: 'chinh-sach-bao-mat' },
    { title: 'Chính sách đổi trả', url: 'chinh-sach-doi-tra' },
    { title: 'Chính sách vận chuyển', url: 'chinh-sach-van-chuyen' },
    { title: 'Hướng dẫn sử dụng', url: 'huong-dan-su-dung' }
];
/*
import { computed } from 'vue';
import { useFooterStore } from '~/stores/footer';

const { data } = await useAsyncData('footerData', async () => {
    const footerStore = useFooterStore();
    await footerStore.fetchFooterDetail();
    return footerStore.footerData;
});

const news = computed(() => data.value.news);
*/

</script>
<style scoped>
.footer {
    height: auto;
    width: 100%;
    background-color: rgb(248 248 248/1)
}

.footer .logo {
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
    padding-top: 10px
}

.footer .info-page {
    padding-top: 30px;
    padding-left: 10px;
    padding-right: 10px;
    width: 100%
}

@media (min-width:400px) {
    .footer .info-page {
        max-width: 400px
    }
}

@media (min-width:641px) {
    .footer .info-page {
        max-width: 641px;
        padding-left: 0;
        padding-right: 0
    }
}

@media (min-width:769px) {
    .footer .info-page {
        max-width: 769px
    }
}

@media (min-width:1025px) {
    .footer .info-page {
        max-width: 1025px;
        padding-left: 0;
        padding-right: 0
    }
}

@media (min-width:1281px) {
    .footer .info-page {
        max-width: 1281px;
        padding-left: 3.5rem;
        padding-right: 3.5rem
    }
}

@media (min-width:1537px) {
    .footer .info-page {
        max-width: 1537px;
        padding-left: 10.5rem;
        padding-right: 10.5rem
    }
}

.footer .info-page {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto
}

.footer .info-page .text {
    font-size: 14px;
    margin-bottom: 10px;
    color: rgb(77 78 80/1)
}

.footer .info-page .phone-number {
    font-size: 14px;
    font-weight: 700;
    color: #4a91e2;
}

.footer .info-page .time {
    font-size: 14px;
    font-weight: 300;
    color: #4D4E50;
    font-style: italic;
}

.footer .info-page .social-network {
    display: grid;
    gap: 12px
}

@media (min-width:1025px) {
    .footer .info-page .social-network {
        grid-template-columns: repeat(1, minmax(0, 1fr))
    }
}

@media (min-width:1281px) {
    .footer .info-page .social-network {
        grid-template-columns: repeat(3, minmax(0, 1fr))
    }
}

.footer .info-page .social-network .box {
    align-items: center;
    display: flex;
    gap: 8px
}

.footer .info-page .social-network .box .text-info {
    font-size: 14px;
    text-wrap: nowrap;
    color: rgb(74 145 226/1)
}

.footer .info-page .logo-certificion {
    display: flex;
    gap: 11px;
    margin-top: 20px
}

.footer .info-page .web-of-the-same-group {
    margin-top: 32px
}

.footer .line-dashed {
    padding-left: 10px;
    padding-right: 10px
}

@media (min-width:400px) {
    .footer .line-dashed {
        max-width: 400px
    }
}

@media (min-width:641px) {
    .footer .line-dashed {
        max-width: 641px;
        padding-left: 0;
        padding-right: 0
    }
}

@media (min-width:769px) {
    .footer .line-dashed {
        max-width: 769px
    }
}

@media (min-width:1025px) {
    .footer .line-dashed {
        max-width: 1025px;
        padding-left: 0;
        padding-right: 0
    }
}

@media (min-width:1281px) {
    .footer .line-dashed {
        max-width: 1281px;
        padding-left: 3.5rem;
        padding-right: 3.5rem
    }
}

@media (min-width:1537px) {
    .footer .line-dashed {
        max-width: 1537px;
        padding-left: 10.5rem;
        padding-right: 10.5rem
    }
}

.footer .line-dashed {
    border-bottom-width: 1px;
    border-style: dashed;
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    width: 100%;
    border-color: rgb(201 202 205/1)
}

.footer .sign {
    font-size: 14px;
    padding-bottom: 12px;
    padding-top: 12px;
    text-align: center;
    color: rgb(77 78 80/1)
}
</style>