import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import store from '../../redux/store'
import Chat from '../../app/chat/[id]';

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useFocusEffect: jest.fn().mockImplementation((callback) => callback()), // Mock the useFocusEffect hook
}));

jest.mock('expo-router', () => ({
  useRouter: () => ({
    back: jest.fn(),
  }),
  Stack: {
    Screen: jest.fn().mockReturnValue(null),
  },
  useSearchParams: () => {
    const searchParams = new URLSearchParams();
    searchParams.set('id', '8ca0c325-6400-45aa-a77d-fa00e6f74175'); // Add the necessary parameter values for testing
    return searchParams;
  },
}));

jest.mock('expo-font', () => {
  const actualFont = jest.requireActual('expo-font');
  return {
    ...actualFont,
    loadAsync: jest.fn().mockResolvedValue()
  };
});

describe('Chat', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Chat />
      </Provider>
    );
    const chatComponent = getByTestId('chat-component');
    expect(chatComponent).toBeTruthy();
  });

  test('renders chat messages correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Chat />
      </Provider>
    );
    const chatBox = getByTestId('chat-box');
    expect(chatBox).toBeTruthy();
  });

  test('renders chat input correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Chat />
      </Provider>
    );
    const chatInput = getByTestId('chat-input');
    expect(chatInput).toBeTruthy();
  });

  test('handles pressing back button correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Chat />
      </Provider>
    );
    const backButton = getByTestId('back-button');
    fireEvent.press(backButton);
    // Assert any expected behavior after pressing the back button
  });


  test('updates chat messages correctly when input is submitted', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Chat />
      </Provider>
    );
    const chatInput = getByTestId('chat-input');
    const submitButton = getByTestId('send-button');

    // Simulate user input and submission
    fireEvent.changeText(chatInput, 'Hello');
    fireEvent.press(submitButton);

    // Assert the expected behavior after submitting the chat message

  });
});