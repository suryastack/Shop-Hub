import {Route,Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import CartPage from './pages/CartPage'

const App = () => {
  return (
    <div className='bg-(--c1) min-h-screen w-full px-7 py-5'>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path="/search/:query" element={<SearchPage />} />
        <Route path='/cart' element={<CartPage />}/>
      </Routes>   
    </div>
  )
}

export default App
