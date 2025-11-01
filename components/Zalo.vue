<template>
    <div id="zalo-vr" class="fixed bottom-10 right-10">
      <div class="relative w-16 h-16 flex items-center justify-center">
        <!-- Sóng lan tỏa -->
        <span class="absolute w-16 h-16 bg-blue-500 opacity-30 rounded-full animate-ping"></span>
        <span class="absolute w-20 h-20 bg-blue-400 opacity-20 rounded-full animate-ping delay-200"></span>
        
        <!-- Icon Zalo -->
        <div class="relative w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg animate-shake overflow-hidden">
          <a target="_blank" href="https://zalo.me/0866172604">
            <img class="w-14 h-14 rounded-full" alt="Zalo" src="/zalo.webp" />
          </a>
        </div>
      </div>
    </div>
</template>

<script setup>
// Không cần script phức tạp vì Tailwind CSS đã xử lý animation
</script>

<style scoped>
@keyframes shake {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
}

.animate-shake {
  animation: shake 1s infinite ease-in-out;
}
</style>
