import React from 'react';
import { render } from '@testing-library/react-native';
import Index from '../../app/index';

jest.mock('expo-router', () => ({
  Redirect: jest.fn(({ href }) => <mock-redirect testID="mock-redirect" href={href} />),
}));


describe('Index', () => {
  it('should render Redirect component with the correct href prop', () => {
    const { queryByTestId } = render(<Index />);
    const mockRedirect = queryByTestId('mock-redirect');

    expect(mockRedirect).toBeTruthy();
    expect(mockRedirect.props.href).toBe('/home');
  });
});

  