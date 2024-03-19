import { defineStore } from 'pinia'

export const authStore = defineStore('auth', {
    state: () => ({
        isRegister: false
    }),
    getters: {
        register: (state) => state.isRegister
    },
    actions: {
        changeStateRegister() {
            this.isRegister = !this.isRegister ? true : false;
        }
    }
})