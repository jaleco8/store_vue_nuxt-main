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
import { authStore } from "~/store/auth.store";
import { fieldRequired, requiredAndLength } from "~/utilities/rules";
export default {
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
          label: "Nombre y Apellido",
          value: "",
          type: "text",
        },
        {
          label: "Correo Electrónico",
          value: "",
          type: "text",
        },
        {
          label: "Contraseña",
          value: "",
          type: "password",
        },
      ],
    };
  },
  methods: {
    login() {},
  },
};
</script>