import { createSlice } from '@reduxjs/toolkit';

export const outlineSlice = createSlice({
    name: 'counter',
    initialState: {
        text: 'Hello',
    },
    reducers: {
        setText: (state) => {
            state.text = 'e';
        },
    },
});

export const { setText } = outlineSlice.actions;

export const getText = (state) => state.outline.text;

export default outlineSlice.reducer;
