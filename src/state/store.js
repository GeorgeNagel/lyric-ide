import { configureStore } from '@reduxjs/toolkit';

import outlineReducer from './features/outlineSlice';
import freewriteReducer from './features/freewriteSlice';

export default configureStore({
    reducer: {
        outline: outlineReducer,
        freewrite: freewriteReducer,
    },
});
