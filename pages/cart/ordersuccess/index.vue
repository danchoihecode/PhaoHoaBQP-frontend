<template>
    <div class="flex justify-center sm:bg-[#F1F2F5] py-3">
        <div class="middleCart">
            <div class="alertsuccess-new flex items-center justify-center gap-3">
                <img src="/order.png" alt="order" class="w-9 h-9">
                <strong>Đặt hàng thành công </strong>
            </div>
            <div class="ordercontent">
                <div>
                    <p>Cảm ơn {{ orderInfo.gender }} <b>{{ orderInfo.customer_name }}</b> đã cho PhaoHoaBQP.me cơ hội
                        được phục vụ.</p>
                </div>
                <div>
                    <div class="info-order">
                        <div class="info-order-header">
                            <div>
                                <h4> Đơn hàng: <span>#{{ orderInfo.order_id }}</span></h4>
                            </div>
                            <!-- <div class="header-right"><span href="">Quản lý đơn hàng</span>
                                <div class="cancel-order-new">
                                    <div class="cancel-order-new"><span class="mx-2 text-gray-800">•</span>
                                        <span class="text-[#dd1c1a] cursor-pointer">Hủy</span>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                        <label><span class=""><i class="info-order__dot-icon"></i><span>
                                    <strong>Người nhận hàng: </strong>{{ orderInfo.gender }} {{ orderInfo.customer_name
                                    }},
                                    {{ orderInfo.customer_phone }}</span>
                            </span>
                        </label>
                        <label><span class=""><i class="info-order__dot-icon"></i><span>
                                    <strong>Giao đến: </strong>
                                    {{ orderInfo.delivery_address }} (nhân viên sẽ gọi xác nhận trước khi
                                    giao).</span>
                            </span>
                        </label>
                        <label><span class=""><i class="info-order__dot-icon"></i><span>
                                    <strong>Tổng tiền: </strong>
                                    <b class="red">{{ orderInfo.total_amount.toLocaleString('vi-VN') }}₫</b></span>
                            </span>
                        </label>
                    </div>
                </div>
                <div>
                    <h4 class="order-infor-alert"> Đơn hàng chưa được thanh toán </h4>
                </div>
                <div class="payment-method-new">
                    <div>
                        <h3 style="text-transform: none; margin-bottom: 20px;"> Hình thức thanh toán: Thanh toán tiền mặt khi nhận hàng </h3> 
                        
                        <!-- <div class="list-payment-method">
                            <RadioButton v-for="(method, index) in paymentMethods" :key="index"
                                :content="method.content" :name="'payment-method'" :index="index + 1"
                                :selected="selectedMethod === index + 1" :icon="method.icon"
                                @click="updateSelectedMethod(index + 1)" />
                        </div> -->
                        <button class="confirm-payment-button mt-8" 
                            @click="confirmPayment">
                            Về trang chủ
                        </button>
                    </div>

                    <!-- <div>
                        <span @click="toggleRefundPolicy" class="refund-policy cursor-pointer">Xem chính sách hoàn tiền
                            online</span>
                        <div v-show="showRefundPolicy">
                            <div class="bg-hoantien"></div>
                            <div class="hoantienonline">
                                <div class="row-ht">
                                    <strong>Chính sách hoàn tiền khi thanh toán Online</strong>
                                    <span @click="toggleRefundPolicy" class="cursor-pointer">Đóng</span>
                                </div>
                                <p>
                                    Trong trường hợp quý khách hàng đã mua hàng &amp; thanh toán trực tuyến thành công
                                    nhưng dư tiền,
                                    hoặc trả sản phẩm, Bếp Nam Dương sẽ hoàn tiền vào thẻ quý khách đã dùng để thanh
                                    toán, theo thời
                                    hạn như sau:
                                </p>
                                <p>
                                    - Đối với thẻ ATM: Thời gian khách hàng nhận được tiền hoàn từ 7-10 ngày (trừ thứ 7,
                                    chủ nhật và
                                    ngày lễ). Nếu qua thời gian trên không nhận được tiền, Bếp Nam Dương sẽ hỗ trợ liên
                                    hệ ngân hàng của
                                    khách hàng để giải quyết.
                                </p>
                                <p>
                                    - Đối với thẻ Visa/Master card/JCB: Thời gian Khách hàng nhận được tiền hoàn 7-15
                                    ngày. Nếu qua thời
                                    gian trên khách hàng không nhận được tiền, khách hàng liên hệ ngân hàng để giải
                                    quyết.
                                </p>
                                <p>
                                    - Đối với thanh toán bằng hình thức Ví MoMo: Thời gian Khách hàng nhận được tiền
                                    hoàn 3 - 5 ngày.
                                    Tiền được hoàn sẽ cập nhật vào tài khoản Ví MoMo. Nếu qua thời gian trên khách hàng
                                    không nhận được
                                    tiền, khách hàng liên hệ Bếp Nam Dương để được giải quyết.
                                </p>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
