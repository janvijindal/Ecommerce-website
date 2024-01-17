import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Shop from './Pages/Shop';
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"
import Footer from './components/Footer/Footer';
import men_banner from "../src/components/Assests/banner_mens.png"
import women_banner from "../src/components/Assests/banner_women.png"
import kids_banner from "../src/components/Assests/banner_kids.png"
function App() {
  return (
    <div className="">
         <BrowserRouter>

         {/* navbar */}
         <Navbar></Navbar>

         {/* routes */}
         <Routes>
              <Route path='/' element={<Shop></Shop>}></Route>

              <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"></ShopCategory>}></Route>
              <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"></ShopCategory>}></Route>
              <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"></ShopCategory>}></Route>

              <Route path='/product' element={<Product></Product>}>
                   <Route path=':productID' element={<Product></Product>}></Route>
              </Route>
             
              <Route path='/cart' element={<Cart></Cart>}></Route>

              <Route path='/login' element={<LoginSignup></LoginSignup>}></Route>
         </Routes>
          <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
