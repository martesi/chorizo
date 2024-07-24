import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@unocss/reset/tailwind-compat.css'
import 'uno.css'
import { RouterProvider } from '@tanstack/react-router'
import router from './utils/router'
import store from './utils/store'
import { Provider } from 'jotai'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
