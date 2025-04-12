import { render, screen } from '@testing-library/react';
import AppBanner from '../components/shared/AppBanner';
import userEvent from '@testing-library/user-event';

// Utility function to render the component before each test
const setup = () => render(<AppBanner />);

// Utility to set up user interactions
function setupUserEvent(jsx) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

test('it shows the title in the banner', () => {
  setup();
  // Check if your name appears in the banner
  expect(screen.getByText(/Hi, Iam Thathaji/i)).toBeInTheDocument();
});

test('can download cv when clicked on download cv button', async () => {
  const { user } = setupUserEvent(<AppBanner />);

  const downloadCV = screen.getByText(/Download CV/i);

  expect(downloadCV).toBeInTheDocument();

  const downloadCVButton = downloadCV.parentElement?.parentElement;

  expect(downloadCVButton).toBeInTheDocument();

  await user.click(downloadCVButton);

  // Optional: You can mock download logic here if needed.
  // For now, this just confirms the button interaction works.
});
