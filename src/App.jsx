import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout';
import Checkout from './containers/Checkout';
import Home from './containers/Home';
import AppContext from './context/AppContext'
import useJsonBooks from './hooks/useJsonBooks'
import Information from './containers/Information'

function App() {

  const jsonBooks = useJsonBooks();

  return (
    <AppContext.Provider value={jsonBooks}>
      <Layout/>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/login' element={} />
        <Route path='/checkin' element={} /> */}
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/checkout/information' element={<Information/>} />
      </Routes>
    </AppContext.Provider>
    )
}

export default App
