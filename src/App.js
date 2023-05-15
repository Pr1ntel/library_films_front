import React from "react";
import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";

import MainPage from "./components/main_pages/MainPage";
import NotFoundPage from "./components/main_pages/NotFoundPage";
import NotAuthPage from "./components/secure/NotAuthPage";
import SecureLayout from "./components/secure/SecureLayout";
import HomePage from "./components/secure/HomePage";
import AuthPage from "./components/account_manager_pages/AuthPage";
import RegisterPage from "./components/account_manager_pages/RegisterPage";


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/auth" element={<AuthPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>

            <Route path="/secure" element={<SecureLayout/>}>
                <Route path="home" element={<HomePage/>}/>
            </Route>

        </Routes>
    )
}

export default App;