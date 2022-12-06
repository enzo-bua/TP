import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout';
import Checkout from './containers/Checkout';
import Home from './containers/Home';
import AppContext from './context/AppContext'
import useJsonBooks from './hooks/useJsonBooks'
import Information from './containers/Information'
import React from 'react';
import AuthProvider from './login/Context/authContext';
import Login from './login/Login';
function App() {

  const jsonBooks = useJsonBooks();

  return (
    // <React.Fragment>
    //         <AuthProvider>
    //       <Routes>
    //         <Route path="login" element={<Login/>}/>
    //     </Routes>
    //   </AuthProvider>

     <AppContext.Provider value={jsonBooks}>
       <AuthProvider>
       <Layout/>
       <Routes>
         <Route path="login" element={<Login/>}/>
         <Route path='/' element={<Home/>} />
         <Route path='/checkout' element={<Checkout/>} />
         <Route path='/checkout/information' element={<Information/>} />

      </Routes>
      </AuthProvider>
    </AppContext.Provider> 

    )
}

export default App
