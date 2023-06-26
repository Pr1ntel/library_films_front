import {getByText, render, screen, waitForElementToBeRemoved} from '@testing-library/react';
import HomePage from "./HomePage";
import {BrowserRouter} from "react-router-dom";

test('render Homepage', () => {
    render(
        <BrowserRouter>
        <HomePage />
        </BrowserRouter>
    );

    const text = screen.getByText(/HOME PAGE НЕ ПРИДУМАЛ ЧЕ ТУТ БУДЕТ/)
});

