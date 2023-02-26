import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Allcars from '../Pages/Allcars'

function Allroutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/selectacar" element={<Allcars/>}></Route>
        </Routes>
    </div>
  )
}

export default Allroutes