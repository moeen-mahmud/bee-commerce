import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '@bee-commerce/api';

const initialState = {
  access_token: '',
  profile: {},
  loginStatus: 'idle',
  error: null,
};

export const loginUser = createAsyncThunk('user/register', async (user) => {
  const response = await client.post(`/auth/login`, user);
  return response;
});

export const getUserProfile = createAsyncThunk(
  'user/profile',
  async (token) => {
    const response = await client.get(`/auth/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  }
);

const userRegistrationSlice = createSlice({
  name: 'userRegistration',
  initialState,
  reducers: {
    logoutUser(state, action) {
      state.access_token = '';
      state.profile = {};
      localStorage.removeItem('access_token');
    },
    setAccessToken(state, action) {
      state.access_token = action.payload;
    },
  },
  extraReducers(builders) {
    builders.addCase(loginUser.pending, (state, action) => {
      state.loginStatus = 'idle';
    });
    builders.addCase(loginUser.fulfilled, (state, action) => {
      state.loginStatus = 'succeeded';
      state.access_token = action.payload.access_token;
      localStorage.setItem('access_token', action.payload.access_token);
    });
    builders.addCase(loginUser.rejected, (state, action) => {
      state.loginStatus = 'failed';
      state.error = action.error.message;
    });
    builders.addCase(getUserProfile.pending, (state, action) => {
      state.loginStatus = 'idle';
    });
    builders.addCase(getUserProfile.fulfilled, (state, action) => {
      state.loginStatus = 'succeeded';
      state.profile = action.payload;
    });
    builders.addCase(getUserProfile.rejected, (state, action) => {
      state.loginStatus = 'failed';
      state.error = action.error.message;
    });
  },
});

const userLoginReducer = userRegistrationSlice.reducer;
export const userLoginActions = userRegistrationSlice.actions;
export default userLoginReducer;
