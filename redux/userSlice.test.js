import usersReducer, { pushNewMessages } from './usersSlice';
const USERS = {
  '8ca0c325-6400-45aa-a77d-fa00e6f74175': {
    name: 'Adrian Doe',
    profile: 'avatar1',
    msgs: [],
  },
  '0881baa2-7cff-495c-bb5a-5060aadb2517': {
    name: 'Rajat Porwal',
    profile: 'avatar2',
    msgs: [],
  },
};

describe('usersSlice', () => {
  let initialState;

  beforeEach(() => {
    initialState = { ...USERS };
  });

  it('should handle pushNewMessages', () => {
    const newMessages = {
      '8ca0c325-6400-45aa-a77d-fa00e6f74175': {
        name: 'Adrian Doe',
        profile: 'avatar1',
        msgs: ['Message 1', 'Message 2'],
      },
      '0881baa2-7cff-495c-bb5a-5060aadb2517': {
        name: 'Rajat Porwal',
        profile: 'avatar2',
        msgs: ['Message 3', 'Message 4'],
      },
    };

    const action = pushNewMessages(newMessages);
    const newState = usersReducer(initialState, action); // Use usersReducer instead of usersSlice.reducer

    expect(newState).toEqual(newMessages);
  });

});


