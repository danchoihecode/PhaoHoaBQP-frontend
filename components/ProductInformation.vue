<template>
    <div class="w-full">
        <div 
            v-if="props.description" 
            v-html="props.description" 
            class="description-content mb-4"
        >
            </div>

        <div v-if="props.embedUrl" class="video-container">
            <iframe 
                class="video-iframe"
                :src="props.embedUrl" 
                title="YouTube video player" 
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    description: String,
    embedUrl: String
});
</script>

<style scoped>
.video-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    padding-top: 56.25%; 
    border-radius: 8px; 
}
.video-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.description-content {
    transition: max-height 0.5s ease-in-out;
    overflow: hidden;
    line-height: 1.6;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    color: #333; /* Thêm màu chữ mặc định */
}

.description-content :deep(p) {
    margin-bottom: 1rem;
}

.description-content :deep(a) {
    color: rgb(74 145 226); 
    text-decoration: none;
}
.description-content :deep(a:hover) {
    text-decoration: underline;
}

.description-content :deep(h2) {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
}

.description-content :deep(ul),
.description-content :deep(ol) {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
}

</style>