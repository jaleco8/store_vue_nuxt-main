<template>
  <v-card width="auto" class="v-card-style">
    <v-card-title class="text-center">Iniciar Sesión</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12">
          <v-text-field
            variant="outlined"
            v-model="username"
            label="Usuario"
          ></v-text-field>
          <v-text-field
            variant="outlined"
            v-model="username"
            label="Contraseña"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions class="justify-center flex-column mx-0">
      <div class="box-content text-center"><v-btn variant="flat">Ingresar</v-btn></div>
      <div class="box-content text-center">
        <span
          >No estas registrado?
          <v-btn variant="text" color="success">Registrate</v-btn></span
        >
      </div>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
export default {
  name: "LoginComponent",
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
<style scoped>
.box-content {
  width: 50%;
}
.v-btn {
  width: 80%;
}
</style>
