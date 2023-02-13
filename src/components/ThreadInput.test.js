/**
 * skenario testing
 *
 * - ThreadInput component
 *   - should handle title typing correctly
 *   - should handle body typing correctly
 *   - should handle category set default option correctly
 *   - should call add thread function when post thread is clicked
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThreadInput from './ThreadInput';

import '@testing-library/jest-dom';

describe('ThreadInput component', () => {
  it('should handle title typing correctly', async () => {
    // Arrange
    render(<ThreadInput addThread={() => {}} />);
    const titleInput = await screen.getByPlaceholderText('Any idea?');

    // Action
    await userEvent.type(titleInput, 'titletest');

    // Assert
    expect(titleInput).toHaveValue('titletest');
  });

  it('should handle body typing correctly', async () => {
    // Arrange
    render(<ThreadInput addThread={() => {}} />);
    const bodyInput = await screen.getByPlaceholderText('What are you thinking?');

    // Action
    await userEvent.type(bodyInput, 'bodytest');

    // Assert
    expect(bodyInput).toHaveValue('bodytest');
  });

  it('should handle category set default option correctly', async () => {
    // Arrange
    render(<ThreadInput addThread={() => {}} />);

    // Assert
    expect(screen.getByRole('option', { name: 'Select a category' }).selected).toBe(true);
  });

  it('should call thread function when post thread button is clicked', async () => {
    // Arrange
    const mockThread = jest.fn();
    render(<ThreadInput addThread={mockThread} />);
    const titleInput = await screen.getByPlaceholderText('Any idea?');
    await userEvent.type(titleInput, 'titletest');
    const bodyInput = await screen.getByPlaceholderText('What are you thinking?');
    await userEvent.type(bodyInput, 'bodytest');
    const categoryInput = await screen.getByPlaceholderText('Select an option');
    await userEvent.type(categoryInput, 'categorytest');
    const postThreadButton = await screen.getByRole('button', { name: 'Post Thread' });

    // Action
    await userEvent.click(postThreadButton);

    // Assert
    expect(mockThread).toHaveBeenCalledWith(
      'titletest',
      'bodytest',
      '',
    );
  });
});
