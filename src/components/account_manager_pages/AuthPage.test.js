import { render, screen } from '@testing-library/react';
import AuthPage from "./AuthPage";
import {BrowserRouter} from "react-router-dom";
import React from "react";

test('render AuthPage', () => {
    render(
        <BrowserRouter>
        <AuthPage />
            </BrowserRouter>
    );
});

