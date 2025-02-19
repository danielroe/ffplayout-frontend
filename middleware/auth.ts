import { useAuth } from '~/stores/auth'

export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuth()
    auth.inspectToken()
    if (!auth.isLogin) {
      return navigateTo('/')
    }
  })
