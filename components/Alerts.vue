<template>
  <v-sheet
    max-height="400"
    class="custom-scroll"
  >
    <v-alert
      v-for="(log, index) in logs"
      :key="index"
      :color="log.type === 'ok' ? 'success' : 'secondary'"
      class="mt-3 white--text text-capitalize"
    >
      <div class="d-flex justify-space-between">
        <span>
          {{log.newOrder}}
        </span>
        <span>
          {{log.date.toLocaleString()}}
        </span>
      </div>
    </v-alert>
  </v-sheet>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Alerts',
  computed: {
    ...mapGetters({
      logs: 'Cars/logs'
    })
  }
}
</script>

<style scoped>
.custom-scroll {
  overflow: auto;
}
</style>
