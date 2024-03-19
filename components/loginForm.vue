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
  <!-- <v-row class="h-100">
    <v-col cols="12">
      <v-card class="mx-auto" width="500">
        <template v-slot:title>
          <h4 class="text-center">Ingresar al Sistema</h4>
        </template>

        <v-card-text
          ><v-sheet width="400" class="mx-auto">
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
                >Iniciar Sesión</v-btn
              >
            </v-form>
            <div class="mt-2">
              <p class="text-body-2">
                No estas registrado?
                <NuxtLink to="/register">Registrate</NuxtLink>
              </p>
            </div>
          </v-sheet></v-card-text
        >
      </v-card>
    </v-col>
  </v-row> -->
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
