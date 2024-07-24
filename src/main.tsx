import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "@unocss/reset/tailwind-compat.css"
import "uno.css"
import { RouterProvider } from "@tanstack/react-router"
import router from "./router.ts"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
