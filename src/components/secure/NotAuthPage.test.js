import { render, screen } from '@testing-library/react';
import NotAuthPage from "./NotAuthPage";

test('render NotAuthPage', () => {
    render(<NotAuthPage />);


});

test('render text AuthPage',()=>{
    render(<NotAuthPage />)
    const text = screen.getByText(/Зона для авторизированных пользователей/);
    const textAuth = screen.getByText(/Авторизация/);
    const textReg = screen.getByText(/Регистрация/);
});