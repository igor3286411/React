import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import {Layout} from './componets/Layout'
import {Home} from './componets/Home'
// import {NotFound} from './componets/NotFound'
// import {User} from './componets/User'
// import {Users} from './componets/Users'
// import {CustomLink} from './componets/CustomLink'


function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route element={<User />}/>
        </Route>
      </Routes>


    </div>
  )
}

export default App
