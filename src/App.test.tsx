import { describe, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { screen, render } from './test/utils';

import { WrappedApp, App } from './App';

describe('App Render', () => {
  it('prints Hola Mundo', async () => {
    // ARRANGE
    render(<WrappedApp />);
    // ACT - events
    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hola Mundo!');
  });
  it('renders NotFound Path if invalid path', async () => {
    // ARRANGE&ACT: go to a specific path /w memory router
    render(
      <MemoryRouter initialEntries={['/purplehippo']}>
        <App />
      </MemoryRouter>
    );
    // EXPECT
    expect(screen.getByRole('link'));
    expect(screen.getAllByText('Go Home'));
  });
});
