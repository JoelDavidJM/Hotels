
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HotelPages from './pages/HotelPages'
import LoginPages from './pages/LoginPages'
import RegisterPages from './pages/RegisterPages'
import UnknownPages from './pages/UnknownPages'
import HotelInfoPages from './pages/HotelInfoPages'
import HeaderShared from './components/shared/HeaderShared'
import ReservationPage from './pages/ReservationPage'
import ProtectecRautes from './pages/ProtectecRautes'


function App() {

  return (
    <div >
        <HeaderShared /> 
        <Routes>
        <Route path='/' element={<HotelPages/>}/>
        <Route path='/login' element={<LoginPages/>}/>
        <Route path='/reservation' element={<ReservationPage/>}/>
        <Route path='/register' element={<RegisterPages/>}/>
        <Route path='/hotel/:id' element={<HotelInfoPages/>}/>
        <Route element={<ProtectecRautes/>}>

        </Route>
        <Route path='*' element={<UnknownPages/>}/>
      </Routes>
      
    </div> 
  )
}

export default App
