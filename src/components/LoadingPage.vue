<template>
    <div class="loadingContainer d-flex justify-center align-center">
        <v-progress-circular :size="70" :width="7" color="#4caf50" indeterminate></v-progress-circular>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LoadingPage'
});
</script>

<style scoped>
.loadingContainer {
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.05);
    position: fixed;
    z-index: 999;
}
</style>
