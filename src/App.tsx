import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from "@/providers/ThemeProvider"
import { router } from "@/router"
import "./index.css"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="imatefx-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
