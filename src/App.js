import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import NotFound from "./containers/NotFound";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="product/:product_Id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />}/>
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
