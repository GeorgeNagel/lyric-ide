import { createSlice } from '@reduxjs/toolkit';

export const composeSlice = createSlice({
    name: 'compose',
    initialState: {
        text: 'Hello',
    },
    reducers: {
        setText: (state, action) => {
            state.text = action.payload;
        },
    },
});

export const { setText } = composeSlice.actions;

export const getText = (state) => state.compose.text;

export default composeSlice.reducer;
