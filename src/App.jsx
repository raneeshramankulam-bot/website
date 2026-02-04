import { ToastContainer } from "react-toastify"
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./Approutes"
function App() {
  return (
    <div>
      <BrowserRouter>
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