<template>
  <Header></Header>
  <NuxtPage />
  <Zalo/>
  <Footer></Footer>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Zalo from './components/Zalo.vue';
</script>

<style>
* {
  font-family: Arial, sans-serif;
}
</style>

