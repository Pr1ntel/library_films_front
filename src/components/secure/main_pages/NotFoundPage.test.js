import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import NotFoundPage from "./NotFoundPage";


test('render NotFoundPage', () => {
    render(
        <BrowserRouter>
            <NotFoundPage/>
        </BrowserRouter>
    );
});


describe('render text in NotFoundPage', () => {
    it('render not page', function () {
        render(
            <BrowserRouter>
                <NotFoundPage/>
            </BrowserRouter>);
        const text = screen.getByText(/NOT FOUND PAGE/);
    });
    it('render textLink go mainPage', function () {
        render(
            <BrowserRouter>
                <NotFoundPage/>
            </BrowserRouter>);
        const text = screen.getByText(/Вернитесь на главную страницу/);
    });
})

