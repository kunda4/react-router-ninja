import { createBrowserRouter,  Route, createRoutesFromElements, RouterProvider } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import LootLayout from "./layouts/LootLayout"
import HelpLayout from "./layouts/HelpLayout"
import Faq from "./pages/help/Faq"
import Contact from "./pages/help/Contact"
import NotFound from "./pages/NotFound"
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element= {<LootLayout/>}>
        <Route index element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="help" element={<HelpLayout/>}>
          <Route path="faq" element={<Faq/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
    </Route>
    )
  )
  return (

    <RouterProvider router = {router}/>

  )
}

export default App
