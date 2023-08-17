<template>
  <div>
    <div>
      <h3 class="text-capitalize mb-5">
        Find your car
      </h3>
      <v-text-field
        dense
        outlined
        hide-details
        class="rounded-lg"
        label="Search"
      />
    </div>
    <v-divider class="my-5" />
    <cars-list />
  </div>
</template>

<script>
import CarsList from '~/components/CarsList'

export default {
  name: 'Sidebar',
  components: {
    CarsList
  }
}
</script>
