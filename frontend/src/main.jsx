import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './scss/style.scss'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { PrivateRoute } from './components/PrivateRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NewTicket from './pages/NewTicket'
import Tickets from './pages/Tickets'
import Ticket from './pages/Ticket'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="new-ticket" element={<PrivateRoute />}>
              <Route index element={<NewTicket />} />
            </Route>
            <Route path="tickets" element={<PrivateRoute />}>
              <Route index element={<Tickets />} />
            </Route>
            <Route path="ticket/:ticketId" element={<PrivateRoute />}>
              <Route index element={<Ticket />} />
            </Route>
            <Route path="*" />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
)
