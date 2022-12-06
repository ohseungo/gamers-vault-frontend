import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostsState {
  posts: Post[];
}

interface Post {
  id: string;
  CreatedUser: User;
  content: string;
}

interface User {
  id: string;
  name: string;
}

const initialState = {
  posts: [],
} as PostsState;

const dummyPost = {
  id: "1",
  CreatedUser: {
    id: "friend",
    name: "내 친구",
  },
  content: "추가 테스트",
} as Post;

const dummyPost2 = {
  id: "2",
  CreatedUser: {
    id: "me",
    name: "나",
  },
  content: "추가 테스트 222",
};

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    addPost(state, action: PayloadAction<Post>) {
      return {
        ...state,
        posts: [dummyPost, dummyPost2, ...state.posts],
      };
    },
  },
});

// export const {} = postsSlice.actions;
export default postsSlice.reducer;
