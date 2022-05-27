import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Outlet />
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
