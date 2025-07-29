import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import LayoutSite from "./pages/LayoutSite.jsx";
import Home from "./pages/Home.jsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element={<LayoutSite/>}>
                        <Route index element={<Home/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
