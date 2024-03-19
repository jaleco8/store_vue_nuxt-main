<template>
  <v-container class="h-screen" fluid>
    <v-row class="h-100" justify="center">
      <v-col lg="4" md="4" sm="12" align-self="center">
        <CardAuth
          :title-card="store.register ? 'Registrar Usuario' : 'Iniciar Sesión'"
          :data-form="!store.register ? arrLogin : arrRegister"
        ></CardAuth>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import loginForm from "../components/loginForm.vue";
import { authStore } from "../store/auth.store";
import { fieldRequired, requiredAndLength } from "../utilities/rules";
export default {
  components: { loginForm },
  name: "LoginPage",
  setup() {
    const store = authStore();
    return { store };
  },
  data() {
    return {
      arrLogin: [
        {
          label: "Correo Electrónico",
          value: "",
          rule: [fieldRequired],
        },
        {
          label: "Contraseña",
          value: "",
          rule: [fieldRequired, requiredAndLength],
        },
      ],
      arrRegister: [
        {
          label: "Nombre",
          value: "",
        },
        {
          label: "Apellido",
          value: "",
        },
        {
          label: "Correo Electrónico",
          value: "",
        },
        {
          label: "Contraseña",
          value: "",
        },
      ],
    };
  },
  methods: {
    login() {},
  },
};
</script>