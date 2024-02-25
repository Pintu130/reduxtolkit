import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../TodoFolder/todoSlice';
import updateSlice from '../TodoFolder/updateSlice';
export const store = configureStore({
    reducer: {
        todo: todoSlice,
        edit: updateSlice
    }
});
