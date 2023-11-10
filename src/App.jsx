import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import UrlRegister from './pages/UrlRegister'
import ShortUrlPage from './pages/ShortUrlPage'
import Register from './pages/Register'
import Login from './pages/Login'
import Verification from './pages/Verification'
import Info from './pages/Info'
import PrivateRoute from './pages/PrivateRoute'
import ForgotPassword from './pages/ForgotPassword'
import InfoForForgotPage from './pages/InfoForForgotPage'
import VerificationForPassword from './pages/VerificationForPassword';
import SuccessPage from './pages/SuccessPage'
import UpdatePassword from './pages/UpdatePassword'
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route index path='/urlregister' element={ <PrivateRoute element={<UrlRegister/>}/>}/>

      <Route  path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/shortUrl/:urlId' element={<ShortUrlPage/>}/>
      <Route path='/verify' element={<Verification/>}/>
      <Route path='/info' element={<Info/>}/>
      <Route path='/forgot' element={<ForgotPassword/>}/>
      <Route path='/forgotInfo' element={<InfoForForgotPage/>}/>
      <Route path='/verifyPassword' element={<VerificationForPassword/>}/>
      <Route path='/success' element={<SuccessPage/>}/>
      <Route path='/updatePassword' element={<UpdatePassword/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App