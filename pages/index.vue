<template>
  <v-sheet
    class="d-flex align-center justify-center"
    height="100%"
  >
    <div class="text-center">
      <h1 class="text-uppercase">this is home page</h1>
      <v-btn
        nuxt
        to="/car/1"
        class="text-capitalize mt-3"
        elevation="0"
      >
        go to default car page
      </v-btn>

      <v-btn
        nuxt
        to="/login"
        class="text-capitalize mt-3"
        elevation="0"
      >
        go to login page
      </v-btn>
    </div>
  </v-sheet>
</template>

<script>
export default {
  async asyncData({ store }) {
    if(!store.getters['Cars/cars'].length){
      await store.dispatch('Cars/getCars')
    }
  }
}
</script>
