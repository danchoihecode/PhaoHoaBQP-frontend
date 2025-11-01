<template>
    <div class="flex items-center">
        <input :id="uniqueId" type="radio" :name="name" value="0" class="input-default" :checked="selected"
           >
        <img v-if="props.icon" :src="props.icon" alt="order" class="w-6 h-6 ml-2">
        <label :for="uniqueId" class="cursor-pointer text-label">{{ content }}</label>
    </div>
</template>

<script setup>

const props = defineProps({
    content: String,
    name: String,
    selected: Boolean,
    index: Number,
    icon: String
});

// const emit = defineEmits(['radio-selected']);
const uniqueId = computed(() => `radio-${props.name}-${props.index}`);

// const handleSelection = () => {
//     emit('radio-selected', props.content);
// };
</script>

<style scoped>
.input-default {
    cursor: pointer;
    position: relative
}

.input-default,
.input-default:checked:after {
    height: 22px;
    width: 22px
}

.input-default:checked:after {
    border-radius: 50%;
    border-width: 3px;
    position: absolute;
    border-color: rgb(241 242 245/1);
    background-color: rgb(74 145 226/1);
    content: "";
    left: calc(100% - 24px)/2;
    outline-color: #4a91e2;
    outline-style: solid;
    outline-width: 1px;
    top: calc(100% - 24px)/2
}

.input-disable {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    height: 22px;
    position: relative;
    width: 22px
}

.input-disable:after {
    border-color: rgb(201 202 205/1);
    border-radius: 50%;
    border-width: 3px
}

.input-disable:after,
.input-disable:checked:after {
    height: 22px;
    position: absolute;
    width: 22px;
    background-color: rgb(201 202 205/1);
    content: "";
    left: calc(100% - 24px)/2;
    top: calc(100% - 24px)/2
}

.input-disable:checked:after {
    border-color: rgb(241 242 245/1);
    border-radius: 50%;
    border-width: 3px
}

.text-label {
    font-size: 1rem;
    font-size: 14px;
    line-height: 1.5rem;
    padding-left: .625rem;
    color: rgb(77 78 80/1);
}
</style>