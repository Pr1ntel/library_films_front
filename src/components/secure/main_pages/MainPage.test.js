import {fireEvent, render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import MainPage from "./MainPage";
import React from "react";

const Button = ({onClick, children}) => (
    <button onClick={onClick}>{children}</button>
)

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

    describe('render and click on button in MainPage', () => {
        it('test button registr', () => {
            const handleClick = jest.fn();
            render(<Button onClick={handleClick}>Регистрация</Button>)
            fireEvent.click(screen.getByText(/Регистрация/i))
            expect(handleClick).toHaveBeenCalledTimes(1)
        });
        it('test button auth', () => {
            const handleClick = jest.fn();
            render(<Button onClick={handleClick}>Авторизация</Button>)
            fireEvent.click(screen.getByText(/Авторизация/i))
            expect(handleClick).toHaveBeenCalledTimes(1)
        });
    })
});
