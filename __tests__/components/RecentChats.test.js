import React from 'react';
import { render } from '@testing-library/react-native';
import RecentChats from '../../components/recentChats/RecentChats';

// Mocking the useRouter hook from 'expo-router'
jest.mock('expo-router', () => ({
  useRouter: jest.fn(),
}));

describe('RecentChats', () => {
  it('renders without crashing', () => {
    render(<RecentChats details={{ user: { name: 'John Doe' } }} />);
  });

  it('displays the user name', () => {
    const userDetails = { user: { name: 'John Doe' } };
    const { getByText } = render(<RecentChats details={userDetails} />);
    const userName = getByText(userDetails.user.name);
    expect(userName).toBeDefined();
  });

  it('displays "Start new conversation" when there are no recent chats', () => {
    const userDetails = { user: { msgs: [] } };
    const { getByText } = render(<RecentChats details={userDetails} />);
    const startConversation = getByText('Start new conversation');
    expect(startConversation).toBeDefined();
  });
});
