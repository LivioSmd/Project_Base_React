import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Catalogue from "./pages/catalogue/Catalogue";
import Error from "./pages/error/Error"

function Router() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Catalogue/" element={<Catalogue />} />
                <Route path="/*" element={<Error />} />
            </Routes>
        </div>
    )
}

export default Router;