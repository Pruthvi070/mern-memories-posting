import { createReducer } from '@reduxjs/toolkit';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

const postsReducer = createReducer([], (builder) => {
    builder
        .addCase(FETCH_ALL, (state, action) => action.payload)
        .addCase(CREATE, (state, action) => {
            state.push(action.payload);
        })
        .addCase(UPDATE, (state, action) => {
            const index = state.findIndex(post => post._id === action.payload._id);
            if (index !== -1) state[index] = action.payload;
        })
        .addCase(LIKE, (state, action) => {
            const index = state.findIndex(post => post._id === action.payload._id);
            if (index !== -1) state[index] = action.payload;
        })
        .addCase(DELETE, (state, action) => {
            return state.filter((post) => post._id !== action.payload);
        });
});

export default postsReducer;