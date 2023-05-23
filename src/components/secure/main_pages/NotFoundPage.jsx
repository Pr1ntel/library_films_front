import React from 'react';
import {Link} from "react-router-dom";


const NotFoundPage = () => {
    return (
        <div>
            <h1>NOT FOUND PAGE</h1>
            <Link to="/secure/home">Вернитесь на главную страницу </Link>
        </div>
    );
};

export default NotFoundPage;