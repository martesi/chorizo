import { createRouter } from '@tanstack/react-router'
import { routeTree } from '../.config/generated/pages'

const router = createRouter({ routeTree })

export default router

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
