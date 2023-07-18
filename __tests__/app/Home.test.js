import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react-native';
import * as reactRedux from 'react-redux'

import Home from '../../app/home';

const USERS = {
  '8ca0c325-6400-45aa-a77d-fa00e6f74175': {
    name: 'Adrian Doe',
    profile: 'avatar1',
    msgs: []
  },
  '0881baa2-7cff-495c-bb5a-5060aadb2517': {
    name: 'Rajat Porwal',
    profile: 'avatar2',
    msgs: []
  }
}

// Mock the useSelector hook
jest.mock('react-redux', () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn()
}));

// Mock the useSelector function from expo-router
jest.mock('expo-router', () => ({
  useSelector: jest.fn(),
  useRouter: jest.fn(),
  Stack: {
    Screen: jest.fn().mockReturnValue(null),
  },
}));

describe('Home Component', () => {
  describe('test suite', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

    beforeEach(() => {
      useSelectorMock.mockClear()
      useDispatchMock.mockClear()
    })

    it('renders loading indicator when users data is not available', () => {
      // Mock useSelector to return undefined (no users data)
      jest.spyOn(require('expo-router'), 'useSelector').mockReturnValue(undefined);
      const { getByTestId } = render(<Home />);
      const activityIndicator = getByTestId('activity-indicator');

      expect(activityIndicator).toBeTruthy();
    });

    it('renders flat list when users data is available', async () => {
      useSelectorMock.mockReturnValue({ users: USERS })
      const { getByTestId, queryByTestId } = render(<Home />);
      const activityIndicator = queryByTestId('activity-indicator');
      const flatList = getByTestId('flat-list');

      expect(activityIndicator).toBeNull();
      expect(flatList).toBeTruthy();
    });
  });
});