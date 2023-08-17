<template>
  <div>
    <v-list
      class="py-0"
      outlined
    >
      <div
        v-for="(car, index) in cars"
        :key="car.id"
      >
        <v-divider v-if="index" />
        <v-list-item-group>
          <v-list-item
            link
            :to="`/car/${car.id}`"
            class="text-capitalize"
          >
            {{ car.name }}
          </v-list-item>
        </v-list-item-group>
      </div>
    </v-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CarsList',
  computed: {
    ...mapGetters({
      cars: 'Cars/cars'
    })
  },
}
</script>
