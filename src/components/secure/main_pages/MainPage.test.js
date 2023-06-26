import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import MainPage from "./MainPage";


const renderPage = render(
    <BrowserRouter>
        <MainPage/>)
    </BrowserRouter>
);
test('render MainPage', () => {
    render(
        <BrowserRouter>
            <MainPage/>)
        </BrowserRouter>
    );
});
describe('render text in MainPage', () => {
    it('render text mainPage', function () {
        render(
            <BrowserRouter>
                <MainPage/>
            </BrowserRouter>);
        const text = screen.getByText(/Главная страница/);
    });
    it('render text linkReg', function () {
        render(
            <BrowserRouter>
                <MainPage/>
            </BrowserRouter>);
        const text = screen.getByText(/Регистрация/);
    });
    it('render text linkAuth', function () {
        render(
            <BrowserRouter>
                <MainPage/>
            </BrowserRouter>);
        const text = screen.getByText(/Авторизация/);
    });
})