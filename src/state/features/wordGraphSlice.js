import { createSlice } from '@reduxjs/toolkit';

export const wordGraphSlilce = createSlice({
    name: 'wordGraph',
    initialState: {
        text: 'Hello',
    },
    reducers: {
        setText: (state, action) => {
            state.text = action.payload;
        },
    },
});

export const { setText } = wordGraphSlilce.actions;

export const getText = (state) => state.wordGraph.text;

export default wordGraphSlilce.reducer;
