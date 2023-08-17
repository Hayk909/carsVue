<template>
  <div>
    <h2 class="text-capitalize">
      {{ activeCar.name }}
    </h2>
    <v-img
      :src="activeCar.image"
      width="400px"
    />
  </div>
</template>

<script>
import activeCar from '~/store/Cars/getters'
import { mapGetters } from 'vuex'

export default {
  name: 'Images',
  computed: {
    ...mapGetters({
      activeCar: 'Cars/activeCar'
    })
  }
}
</script>