// import RadioButton from '~/components/RadioButton.vue';
import { ref } from 'vue';
import { useOrderStore } from '~/stores/order';
import { useRouter } from 'vue-router';

const router = useRouter();
const orderStore = useOrderStore();
// const paymentMethods = [
//     {
//         content: 'Thanh toán tiền mặt khi nhận hàng',
//         icon: '/cash-icon.png'
//     },
//     {
//         content: 'Chuyển khoản ngân hàng',
//         icon: '/bank-transfer-icon.png'
//     },
//     {
//         content: 'Qua thẻ ATM (có Internet Banking)',
//         icon: '/atm-icon.png'
//     },
//     {
//         content: 'Qua thẻ quốc tế Visa, Master, JCB',
//         icon: '/visa-master-jcb-icon.png'
//     },
//     {
//         content: 'Ví MoMo',
//         icon: '/momo-icon.png'
//     },
//     {
//         content: 'Qua VNPAY-QR',
//         icon: '/vnpay-qr-icon.png'
//     },
//     {
//         content: 'Quét mã SmartPay-QR qua ứng dụng ngân hàng',
//         icon: '/smartpay-qr-icon.png'
//     },
//     {
//         content: 'Nhân viên mang máy cà thẻ khi nhận hàng',
//         icon: '/card-machine-icon.png'
//     }
// ];

const orderInfo = computed(() => orderStore.response);

const selectedMethod = ref(null);
// const showRefundPolicy = ref(false);

// const toggleRefundPolicy = () => {
//     showRefundPolicy.value = !showRefundPolicy.value;
// };

// function updateSelectedMethod(index) {
//     selectedMethod.value = index;
// }

function confirmPayment() {
    // if (selectedMethod.value) {
    //     alert('Thanh toán bằng phương thức ' + paymentMethods[selectedMethod.value - 1].content + ' thành công !');
        router.push('/');
    // }
}
</script>
<style scoped>
* {
    font-size: 14px;
}

.middleCart {
    display: block;
    background: #fff;
    box-shadow: 0 0 18px rgba(0, 0, 0, .12);
    border-radius: 2px;
    position: relative;
    max-width: 736px;
}

.alertsuccess-new {
    overflow: hidden;
    background-color: #f0fff7;
    text-align: center;
    padding: 10px 0;
    height: 60px;
}

.alertsuccess-new strong {
    color: #219653;
    font-size: 16px;
    text-transform: uppercase
}

.alertsuccess-new {
    padding: 10px 30px
}

.alertsuccess-new.fail {
    display: flex;
    justify-content: center;
    align-items: center
}

.alertsuccess-new.fail i {
    min-width: 50px
}

.ordercontent {
    display: block;
    overflow: hidden;
    padding: 0 20px
}

.ordercontent p {
    display: block;
    overflow: hidden;
    line-height: 22px;
    color: #333;
    padding: 10px
}

