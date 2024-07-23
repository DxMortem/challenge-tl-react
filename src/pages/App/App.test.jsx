import { describe, expect, it, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '.';

test('demo', () => {
  expect(true).toBe(true);
});

describe('render', () => {
  it('renders the main page', () => {
    render(<App />);
    expect(screen.queryByText('Hola Mundo')).toBeVisible();
    expect(screen.queryByText('Hola Mundo')).toHaveClass('text-red-500');
  });
});
