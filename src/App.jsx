import { ToastContainer } from "react-toastify"
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./Approutes"
import Navbar from "./components/Navbar"
function App() {
  return (
    <div>
      <BrowserRouter>
          <Navbar/>
          <AppRoutes/>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={1000}
      />
    </div>


  )

}

export default App