<template>
  <v-data-table v-model="pages" :items="listUsers" items-per-page="10">
    <template v-slot:bottom>
      <div class="text-center pt-2">
        <v-pagination v-model="pages" :length="countPage"></v-pagination>
      </div>
    </template>
  </v-data-table>
</template>
<script>
export default {
  name: "TableStore",
  props: [
    "page",
    "pageCount",
    "desserts"
  ],
  data() {
    return {
      pages: this.page,
      listUsers: this.desserts,
      countPage: this.pageCount,
    };
  },
};
</script>
