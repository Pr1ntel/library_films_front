import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import MainPage from "./MainPage";

test('render MainPage', () => {
    render(
        <BrowserRouter>
        <MainPage />)
        </BrowserRouter>
    );
});