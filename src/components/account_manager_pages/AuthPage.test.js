import {fireEvent, render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import AuthPage from "./AuthPage";


jest.mock("@auth0/auth0-react");
test('render AuthPage', () => {
    render(
        <BrowserRouter>
            <AuthPage/>
        </BrowserRouter>
    );
});

describe('render text in AuthPage', () => {
    it('render field username', function () {
        render(
            <BrowserRouter>
                <AuthPage/>
            </BrowserRouter>
        );
        const text = screen.getByText(/Username/);
    });
    it('render field password', function () {
        render(
            <BrowserRouter>
                <AuthPage/>
            </BrowserRouter>
        );
        const text = screen.getByText(/Password/);
    });
});

test('test click button login = false', () => {
    render(
        <BrowserRouter>
            <AuthPage/>
        </BrowserRouter>
    );
    const primaryButton = screen.getByRole('button', {name: /Авторизоваться/i});
    fireEvent.click(primaryButton)
});

