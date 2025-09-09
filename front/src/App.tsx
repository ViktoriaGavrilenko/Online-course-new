import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import LayoutSite from "./pages/LayoutSite.jsx";
import Home from "./pages/Home.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.js";
import OnlineCourses from "./pages/OnlineCourses.js";
import UI_UX_DesignPage from "./pages/UI_UX_DesignPage.js";
import WebDesignPage from "./pages/WebDesignPage.js";
import MobileAppPage from "./pages/MobileAppPage.js";
import GraphicDesignPage from "./pages/GraphicDesignPage.js";
import Front_End_WebPage from "./pages/Front_End_WebPage.js";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element={<LayoutSite/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/login_page" element={<LoginPage/>}/>
                        <Route path="/signUp_page" element={<SignUpPage/>}/>
                        <Route path="/online_courses" element={<OnlineCourses/>}/>
                        <Route path="/webDesignPage" element={<WebDesignPage/>}/>
                        <Route path="/ui_ux_designPage" element={<UI_UX_DesignPage/>}/>
                        <Route path="/mobileAppPage" element={<MobileAppPage/>}/>
                        <Route path="/graphicDesignPage" element={<GraphicDesignPage/>}/>
                        <Route path="/front_end_webPage" element={<Front_End_WebPage/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
