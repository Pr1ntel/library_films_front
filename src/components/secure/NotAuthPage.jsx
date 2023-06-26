import React from 'react';

import {Button} from "antd";
import {BrowserRouter as Link} from "react-router-dom";


const NotAuthPage = () => {
    return (
        <div>
            <h1>Зона для авторизированных пользователей</h1>
            <Link to="/register"><Button type="primary">Регистрация</Button> </Link>
            <Link to="/auth"><Button type="primary">Авторизация</Button> </Link>
        </div>
    );
};

export default NotAuthPage;