import { createSlice } from '@reduxjs/toolkit';

export const updateSlice = createSlice({
    name: 'edit',
    initialState: {
        isEdit: ''
    },
    reducers: {
        setEdititem: (state, action) => {
            state.isEdit = action.payload;
        },
    }
})

export const { setEdititem } = updateSlice.actions;
export default updateSlice.reducer