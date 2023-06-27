import {fireEvent, render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import RegisterPage from "./RegisterPage";
import AuthPage from "./AuthPage";

test('render AuthPage', () => {
    render(
        <BrowserRouter>
            <RegisterPage/>
        </BrowserRouter>
    );
});

describe('render text in AuthPage', () => {
    it('render field username', function () {
        render(
            <BrowserRouter>
                <RegisterPage/>
            </BrowserRouter>
        );
        const text = screen.getByText(/Username/);
    });
    it('render field password', function () {
        render(
            <BrowserRouter>
                <RegisterPage/>
            </BrowserRouter>
        );
        const text = screen.getByText(/Password/);
    });
});

test('test button', () => {
    render(
        <BrowserRouter>
            <RegisterPage/>
        </BrowserRouter>
    );
    const primaryButton = screen.getByRole('button', {name: /Зарегистрироваться/i});
    fireEvent.click(primaryButton)
});

test('test click button register = false', () => {
    render(
        <BrowserRouter>
            <RegisterPage/>
        </BrowserRouter>
    );
    const primaryButton = screen.getByRole('button', {name: /Зарегистрироваться/i});
    fireEvent.click(primaryButton)
});
