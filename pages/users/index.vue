<template>
  <v-container class="h-screen" fluid>
    <v-row justify="center">
      <div class="text-center">
        <h3 class="text-white text-decoration-underline">Lista de Usuarios</h3>
      </div>
      <v-col cols="12">
        <v-card width="auto" class="v-card-style">
          <v-card-text>
            <tableStore :desserts="result.data" :page="result.current_page" :pageCount="result.last_page"></tableStore>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { onMounted } from "vue";
import { authStore } from "~/store/auth.store";
const store = authStore();
let result = null;

onMounted(async () => {
  result = await store.listUsers();
  if (result) {
    result.data = result.data.map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        active: user.active,
      };
    });
  }
});
/* export default {
  name: "UsersList",
  setup() {
    const store = authStore();
    let result = ref(null); // Usamos ref para hacerlo reactivo
    
    onMounted(async () => {
      result.value = await store.listUsers();
      console.log('onMounted', result.value);
    });
    console.log('setup', result.value);
    return { store, result };
  },
}; */
</script>
