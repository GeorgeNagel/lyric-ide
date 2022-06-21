import { configureStore } from '@reduxjs/toolkit';

import composeReducer from './features/composeSlice';
import freewriteReducer from './features/freewriteSlice';

export default configureStore({
    reducer: {
        compose: composeReducer,
        freewrite: freewriteReducer,
    },
});
