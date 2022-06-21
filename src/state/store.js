import { configureStore } from '@reduxjs/toolkit';

import composeReducer from './features/composeSlice';
import freewriteReducer from './features/freewriteSlice';
import wordGraphReducer from './features/wordGraphSlice';

export default configureStore({
    reducer: {
        compose: composeReducer,
        freewrite: freewriteReducer,
        wordGraph: wordGraphReducer,
    },
});
