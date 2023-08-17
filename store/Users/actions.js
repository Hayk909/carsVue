import users from '~/DB/users.json'

export default {
  login({ commit }, { email, password }) {
    let status = false

    const [dbUser] = users

    if (email === dbUser.email && password === dbUser.password) {
      commit('setAuth', dbUser)

      this.$cookies.set('user', JSON.stringify(dbUser))

      status = true
    }

    return status
  },
}
