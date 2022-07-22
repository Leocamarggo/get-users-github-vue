<template>
  <v-app>
    <LoadingPage v-if="loadingPage" />
    <HomePage />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomePage from '@/views/HomePage.vue';
import { mapGetters } from 'vuex';
import LoadingPage from './components/LoadingPage.vue';

export default defineComponent({
  name: 'App',
  components: {
    HomePage,
    LoadingPage
  },
  computed: {
    ...mapGetters({
      loadingPage: 'loadingPage'
    }),
  }
});
</script>

<style>
</style>
