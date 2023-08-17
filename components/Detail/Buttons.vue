<template>
  <div>
    <v-sheet height="36">
      <p v-if="isVisible"> {{ activeCar.phone }} </p>
    </v-sheet>
    <div>
      <v-btn
        outlined
        elevation="0"
        color="success"
        class="mr-3"
        @click="toggle"
      >
        {{ btnText }}
      </v-btn>
      <v-btn
        elevation="0"
        color="primary"
        @click="open = true"
      >
        Buy
      </v-btn>
    </div>
    <car-modal
      :open-modal="open"
      @close="open = false"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import CarModal from '~/components/Detail/Modal'

export default {
  name: 'Buttons',
  components: {
    CarModal
  },
  data() {
    return {
      isVisible: false,
      open: false
    }
  },
  computed: {
    btnText() {
      return this.isVisible ? 'Hide Phone' : 'Show Phone'
    },
    ...mapGetters({
      activeCar: 'Cars/activeCar'
    })
  },
  methods: {
    toggle() {
      this.isVisible = !this.isVisible
    }
  }
}
</script>
