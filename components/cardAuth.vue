<template>
  <v-card width="auto" class="v-card-style py-4" elevation="16">
    <v-card-item>
      <v-card-title class="text-center">{{ titleCard }}</v-card-title>
    </v-card-item>
    <v-card-text>
      <v-form>
        <v-row>
          <v-col cols="12" v-for="(item, i) in dataForm" :key="i">
            <v-text-field
              v-model="item.value"
              :label="item.label"
              variant="outlined"
              :rules="item.rule"
              :error-messages="errorMessages"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
    <v-card-actions class="justify-center flex-column mx-0 pt-0">
      <div v-if="!isCheck">
        <div class="box-content text-center">
          <v-btn variant="flat" @click="onProcess">{{
            !store.register ? "Ingresar" : "Registrar"
          }}</v-btn>
        </div>
        <div class="box-content text-center my-4">
          <small
            >{{
              store.register ? "Ya estas registrado?" : "No estas registrado?"
            }}
            <v-btn variant="text" color="success" @click="onRegister">{{
              store.register ? "Iniciar Sesión" : "Registrate"
            }}</v-btn></small
          >
        </div>
      </div>
      <div v-else>
        <v-progress-circular
          indeterminate
          color="white"
          :size="30"
        ></v-progress-circular>
      </div>
    </v-card-actions>
  </v-card>
</template>
<script>
import { authStore } from "~/store/auth.store";
export default {
  name: "Card Auth",
  setup() {
    const store = authStore();
    let errorMessages = "";
    return { store, errorMessages };
  },
  data() {
    return {
      isCheck: false,
    };
  },
  props: {
    titleCard: {
      type: String,
      default: "",
    },
    dataForm: null,
  },
  methods: {
    onRegister() {
      this.store.changeStateRegister();
    },
    onProcess() {
      this.isCheck = true;
      setTimeout(() => {
        this.isCheck = false;
      }, 3000);
    },
  },
};
</script>
