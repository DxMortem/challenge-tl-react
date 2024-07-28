import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { fallbackElement, routes } from '../App/routes';

describe('Error Page', () => {
  test('When move to a not valid page should render error page', async () => {
    const notValidRoute = '/any/bad/route';

    const router = createMemoryRouter(routes, {
      initialEntries: [notValidRoute],
    });
    render(
      <RouterProvider router={router} fallbackElement={fallbackElement} />
    );

    expect(screen.getByText(/Oops/i)).toBeInTheDocument();
    expect(screen.getByText(/404: Not Found/i)).toBeInTheDocument();
  });
});
