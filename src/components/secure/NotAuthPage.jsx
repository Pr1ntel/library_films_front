import React from 'react';
import Link from "antd/es/typography/Link";
import {Button} from "antd";

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