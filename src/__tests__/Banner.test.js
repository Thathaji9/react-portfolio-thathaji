import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import userEvent from '@testing-library/user-event';

const setup = () =>
  render(
    <MemoryRouter>
      <AppBanner />
    </MemoryRouter>
  );

function setupUserEvent(jsx) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

test('it shows the title in the banner', () => {
  setup();
  expect(
    screen.getByText(/I turn complex systems into interfaces people can actually use/i)
  ).toBeInTheDocument();
});

test('can download cv when clicked on download cv button', async () => {
  const { user } = setupUserEvent(
    <MemoryRouter>
      <AppBanner />
    </MemoryRouter>
  );

  const downloadCV = screen.getByText(/Download CV/i);

  expect(downloadCV).toBeInTheDocument();

  await user.click(downloadCV);
});
