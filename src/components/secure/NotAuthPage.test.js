import { render, screen } from '@testing-library/react';
import NotAuthPage from "./NotAuthPage";
import {BrowserRouter} from "react-router-dom";
import MainPage from "./main_pages/MainPage";

test('render NotAuthPage', () => {
    render(<NotAuthPage />);


});
describe('render text in AuthPage', () => {
    it('render text AuthPage', function () {
        render(<NotAuthPage/>);
        const text = screen.getByText(/Зона для авторизированных пользователей/);
    });
    it('render text linkReg', function () {
        render(<NotAuthPage/>);
        const text = screen.getByText(/Регистрация/);
    });
    it('render text linkAuth', function () {
        render(<NotAuthPage/>);
        const text = screen.getByText(/Авторизация/);
    });
})