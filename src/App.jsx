

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutErika } from './components/AboutErika/AboutErika';
import './style.scss'


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<AboutErika />} />
        <Route path='/erika-daniela-jensen' element={<AboutErika />} />
        {/* <Route path='/contact' element={<ContactForm />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
