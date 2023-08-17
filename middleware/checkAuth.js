export default ({ app, redirect, route}) => {
  const user = app.$cookies.get('user')

  const check = /\/login/.test(route.path)

  if (check && user) {
    redirect(app.localePath('/'))
  }

  if (!check && !user) {
    redirect(app.localePath('/login'))
  }
}
