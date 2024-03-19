<template>
  <div class="d-flex align-center justify-center" style="height: 100vh">
    <v-sheet width="400" class="mx-auto">
      <v-form fast-fail @submit.prevent="login">
        <v-text-field
          variant="outlined"
          v-model="username"
          label="Usuario"
        ></v-text-field>

        <v-text-field
          variant="outlined"
          v-model="password"
          label="Contraseña"
        ></v-text-field>
        <a href="#" class="text-body-2 font-weight-regular"
          >Olvidaste tu contraseña?</a
        >

        <v-btn type="submit" color="primary" block class="mt-2"
          >Registrar Nuevo Usuario</v-btn
        >
      </v-form>
      <div class="mt-2">
        <p class="text-body-2">
          Ya estas registrado? <NuxtLink to="/">Iniciar Sesión</NuxtLink>
        </p>
      </div>
    </v-sheet>
  </div>
</template>
  <script lang="ts">
export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {},
  },
};
</script>