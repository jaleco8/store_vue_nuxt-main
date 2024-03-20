import { defineStore } from "pinia";
import axios from "axios";

const URL_API = "http://127.0.0.1:8000";

export const authStore = defineStore("auth", {
  state: () => ({
    isRegister: false,
  }),
  getters: {
    register: (state) => state.isRegister,
  },
  actions: {
    changeStateRegister() {
      this.isRegister = !this.isRegister ? true : false;
    },
    async sendRegister(body) {
      try {
        const response = await axios.post(`${URL_API}/api/register`, body);
        if (response.status == 201) {
          return true;
        }
      } catch (error) {
        console.log("Error");
      }
    },
    async sendLogin(body) {
      try {
        const response = await axios.post(`${URL_API}/api/login`, body);
        if (response.status == 200) {
          sessionStorage.setItem("token", response.data.token);
          return true;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async listUsers() {
      try {
        const response = await axios.get(`${URL_API}/api/v1/users`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        });
        return {
            current_page: response.data.current_page,
            last_page: response.data.last_page,
            data: response.data.data,
        }
      } catch (error) {
        console.error("Error:", error);
        return null;
      }
    },
  },
});
