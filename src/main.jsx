import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '@/App'
import Home from '@/views/Home'
import Register from '@/views/auth/Register'
import '@/assets/main.css'
import { route } from '@/routes'
import SportsList from '@/views/sports/SportsList'
import axios from 'axios'
import Login from '@/views/auth/Login'
import ActiveSeasons from '@/views/seasons/ActiveSeasons'
import EditProfile from '@/views/profile/EditProfile'
import ChangePassword from './views/profile/ChangePassword'
import CreateSport from './views/sports/createSport'
import EditSport from './views/sports/editSport'

window.axios = axios

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.axios.defaults.withCredentials = true
window.axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={ route('home') } element={<App />}>
          <Route index element={<Home />} />
          <Route path={ route('register') } element={<Register />} />
          <Route path={ route('login') } element={<Login />} />
          <Route path={ route('profile.edit') } element={<EditProfile />} />
          <Route path={ route('profile.change-password') } element={<ChangePassword />} />
          <Route path={ route('sports.index') } element={<SportsList />} />
          <Route path={ route('sports.create') } element={<CreateSport />} />
          <Route path={ route('sports.edit') } element={<EditSport />} />
          {/* <Route path="/sports/:id/edit" element={<EditSport />} />  mesa coisa que a rota acima */}
          <Route path={ route('seasons.active') } element={<ActiveSeasons />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
