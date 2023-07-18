import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { TextInput } from 'react-native';
import TestRenderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import ChatInput from '../../../components/chat/ChatInput'

jest.mock('expo-asset', () => {
    const actualAsset = jest.requireActual('expo-asset');
    return {
      ...actualAsset,
      Asset: {
        ...actualAsset.Asset,
        fromModule: () => ({})
      },
      PlatformUtils: {
        ...actualAsset.PlatformUtils,
        exists: jest.fn().mockReturnValue(true)
      }
    };
  });
  
  jest.mock('expo-font', () => {
    const actualFont = jest.requireActual('expo-font');
    return {
      ...actualFont,
      loadAsync: jest.fn().mockResolvedValue()
    };
  });
  
describe('ChatInput', () => {
  it('should update the text input value when typing', () => {
    const setMsgsMock = jest.fn();
    let component;
    act(() => {
      component = TestRenderer.create(<ChatInput setMsgs={setMsgsMock} id="123" />);
    });
    const textInput = component.root.findByType(TextInput);
    act(() => {
      textInput.props.onChangeText('Hello');
    });
    expect(textInput.props.value).toBe('Hello');
  });
});

describe('ChatInput', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText, getByTestId } = render(<ChatInput setMsgs={() => {}} id={1} />);
    
    const input = getByPlaceholderText('What are you looking for?');
    const sendButton = getByTestId('send-button');
    
    expect(input).toBeTruthy();
    expect(sendButton).toBeTruthy();
  });

  it('updates the text input value correctly', () => {
    const { getByPlaceholderText } = render(<ChatInput setMsgs={() => {}} id={1} />);
    
    const input = getByPlaceholderText('What are you looking for?');
    
    fireEvent.changeText(input, 'Hello');
    
    expect(input.props.value).toBe('Hello');
  });

  it('clears the text input after submitting', () => {
    const { getByPlaceholderText, getByTestId } = render(<ChatInput setMsgs={() => {}} id={1} />);
    
    const input = getByPlaceholderText('What are you looking for?');
    const sendButton = getByTestId('send-button');
    
    fireEvent.changeText(input, 'Hello');
    fireEvent.press(sendButton);
    
    expect(input.props.value).toBe('');
  });

  it('calls handleSubmit when send button is pressed', () => {
    const setMsgsMock = jest.fn();
    const { getByPlaceholderText, getByTestId } = render(<ChatInput setMsgs={setMsgsMock} id={1} />);
    
    const input = getByPlaceholderText('What are you looking for?');
    const sendButton = getByTestId('send-button');
    
    fireEvent.changeText(input, 'Hello');
    fireEvent.press(sendButton);
    
    expect(setMsgsMock).toHaveBeenCalledTimes(1);
  });
  
  it('simulates a reply after submitting', async () => {
    jest.useFakeTimers();
    
    const setMsgsMock = jest.fn();
    const { getByPlaceholderText, getByTestId } = render(<ChatInput setMsgs={setMsgsMock} id={1} />);
    
    const input = getByPlaceholderText('What are you looking for?');
    const sendButton = getByTestId('send-button');
    
    fireEvent.changeText(input, 'Hello');
    fireEvent.press(sendButton);
    
    expect(setMsgsMock).toHaveBeenCalledTimes(1);
    
    jest.runAllTimers();
    
    await waitFor(() => {
      expect(setMsgsMock).toHaveBeenCalledTimes(2);
    });
  });
});