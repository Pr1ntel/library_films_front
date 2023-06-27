import {Card, Button} from 'antd';
import {Link} from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <Card
                style={{
                    width: 300,
                    position: "fixed",
                    top: "45%",
                    left: "45%",
                }}
            >
                <h1>Главная страница</h1>
                <Link to="/register"><Button type="primary">Регистрация</Button> </Link>
                <Link to="/authenticate"><Button type="primary">Авторизация</Button> </Link>
            </Card>
        </div>
    )
};
export default MainPage;