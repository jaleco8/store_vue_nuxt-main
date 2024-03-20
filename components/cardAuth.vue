<template>
  <v-form ref="formAuth">
    <v-card width="auto" class="v-card-style py-4" elevation="16">
      <v-card-item>
        <v-card-title class="text-center">{{ titleCard }}</v-card-title>
      </v-card-item>
      <v-card-text>
        <v-row>
          <v-col cols="12" v-for="(item, i) in dataForm" :key="i">
            <v-text-field
              v-model="item.value"
              :label="item.label"
              variant="outlined"
              :type="item.type"
              :rules="item.rule"
              :error-messages="errorMessages"
            ></v-text-field>
          </v-col>
        </v-row>
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
  </v-form>
  <v-snackbar v-model="snackbar" timeout="2000">
    {{ text }}

    <template v-slot:actions>
      <v-btn color="green" variant="text" @click="snackbar = false">
        Cerrar
      </v-btn>
    </template>
  </v-snackbar>
</template>
<script>
import { authStore } from "~/store/auth.store";
export default {
  name: "CardStore",
  setup() {
    const store = authStore();
    let errorMessages = "";
    return { store, errorMessages };
  },
  data() {
    return {
      isCheck: false,
      snackbar: false,
      text: 'Texto de Inicio',
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
    async onProcess() {
      this.isCheck = true;
      try {
        if (this.store.isRegister) {
          const response = await this.store.sendRegister({
            name: this.dataForm[0].value,
            email: this.dataForm[1].value,
            password: this.dataForm[2].value,
            active: true,
          });
          if (response) {
            this.snackbar = true;
            this.text = "Usuario registrado con éxito";
            this.store.changeStateRegister();
          }
        } else {
          const response = await this.store.sendLogin({
            email: this.dataForm[0].value,
            password: this.dataForm[1].value,
          });
          if (response) {
            this.$router.replace("/users");
          }
        }
      } catch (error) {
        console.error("error");
      } finally {
        this.isCheck = false;
        this.$refs.formAuth.reset();
      }
    },
  },
};
</script>
