<template>
  <div class="d-flex justify-space-between px-10">
    <detail-image />
    <detail-list />
  </div>
</template>

<script>
import DetailImage from '~/components/Detail/Image'
import DetailList from '~/components/Detail/List'

export default {
  components: {
    DetailImage,
    DetailList
  },
  async validate({ params, store }) {
    const { id } = params

    if (!store.getters['Cars/cars'].length) {
      await store.dispatch('Cars/getCars')
    }

    const cars = store.getters['Cars/cars']

    const car = cars.find(car => car.id === +id)

    if (car) {
      store.commit('Cars/setActiveCar', car)
    }

    return car
  }
}
</script>
