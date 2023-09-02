import {render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import AllFilms from "./AllFilms";
import React from "react";


window.matchMedia = window.matchMedia || function () {
    return {
        matches: false,
        addListener: function () {
        },
        removeListener: function () {
        }
    };
};


test('render AllFilms', () => {
    render(
        <BrowserRouter>
            <AllFilms/>
        </BrowserRouter>
    );
});

describe('render text in AllFilms', () => {
    it('render field nameFilm', function () {
        render(
            <BrowserRouter>
                <AllFilms/>
            </BrowserRouter>
        );
        const text = screen.getByText(/Название/);
    });
    it('render field styleFilm', function () {
        render(
            <BrowserRouter>
                <AllFilms/>
            </BrowserRouter>
        );
        const text = screen.getByText(/Жанр/);
    });
    it('render field releaseYear', function () {
        render(
            <BrowserRouter>
                <AllFilms/>
            </BrowserRouter>
        );
        const text = screen.getByText(/Дата выхода/);
    });
    it('render field duration', function () {
        render(
            <BrowserRouter>
                <AllFilms/>
            </BrowserRouter>
        );
        const text = screen.getByText(/Длительность/);
    });
    it('render field description', function () {
        render(
            <BrowserRouter>
                <AllFilms/>
            </BrowserRouter>
        );
        const text = screen.getByText(/Описание/);
    });
    it('render field oke', function () {
        render(
            <BrowserRouter>
                <AllFilms/>
            </BrowserRouter>
        );
        const text = screen.getByText(/Посмотрю/);
    });
});