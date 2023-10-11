import { createBrowserRouter,  Route, createRoutesFromElements, RouterProvider } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import LootLayout from "./layouts/LootLayout"
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element= {<LootLayout/>}>
      <Route index element={<Home/>} />
      <Route path="/about" element={<About/>} />
    </Route>
    )
  )
  return (

    <RouterProvider router = {router}/>

  )
}

export default App
