<template>
  <v-app>
    <v-main>
      <v-container>
        <v-sheet
          width="1200"
          class="mx-auto"
        >
          <h1 class="my-5">Car application</h1>
          <v-row>
            <v-col cols="4">
              <sidebar />
            </v-col>
            <v-col cols="8">
              <nuxt />
            </v-col>
            <v-col cols="12">
              <v-divider  class="px-0"/>
              <alerts />
            </v-col>
          </v-row>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from '~/components/Sidebar'
import Alerts from '~/components/Alerts'

export default {
  components: {
    Sidebar,
    Alerts
  },
  middleware: 'checkAuth'
}
</script>
