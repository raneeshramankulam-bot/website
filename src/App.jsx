import Header from "./Pages/Header"
import { ToastContainer } from "react-toastify"
function App(){
  return(
    <div>
      <Header/>
      <ToastContainer 
        position="top-right"
        autoClose={1000}
        theme="blue"
      />
   </div>
   
  )

}

export default App