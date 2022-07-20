<template>
    <v-main>
        <v-container v-if="!emptyUserData" class="w-50 d-flex justify-center flex-column">
            <v-text-field label="Digite aqui" @input="handleChange" :value="userInput" />
            <v-btn color="success" :disabled="emptyInput" block @click="fetchUser">Buscar</v-btn>
        </v-container>

        <v-container v-else class="w-50 d-flex justify-center">
            <v-card width="700">
                <v-row justify="center" class="mt-3">
                    <v-avatar large size="150">
                        <v-img :src="userData.avatar_url" alt="Profile picture"></v-img>
                    </v-avatar>
                </v-row>
                <v-card-title class="text-center text-h5 mt-4">{{ userData.name }}</v-card-title>
                <v-card-text class="text-center">
                    <p v-text="userData.bio"></p>
                </v-card-text>
            </v-card>
        </v-container>

        <v-container v-if="emptyUserData" class="w-50 d-flex justify-center">
            <v-btn color="success" @click="restartApp">Restart</v-btn>
        </v-container>
    </v-main>
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
        emptyInput(): boolean{
            return Boolean(!this.userInput)
        },
        emptyUserData(): boolean {
            return Boolean(this.userData.login)
        },
    },
    methods: {
        ...mapActions({
            updateUserInput: 'updateUserInput',
            updateUserData: 'updateUserData',
        }),
        handleChange(event: Event) {
            this.updateUserInput((event.target as HTMLInputElement).value)
        },
        async fetchUser(): Promise<void> {
            if (this.emptyInput) return;
            await UserService.fetchUser();
        },
        restartApp(): void {
            this.updateUserInput('');
            this.updateUserData({})
        },
    }
});
</script>

<style scoped>
</style>
