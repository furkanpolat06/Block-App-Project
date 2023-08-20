import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Router } from 'react-router-dom'
import NavBar  from '../components/NavBar'
import  Footer  from '../components/Footer'
import { About } from '../pages/About'
import  Login  from '../pages/Login'
import { Register } from '../pages/Register'
import { PrivateRouter } from './PrivateRouter'
import { Detail } from '../pages/Detail'
import { Dashboard } from '@mui/icons-material'

export const AppRouter = () => {
  return (

    <>
    <NavBar/>
    

        <Routes>
            
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>

            <Route element={<PrivateRouter/>}>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            </Route>
        </Routes>

    <Footer/>
    </>
  )
}