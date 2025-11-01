<template>
    <div class="flex items-center">
        <input :id="uniqueId" type="checkbox" class="input-default" true-value="1" false-value="0">
        <label :for="uniqueId" class="text-label">{{ content }}</label>
    </div>
</template>

<script setup>

const props = defineProps({
    content: String,
    index: Number
});

const uniqueId = computed(() => `checkbox-${props.index}`);
</script>

<style scoped>
.input-default {
    border-radius: .25rem;
    cursor: pointer;
    height: 24px;
    width: 24px
}

.input-disable {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    height: 24px;
    position: relative;
    width: 24px
}

.input-disable:after {
    background-color: rgb(201 202 205/1)
}

.input-disable:after,
.input-disable:checked:after {
    border-radius: .25rem;
    content: "";
    cursor: pointer;
    height: 24px;
    left: calc(100% - 24px) /2;
    position: absolute;
    top: calc(100% - 24px) /2;
    width: 24px
}

.text-label {
    font-size: .875rem;
    line-height: 1.25rem;
    padding-left: .625rem;
    color: rgb(77 78 80/1)
}
</style>
