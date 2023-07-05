import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Daraja from '../view/daraja/Daraja'
import Hodim from '../view/hodim/Hodim'
import Lavozim from '../view/lavozim/Lavozim'

function Router() {
  return <Routes>
    <Route path='/hodimlar' element={<Hodim/>}></Route>
    <Route path='/lavozimlar' element={<Lavozim/>}></Route>
    <Route path='/darajalar' element={<Daraja/>}></Route>
  </Routes>
}

export default Router