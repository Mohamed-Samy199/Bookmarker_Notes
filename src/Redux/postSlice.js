import { createSlice } from "@reduxjs/toolkit";

// Load data from localStorage if available
const initialState = {
    postStore: localStorage.getItem("posts")
        ? JSON.parse(localStorage.getItem("posts"))
        : [],
};

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: function (state, action) {
            state.postStore.push(action.payload);
            localStorage.setItem("posts", JSON.stringify(state.postStore));
        },
        deletePost: function (state, action) {
            state.postStore = state.postStore.filter(
                (post) => post.id !== action.payload
            );
            localStorage.setItem("posts", JSON.stringify(state.postStore));
        },
        updatePost: function (state, action) {
            state.postStore = state.postStore.map((post) => {
                if (post.id === action.payload.id) {
                    post.title = action.payload.title;
                    post.desc = action.payload.desc;
                }
                return post;
            });
            localStorage.setItem("posts", JSON.stringify(state.postStore));
        }
    },
});

export const { addPost, deletePost, updatePost , displayPost } = postSlice.actions;
export default postSlice.reducer;

// export const postSlice = createSlice({
//     name : "posts",
//     initialState : {
//         postStore : []
//     },
//     reducers : {
//         addPost : function(state , action){
//             state.postStore.push(action.payload)
//         },
//         deletePost : function(state , action){
//             state.postStore = state.postStore.filter(post => post.id !== action.payload)
//         },
//         updatePost : function(state , action){
//             state.postStore.map(post => {
//                 if (post.id === action.payload.id){
//                     post.title = action.payload.title;
//                     post.desc = action.payload.desc;
//                 }
//             })
//         }
//     }
// })

// export const { addPost, deletePost, updatePost } = postSlice.actions
// export default postSlice.reducer