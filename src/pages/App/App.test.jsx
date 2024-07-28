import { describe, expect, it, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '.';
import { BrowserRouter } from 'react-router-dom';

describe('App Page', () => {
  test('Should Render be on Homepage', async () => {
    render(<App />);
    expect(screen.getByText(/Welcome to my TL Challenge/i)).toBeInTheDocument();
  });
});
