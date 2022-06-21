import { createSlice } from '@reduxjs/toolkit';

export const freewriteSlilce = createSlice({
    name: 'freewrite',
    initialState: {
        text: 'Hello',
    },
    reducers: {
        setText: (state, action) => {
            state.text = action.payload;
        },
    },
});

export const { setText } = freewriteSlilce.actions;

export const getText = (state) => state.freewrite.text;

export default freewriteSlilce.reducer;
