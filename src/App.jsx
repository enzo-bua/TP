import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './containers/Home';
import TemplateCompra from './containers/TemplateCompra';
import AppContext from './context/AppContext'
import useJsonBooks from './hooks/useJsonBooks'

function App() {

  const jsonBooks = useJsonBooks();

  return (
    <AppContext.Provider value={jsonBooks}>
      <Layout/>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/login' element={} />
        <Route path='/checkin' element={} /> */}
        <Route path='/templateCompra' element={<TemplateCompra/>} />
        {/* <Route path='' element={} /> */}
        {/* <Route path='' element={} /> */}
      </Routes>
    </AppContext.Provider>
    )
}

export default App
