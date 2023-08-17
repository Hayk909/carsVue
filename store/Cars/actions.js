import cars from '~/DB/cars.json'

export default {
  getCars({ commit }) {
    commit('setCars', cars)
  }
}
