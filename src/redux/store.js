import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './customerReducer';








export default configureStore({
    reducer: {
        users: customerReducer,
    }
})