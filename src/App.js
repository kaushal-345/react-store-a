//import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter,Route,Routes} from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Products />}></Route>
        <Route path="products" element={<Products />}></Route>
        <Route path="cart" element={<cart />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;