import { render, screen } from '@testing-library/react';
import NotAuthPage from "./NotAuthPage";

test('render Homepage', () => {
    render(<NotAuthPage />);
});