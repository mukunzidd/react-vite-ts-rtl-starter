import { describe, it } from 'vitest';
import { screen, render } from './test/utils';

import App from './App';

describe('App Render', () => {
  it('prints Hola Mundo', () => {
    // ARRANGE
    render(<App />);
    // ACT - events
    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hola Mundo!');
  });
});
