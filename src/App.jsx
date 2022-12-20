import { Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Checkout from './containers/Checkout';
import Home from './containers/Home';
import AppContext from './context/AppContext'
import useJsonBooks from './hooks/useJsonBooks'
import Information from './containers/Information'
import React from 'react';
import AuthProvider from './login/Context/authContext';
import Login from './login/Login';
import Checkin from './login/Checkin';
import Novedades from './containers/Novedades'
import Genero from './containers/Genero'
import Categoria from './containers/Categoria'
import Recomendados from './containers/Recomendados'
import './App.css'
import Oferta from './containers/Oferta';
import Footer from './components/Footer';

function App() {

  const jsonBooks = useJsonBooks();

  return (
    <AppContext.Provider value={jsonBooks}>
      
      <AuthProvider>

       <Header/>
       <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/novedades' element={<Novedades/>} />
         <Route path='/genero' element={<Genero/>} />
         <Route path='/categoria' element={<Categoria/>} />
         <Route path='/recomendados' element={<Recomendados/>} />
         <Route path='/oferta' element={<Oferta/>} />

         <Route path='/checkout' element={<Checkout/>} />
         <Route path='/checkout/information' element={<Information/>} />
        </Routes>

      </AuthProvider>

      <AuthProvider>
      <Routes>
         <Route path="/login" element={<Login/>}/>
         <Route path="/checkin" element={<Checkin/>}/>
      </Routes>
      </AuthProvider>

    </AppContext.Provider> 

    )
}

export default App