.ordercontent .info-order {
    display: block;
    background-color: #f3f3f3;
    padding: 10px 0;
    margin: 0 10px 10px;
    border-radius: 4px
}

.ordercontent .info-order h4 {
    display: block;
    overflow: hidden;
    color: #333;
    text-transform: uppercase
}

.ordercontent .info-order label {
    display: block;
    color: #333;
    padding: 5px 15px
}

.ordercontent .info-order .info-order__dot-icon:before {
    content: "\2022";
    color: #c4c4c4;
    float: left;
    margin: 0 5px 0 0
}

.ordercontent .info-order label span {
    display: block;
    overflow: hidden
}

.ordercontent .info-order label span.haveToolTip {
    display: flex;
    overflow: visible
}

.ordercontent .info-order label span>strong {
    display: contents
}

.ordercontent .info-order label b.red {
    color: #f30c28
}

.choose-payment strong,
.ordercontent .choose-payment {
    display: block;
    overflow: hidden
}

.ordercontent .formality-pay {
    display: block;
    overflow: hidden;
    padding: 10px 10px 0
}

.ordercontent .cancel-order {
    display: block;
    overflow: hidden;
    margin: 10px 10px 0;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
    clear: right
}

.ordercontent .cancel-order .cancel-order__cancel-button {
    color: #288ad6
}

.ordercontent h3 {
    display: block;
    overflow: hidden;
    font-weight: 600;
    text-transform: uppercase;
    color: #333;
    padding: 10px 10px 0
}


.info-order-header .cancel-order-new,
.info-order-header .header-right {
    display: flex
}

.info-order-header .header-right>span {
    color: #2f80ed;
    cursor: pointer
}

.info-order .info-order-header {
    display: flex;
    justify-content: space-between;
    padding: 2px 14px 5px 11px
}

.cancel-order-popup,
.success-popup {
    background: rgba(0, 0, 0, .4);
    height: 100%;
    position: fixed;
    text-align: center;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10000
}

.cancel-order-popup .helper,
.success-popup .helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle
}

.cancel-order-popup div,
.success-popup>div {
    background-color: #fff;
    box-shadow: 10px 10px 60px #555;
    display: inline-block;
    height: auto;
    max-width: 350px;
    min-height: 100px;
    vertical-align: middle;
    width: 80%;
    position: relative;
    border-radius: 8px;
    padding: 30px 30px
}

.success-popup p {
    line-height: 20px;
    margin: 10px 0 5px;
    text-align: left;
    font-size: 14px;
    padding: 0
}

.success-popup h1 {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px
}

.success-popup p.conut-success {
    color: red;
    text-align: center
}

.success-popup p {
    text-align: center
}

.success-popup button {
    padding: 10px;
    border-radius: 4px;
    color: #288ad6;
    font-size: 14px;
    border: none;
    cursor: pointer;
    width: 130px;
    text-transform: uppercase;
    background-color: #fff;
    border: 1px solid #288ad6;
    margin: 10px 0
}

.companypaymentinfo__content label i.info-order__dot-icon:before {
    content: "\2022";
    color: #000;
    float: left;
    margin: 0 5px 0 0
}

.loyalty-app-install-prompt__content {
    display: flex;
    align-items: center;
    color: #333;
    font-size: 12px;
    background: #eaf2fd;
    border-radius: 4px;
    padding: 7px 10px;
    margin: 0 10px 15px
}

.loyalty-app-install-prompt__content-left {
    min-width: 90px;
    height: 100%;
    font-size: 12px;
    text-align: center
}

.loyalty-app-install-prompt__content-left.v2 {
    min-width: unset;
    height: 100%;
    font-size: 12px;
    text-align: center
}

.loyalty-app-install-prompt__content-right {
    margin-left: 12px
}

.loyalty-app-install-prompt__content-right button {
    min-width: 110px;
    height: 40px;
    color: #fff;
    background: #2f80ed;
    border-radius: 8px;
    cursor: pointer;
    border: 1px solid #2f80ed;
    margin-left: 15px
}

