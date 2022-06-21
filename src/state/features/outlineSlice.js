import { createSlice } from '@reduxjs/toolkit';

export const outlineSlice = createSlice({
    name: 'outline',
    initialState: {
        text: 'Hello',
    },
    reducers: {
        setText: (state, action) => {
            state.text = action.payload;
        },
    },
});

export const { setText } = outlineSlice.actions;

export const getText = (state) => state.outline.text;

export default outlineSlice.reducer;
