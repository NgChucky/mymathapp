import { render, screen } from '@testing-library/react';
import MainContent from './MainContent';

test('renders content with correct formatting', () => {
  render(<MainContent />);
  
  // Test for the presence of specific elements or text
  expect(screen.getByText(/1 .,,,. 1/)).toBeInTheDocument();
  expect(screen.getByText(/2/)).toBeInTheDocument();
  expect(screen.getByText(/π/)).toBeInTheDocument();
  expect(screen.getByText(/1\/2/)).toBeInTheDocument();
});

test('renders content without special characters', () => {
  render(<MainContent />);
  
  // Test for the absence of specific characters or patterns
  expect(screen.queryByText(/[$]/)).toBeNull();
  expect(screen.queryByText(/[/begin{align*}]/)).toBeNull();
  expect(screen.queryByText(/[/end{align*}]/)).toBeNull();
  expect(screen.queryByText(/[$$]/)).toBeNull();
});