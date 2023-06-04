import React from "react";
import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";

import MainPage from "./components/secure/main_pages/MainPage";
import NotFoundPage from "./components/secure/main_pages/NotFoundPage";
import NotAuthPage from "./components/secure/NotAuthPage";
import SecureLayout from "./components/secure/SecureLayout";
import HomePage from "./components/secure/HomePage";
import AuthPage from "./components/account_manager_pages/AuthPage";
import RegisterPage from "./components/account_manager_pages/RegisterPage";
import AddFilms from "./components/pages/optional_film/AddFilms";
import FindFilms from "./components/pages/optional_film/FindFilms";
import DeleteFilms from "./components/pages/optional_film/DeleteFilms";
import AllFilms from "./components/secure/AllFilms";




const App = () => {
    return (
        <Routes>

            <Route path="/" element={<MainPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/authenticate" element={<AuthPage/>}/>
            <Route path="*" element={<NotAuthPage/>}/>
            <Route path="/secure" element={<SecureLayout/>}>
                <Route path="home" element={<HomePage/>}/>
                <Route path="add-films" element={<AddFilms/>}/>
                <Route path="delete-films" element={<DeleteFilms/>}/>
                <Route path="find-film-by-id" element={<FindFilms/>}/>
                <Route path="all-films" element={<AllFilms/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>

        </Routes>
    )
}

export default App;