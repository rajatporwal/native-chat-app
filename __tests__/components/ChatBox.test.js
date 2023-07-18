import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import ChatBox from '../../components/chatBox/ChatBox';

describe('ChatBox', () => {
  const msgs = [
    { id: 1, msg: 'Hello' },
    { id: 2, msg: 'How are you?' },
  ];

  it('renders the messages correctly', () => {
    const { getByText } = render(<ChatBox msgs={msgs} />);
    expect(getByText('Hello')).toBeTruthy();
    expect(getByText('How are you?')).toBeTruthy();
  });

  it("displays the correct message text", () => {
    const { getByText } = render(<ChatBox msgs={msgs} />);
    msgs.forEach((message) => {
      const messageText = getByText(message.msg);
      expect(messageText).toBeTruthy();
    });
  });

  it('displays checkmark for own messages', () => {
    const { queryAllByTestId } = render(<ChatBox msgs={msgs} />);
    const ownMessages = queryAllByTestId('checkmark-icon');
    const checkmarkIconCount = ownMessages.length;
    expect(checkmarkIconCount).toBeGreaterThanOrEqual(1);
  });

  it('scrolls to end when content size changes', async () => {
    const { getByTestId, rerender } = render(<ChatBox msgs={msgs} />);
    // Simulate a change in content size
    const updatedMsgs = [
      ...msgs,
      { id: 3, msg: 'New message' },
    ];
    rerender(<ChatBox msgs={updatedMsgs} />);
    // Wait for scroll to end
    await waitFor(() => {
      const flatList = getByTestId('chat-flatlist');
      expect(flatList.props.data).toEqual(updatedMsgs);
    });
  });
});
