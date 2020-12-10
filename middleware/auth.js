export default function (context) {
  // console.log('context: ', context)

  // если пользователь не авторизован (нет токена)
  if(!context.store.getters.checkAuthUser) {
    context.redirect('/admin/auth')
  }
}
