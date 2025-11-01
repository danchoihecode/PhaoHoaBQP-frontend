<template>
    <div class="flex items-center mb-4">
        <img :src="props.image" alt="Icon" class="w-6 h-6 mr-2">
        <p class="text-[14px] font-normal text-left slogan">{{props.content}}</p>
    </div>
</template>
<script setup>
const props = defineProps({
  image: String,
  content : String
});
</script>
<style>
.slogan {
    line-height: 16.1px;
    color: #4d4e50
}
</style>