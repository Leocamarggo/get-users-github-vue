<template>
    <input @input="handleChange" :value="userInput" type="text" />

    <p>{{ userData.name }}</p>

    <button @click="fetchUser">Buscar</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import UserService from '@/service/user.service';

export default defineComponent({
    name: 'HomePage',
    computed: {
        ...mapGetters({
            userData: 'userData',
            userInput: 'userInput'
        }),
    },
    methods: {
        ...mapActions({
            updateUserInput: 'updateUserInput'
        }),
        handleChange(event: Event) {
            this.updateUserInput((event.target as HTMLInputElement).value)
        },
        async fetchUser(): Promise<void> {
            await UserService.fetchUser();
        },
    }
});
</script>

<style scoped>
</style>
