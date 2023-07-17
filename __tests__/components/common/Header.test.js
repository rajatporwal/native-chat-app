import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Header from '../../../components/common/header/Header';

jest.mock('@expo/vector-icons', () => ({
  Ionicons: 'IconComponent',
}));

describe('Header', () => {
  const user = {
    name: 'John Doe',
    profile: 'avatar1',
  };

  const handlePress = jest.fn();

  it('renders without crashing', () => {
    render(<Header user={user} handlePress={handlePress} />);
  });

  it('renders the user name', () => {
    const { queryByText } = render(<Header user={user} handlePress={handlePress} />);
    const nameElement = queryByText(user.name);
    expect(nameElement).not.toBeNull();
  });

  it('renders the back button', () => {
    const { getByTestId } = render(<Header user={user} handlePress={handlePress} />);
    const backButton = getByTestId('back-button');
    expect(backButton).toBeTruthy();
  });

  it('calls the handlePress function when the back button is pressed', () => {
    const { getByTestId } = render(<Header user={user} handlePress={handlePress} />);
    const backButton = getByTestId('back-button');
    fireEvent.press(backButton);
    expect(handlePress).toHaveBeenCalledTimes(1);
  });
});
