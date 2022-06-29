import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './pages/Home'
import Read from './pages/Read'
import Create from './pages/Create'

function App () {

  return (
    <>
      {/*routing*/}
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/read" element={<Read/>}/>
            <Route path="/create" element={<Create/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
