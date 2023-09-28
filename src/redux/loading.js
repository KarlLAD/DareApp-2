import {createSlice} from '@reduxjs/toolkit';

// afficher le modal(true)  ou non (false)
const initialState = false;

export const loading = createSlice({
  name: 'laoding',
  initialState: initialState,
  reducers: {
    updateLoading: (state, action) => {
      // inverse  état de state
      return !state;
    },
  },
});

export const {updateLoading} = loading.actions;

export default loading.reducer;
