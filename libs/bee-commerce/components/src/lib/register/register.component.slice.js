import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '@bee-commerce/api';

const initialState = {
  user: {},
  status: 'idle',
  error: null,
};

export const registerUser = createAsyncThunk('user/register', async (user) => {
  return await client.post(`/users`, user);
});

const userRegistrationSlice = createSlice({
  name: 'userRegistration',
  initialState,
  reducers: {},
  extraReducers(builders) {
    builders.addCase(registerUser.pending, (state, action) => {
      state.status = 'idle';
    });
    builders.addCase(registerUser.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload;
    });
    builders.addCase(registerUser.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

const userRegistrationReducer = userRegistrationSlice.reducer;

export const selectUser = (state) => state.user.user;
export default userRegistrationReducer;
