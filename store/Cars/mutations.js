export default {
  setCars(state, cars) {
    state.cars = cars
  },
  setActiveCar(state, car) {
    state.activeCar = car
  },
  setLog(state, log) {
    state.logs.push(log)
  }
}
