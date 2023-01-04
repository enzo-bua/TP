import { Route, Routes } from 'react-router-dom'
import Checkout from './containers/Checkout';
import Home from './containers/Home';
import AppContext from './context/AppContext'
import useJsonBooks from './hooks/useJsonBooks'
import Information from './containers/Information'
import React from 'react';
import AuthProvider from './login/Context/authContext';
import Login from './login/Login';
import Checkin from './login/Checkin';
import Categoria from './containers/Categoria'
import './App.css'
import Layout from './components/Layout';
import Index from './Administrador';
import Productos from './Administrador/Productos';
import Ventas from './Administrador/Ventas';

function App() {

  const jsonBooks = useJsonBooks();

  return (
    <AppContext.Provider value={jsonBooks}>
      <AuthProvider>
        <Routes>
          <Route path='/admin' element={<Index/>} />
          <Route path='/admin/productos' element={<Productos/>} />
          <Route path='/admin/ventas' element={<Ventas/>} />
        </Routes>
      </AuthProvider>
      <Layout>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/categoria' element={<Categoria/>} />


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
      </Layout>
    </AppContext.Provider> 

    )
}

export default App
