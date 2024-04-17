import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Home } from './Componets/Home/Home';
import Navbar from './Componets/Navbar/Navbar';
import { Books } from './Pages/Books';
import { Plus } from './Pages/Plus'
import { User } from './Pages/User'
import { Cart } from './Pages/Cart'
import { Notification} from './Pages/Notification'
import { Help } from './Pages/Help'
import { Settings } from './Pages/Settings'
import { Product } from './Pages/Product';
import { Footer } from './Componets/Footer/Footer';
import { SignUp} from './Pages/Login/SignUp';
import { Login } from './Pages/Login/Login'




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/more' element={<Plus/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/notification' element ={<Notification/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
