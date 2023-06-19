import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import NotFoundPage from "./NotFoundPage";

test('render MainPage', () => {
    render(
        <BrowserRouter>
            <NotFoundPage />
        </BrowserRouter>
    );
    /*expect(screen.getByAltText('Жанр')).toBeInTheDocument();*/
});