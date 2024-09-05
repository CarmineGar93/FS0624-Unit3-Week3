import { configureStore } from "@reduxjs/toolkit";
import idReducer from "../reducers/id";

export const store = configureStore({
    reducer: idReducer
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch