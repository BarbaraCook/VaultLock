// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders VaultLock title', () => {
    render(<App />);
    const titleElement = screen.getByText(/VaultLock/i);
    expect(titleElement).toBeInTheDocument();
});
