<template>
    <div class="w-full">
        <div class="lg:text-[20px] text-[16px] font-bold text-grey-900 mb-[20px] leading-[24px]">
            Thông số sản phẩm
            <span>{{props.name}}</span>
        </div>
        <table class="w-full">
             <tbody>
            <tr v-for="(info, index) in props.content" :key="index" class="w-full">
                <td class="text font-light pl-2 w-[30%]">{{info.key}}</td>
                <td class="text font-normal pl-5 w-[70%]">{{info.content}}
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
const props = defineProps({
  name: String,
  content : Array
});
</script>
<style scoped>
.text {
    font-size: 14px;
    line-height: 1rem;
    overflow-wrap: break-word;
    padding-bottom: .625rem;
    padding-top: .625rem;
    color: rgb(77 78 80/1)
}

table tr:nth-child(odd) {
    background-color: rgb(235 236 238/1)
}

.text-grey-900 {
    color: rgb(43 44 46/1)
}

.text-primary-500 {
    color: rgb(74 145 226/1)
}

.border-primary-500 {
    border-color: rgb(74 145 226/1)
}
</style>