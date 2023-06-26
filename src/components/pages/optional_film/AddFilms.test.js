import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import AddFilms from "./AddFilms";


window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};

test('render AddFilmsPage', ()=>{
    render(
        <BrowserRouter>
            <AddFilms />
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

})
