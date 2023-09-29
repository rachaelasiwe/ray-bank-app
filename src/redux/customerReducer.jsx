import { createSlice } from '@reduxjs/toolkit';

export const customerReducer = createSlice({
    name: 'users',
    initialState: { users: [] },
    reducers: {
        set_users: (state, action) => {
            return { users: action.payload };
        },
        add_user: (state, action) => {
            return {
                users:[action.payload,...state.users]
            }
        }
    }
})

export default customerReducer.reducer;
export const { set_users, add_user } = customerReducer.actions;