.loyalty-app-install-prompt [class*=loyalty-icon],
.loyalty-app-install-prompt [class^=loyalty-icon] {
    background-image: url('/sprite.png') !important;
    background-repeat: no-repeat;
    background-size: 422px 217px;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    display: block
}

.loyalty-app-install-prompt__content .loyalty-icon-logo-appstore {
    background-position: -191px -85px;
    background-size: 282px 143px;
    width: 18px;
    height: 21px;
    margin-bottom: 5px
}

.loyalty-app-install-prompt__content .loyalty-icon-logo-chplay {
    background-position: -226px -88px;
    background-size: 282px 143px;
    width: 18px;
    height: 18px
}

.loyalty-app-install-prompt__content-right a {
    display: flex;
    align-items: center;
    color: #2f80ed;
    margin-top: 4px
}

.loyalty-app-install-prompt__content-right a.v2 {
    display: inline-block;
    align-items: center;
    color: #2f80ed;
    margin-top: 4px
}

@media screen and (max-width: 360px) {
    .loyalty-app-install-prompt__content-right.v2>div {
        display: inline
    }
}

.order-infor-alert {
    color: #fb6e2e;
    background: rgba(251, 110, 46, .05);
    border: 1px dashed #fb6e2e;
    box-sizing: border-box;
    border-radius: 4px;
    text-align: center;
    padding: 10px 0;
    margin: 0 10px 10px
}

.order-infor-alert-fail {
    color: #333;
    background: rgba(208, 2, 28, .05);
    border: 1px dashed #d0021c;
    box-sizing: border-box;
    border-radius: 4px;
    text-align: left;
    padding: 10px 20px;
    margin: 15px 10px;
    display: block
}

.order-infor-alert-fail b {
    color: #333
}

.order-infor-alert-fail b:first-of-type {
    font-weight: 400
}

.order-infor-alert-fail b:last-of-type {
    text-transform: lowercase
}

.order-infor-alert-fail span {
    color: #333
}

.topzone .order-infor-alert-fail b:first-of-type {
    text-transform: inherit
}

.payment-method-new .refund-policy {
    text-align: center;
    margin: 17px auto 25px;
    color: #288ad6;
    display: block;
    width: -moz-fit-content;
    width: fit-content
}


.confirm-payment-button {
    display: block;
    overflow: hidden;
    background: #2f80ed;
    text-align: center;
    width: 70%;
    border-radius: 4px;
    border: 0;
    cursor: pointer;
    text-transform: uppercase;
    color: #fff;
    height: 48px;
    margin: 0 auto 10px
}

.confirm-payment-button.disabled {
    background: #e0e0e0;
    color: #bdbdbd;
    cursor: default
}

.timetakegoods .buyanother,
.timetakegoods .refund-policy {
    display: block;
    overflow: hidden;
    text-align: center;
    padding: 10px 10px 20px;
    color: #288ad6
}

.timetakegoods .refund-policy {
    max-width: -moz-fit-content;
    max-width: fit-content;
    margin: 20px auto;
    padding: 0
}

.bg-hoantien {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #333;
    opacity: .8;
    z-index: 999
}

.hoantienonline {
    position: fixed;
    background: #fff;
    border-radius: 4px;
    padding: 10px 20px 20px;
    width: 50%;
    max-width: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999
}

.hoantienonline .row-ht {
    display: block;
    overflow: hidden;
    padding: 10px 0
}

.hoantienonline .row-ht strong {
    display: inline-block;
    vertical-align: middle;
    color: #333;
    padding: 10px 0;
    width: 70%
}

.hoantienonline .row-ht span {
    float: right;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    color: #288ad6;
}

.hoantienonline p {
    display: block;
    overflow: hidden;
    padding: 5px 0
}


.list-payment-method {
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    gap: 1rem;
    padding: 1.5rem 1rem;
}
</style>