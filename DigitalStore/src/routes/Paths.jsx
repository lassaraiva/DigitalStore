import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsPage";
import PageLayout from "../layouts/PageLayout";
import ProductView from "../pages/ProductView";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/productspage" element={<ProductsPage />} />
                    <Route path="/productview" element={<ProductView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;