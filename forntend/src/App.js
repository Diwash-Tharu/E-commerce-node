// // import logo from './logo.svg';
// import './App.css';
// import { Navbar } from './Components/Navbar/Navbar';
// import {BrowserRouter,Route,Routes,route} from "react-router-dom";
// import { ShopCategory } from './Pages/ShopCategory';
// import { Shop } from './Pages/Shop';
// // import product form './Pages/Product'

// function App() {
//   return (
//  <div>
//   <BrowserRouter>
//   <Navbar/>
//   <Routes>
//     <Route path='/' element={<Shop/>}/>
//     <Route path='/mens' element={<ShopCategory category="men"/>}/>
//     <Route path='/womens' element={<ShopCategory category="women"/>}/>
//     <Route path='/kids' element={<ShopCategory category="kids"/>}/>

//     <Route path='/product' element={<Product/>}>
//     {/* setting the product route with the product id */}
//         <Route path= ':productId' element={<Product/>}/>
//     </Route>

//       {/* setting the cart route  */}
//     <Route path='/cart' element={<Cart/>}/>
//     <Route path='login' element={<LoginSignup/>}/>



//   </Routes>
//   </BrowserRouter>
//  </div>
//   );
// }

// export default App;


import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShopCategory } from './Pages/ShopCategory';
import { Shop } from './Pages/Shop';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory category="men" />} />
          <Route path='/womens' element={<ShopCategory category="women" />} />
          <Route path='/kids' element={<ShopCategory category="kids" />} />

          {/* product route with dynamic id */}
          <Route path='/product/:productId' element={<Product />} />

          {/* cart route */}
          <Route path='/cart' element={<Cart/>} />

          {/* login/signup */}
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
