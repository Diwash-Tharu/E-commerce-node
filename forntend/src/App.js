// import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {BrowserRouter,Route,Routes,route} from "react-router-dom";
import { ShopCategory } from './Pages/ShopCategory';
import { Shop } from './Pages/Shop';
// import product form './Pages/Product'

function App() {
  return (
 <div>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Shop/>}/>
    <Route path='/mens' element={<ShopCategory category="men"/>}/>
    <Route path='/womens' element={<ShopCategory category="women"/>}/>
    <Route pathe='/product' element={<shopeCatrgory catrgory="product"/>}/>
    <Route path='/kids' element={<shopeCategory category="kids"/>}/>
    
    <Route path=

  </Routes>
  </BrowserRouter>
 </div>
  );
}

export default App;
