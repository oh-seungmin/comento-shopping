
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import ProductDetail from "./pages/ProductDetail";
import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";

function App(){
    return(
        <BrowserRouter basename="comento-shopping">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/product/:productId" element={<ProductDetail/>}/>
                <Route path="/Basket" element={<Basket/>}/>
            </Routes>
        </BrowserRouter>
    );
}
//const App = () =><Home />;
export default App;
