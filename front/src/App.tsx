import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import LayoutSite from "./pages/LayoutSite.jsx";
import Home from "./pages/Home.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.js";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element={<LayoutSite/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/login_page" element={<LoginPage/>}/>
                        <Route path="/signUp_page" element={<SignUpPage/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
