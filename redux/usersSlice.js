import { createSlice } from "@reduxjs/toolkit";

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

export const usersSlice = createSlice({
    name: "users",
    initialState: USERS,
    reducers: {
        pushNewMessages: (state, action) => {
            return {...action.payload};
        }
    }
});

export const { pushNewMessages } = usersSlice.actions;

export default usersSlice.reducer;