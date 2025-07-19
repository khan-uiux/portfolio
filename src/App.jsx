import Home from "./Pages/Home"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './Index.css'
import { useContext } from "react";
import { PortfolioContext } from "./Context/Context";

function App() {

  const {theme} = useContext(PortfolioContext)

  return (
    <>
      <div className={`${theme === 'dark' ? 'light' : 'dark'}`}>
        <ToastContainer position="top-right" autoClose={3000} />
        <Home />
      </div>
    </>
  )
}

export default App