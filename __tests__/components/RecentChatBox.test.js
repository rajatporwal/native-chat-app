import React from 'react';
import { render } from '@testing-library/react-native';
import RecentChatBox from '../../components/recentChatBox/RecentChatBox';

// Mocking the useRouter hook from 'expo-router'
jest.mock('expo-router', () => ({
  useRouter: jest.fn(),
}));

// Mocking the NavigationContainer and createNavigator functions from React Navigation
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    push: jest.fn(),
  }),
}));

describe('RecentChatBox', () => {
  it('renders without crashing', () => {
    render(<RecentChatBox details={{ user: { name: 'John Doe' } }} />);
  });

  it('displays the user name', () => {
    const userDetails = { user: { name: 'John Doe' } };
    const { getByText } = render(<RecentChatBox details={userDetails} />);
    const userName = getByText(userDetails.user.name);
    expect(userName).toBeDefined();
  });

  it('displays "Start new conversation" when there are no recent chats', () => {
    const userDetails = { user: { msgs: [] } };
    const { getByText } = render(<RecentChatBox details={userDetails} />);
    const startConversation = getByText('Start new conversation');
    expect(startConversation).toBeDefined();
  });
});
