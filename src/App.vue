<template>
  <v-app>
    <HomePage />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomePage from '@/views/HomePage.vue';

export default defineComponent({
  name: 'App',
  components: {
    HomePage
  }
});
</script>

<style>
</style>
