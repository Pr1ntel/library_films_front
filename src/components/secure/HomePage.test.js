import {render, screen} from '@testing-library/react';
import HomePage from "./HomePage";
import {BrowserRouter} from "react-router-dom";

const renderPage = render(
    <BrowserRouter>
        <HomePage/>
    </BrowserRouter>
);

test('render HomePage', () => {
    renderPage;
});

test('render text HomePage', () => {
    render(<HomePage/>)
    const text = screen.getByText(/HOME PAGE НЕ ПРИДУМАЛ ЧЕ ТУТ БУДЕТ/);
})
