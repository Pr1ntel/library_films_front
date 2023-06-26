import {fireEvent, render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {waitFor} from "@testing-library/react";
import AddFilms from "./AddFilms";



window.matchMedia = window.matchMedia || function () {
    return {
        matches: false,
        addListener: function () {
        },
        removeListener: function () {
        }
    };
};

test('render AddFilmsPage', () => {
    render(
        <BrowserRouter>
            <AddFilms/>
        </BrowserRouter>
    );
});

describe('render text in AddFilms', () => {
    it('render field nameFilm', function () {
        render(
            <BrowserRouter>
                <AddFilms/>
            </BrowserRouter>);
        const text = screen.getByText(/Название фильма/);
    });
    it('render field styleFilm', function () {
        render(
            <BrowserRouter>
                <AddFilms/>
            </BrowserRouter>);
        const text = screen.getByText(/Жанр фильма/);
    });
    it('render field releaseYear', function () {
        render(
            <BrowserRouter>
                <AddFilms/>
            </BrowserRouter>);
        const text = screen.getByText(/Дата выхода/);
    });
    it('render field duration', function () {
        render(
            <BrowserRouter>
                <AddFilms/>
            </BrowserRouter>);
        const text = screen.getByText(/Длительность\(Минут\)/);
    });
    it('render field description', function () {
        render(
            <BrowserRouter>
                <AddFilms/>
            </BrowserRouter>);
        const text = screen.getByText(/Описание фильма/);
    });


    describe('render text placeholder in AddFilms', () => {
        it('render field nameFilm', function () {
            render(
                <BrowserRouter>
                    <AddFilms/>
                </BrowserRouter>)
            const inputNameFilm = screen.getByPlaceholderText('Название фильма');

            waitFor(() => expect(inputNameFilm).toBeInTheDocument());
        });
        it('render field styleFilm', function () {
            render(
                <BrowserRouter>
                    <AddFilms/>
                </BrowserRouter>)
            const inputStyleFilm = screen.findByPlaceholderText('Жанр фильма');

            waitFor(() => expect(inputStyleFilm).toBeInTheDocument());
        });
        it('render field releaseYear', function () {
            render(
                <BrowserRouter>
                    <AddFilms/>
                </BrowserRouter>)
            const inputReleaseYear = screen.getByPlaceholderText('Дата выхода');

            waitFor(() => expect(inputReleaseYear).toBeInTheDocument());
        });
        it('render field duration', function () {
            render(
                <BrowserRouter>
                    <AddFilms/>
                </BrowserRouter>)
            const inputDuration = screen.findByPlaceholderText('Длительность(Минут)');

            waitFor(() => expect(inputDuration).toBeInTheDocument());
        });
        it('render field description', function () {
            render(
                <BrowserRouter>
                    <AddFilms/>
                </BrowserRouter>)
            const inputDescription = screen.findByPlaceholderText('Описание фильма');

            waitFor(() => expect(inputDescription).toBeInTheDocument());
        });
    });

    test('test button', () => {
        render(
            <BrowserRouter>
                <AddFilms/>
            </BrowserRouter>);
        const primaryButton = screen.getByRole('button', {name: /Добавить/i});
        fireEvent.click(primaryButton)
    });
});
