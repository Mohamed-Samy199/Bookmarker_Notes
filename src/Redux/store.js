import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./postSlice";

export const store = configureStore({
    reducer : {
        posts : postSlice
    }
})


// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addPost, deletePost, updatePost } from '../../Redux/postSlice';

// const Posts = () => {
    
//     const [title, setTitle] = useState('');
//     const [desc, setDesc] = useState('');
//     const [searchQuery, setSearchQuery] = useState('');
//     const dispatch = useDispatch();
//     const posts = useSelector((state) => state.posts.postStore);

//     const [updateId, setUpdateId] = useState(null);
//     const [updateMode, setUpdateMode] = useState(false);

//     const updateData = (i) => {
//         const data = posts.filter((post) => post.id === i);
//         setTitle(data[0].title);
//         setDesc(data[0].desc);
//         setUpdateId(i);
//         setUpdateMode(true);
//     };

//     const handleAddPost = () => {
//         if (title.trim() !== '' && desc.trim() !== '') {
//             if (updateMode) {
//                 // Update the item
//                 dispatch(updatePost({ id: updateId, title, desc }));
//                 setUpdateId(null);
//                 setUpdateMode(false);
//             } else {
//                 // Add a new item
//                 dispatch(addPost({ id: posts.length + 1, title, desc }));
//             }
//             setTitle('');
//             setDesc('');
//         } else {
//             alert('Fill All Fields');
//         }
//     };

//     // Load data from localStorage on component mount
//     useEffect(() => {
//         const savedPosts = localStorage.getItem('posts');
//         if (savedPosts) {
//             dispatch(addPost(JSON.parse(savedPosts)));
//         }
//     }, []);

//     // Save data to localStorage whenever the postStore state changes
//     useEffect(() => {
//         localStorage.setItem('posts', JSON.stringify(posts));
//     }, [posts]);

//     // search items
//     const filteredPosts = posts.filter((post) =>
//         post.title && post.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     return (
//         <div className="posts my-5">
//             <section className="container shadow-lg pb-3">
//                 <h1 className="my-5 py-4 text-muted border border-1 border-bottom border-0 border-secondary">
//                     Bookmarker <i className="fa-solid fa-bookmark text-danger"></i>
//                 </h1>
//                 <div className="text-center pb-5 content rounded-2">
//                     <h2 className="text-light pt-3">Bookmark your favorite sites</h2>
//                     <h4 className="mt-4 text-muted">Note Name</h4>
//                     <input
//                         type="text"
//                         value={title}
//                         className="form-control w-75 mx-auto my-3"
//                         onChange={(e) => setTitle(e.target.value)}
//                         placeholder="Bookmark Name"
//                     />
//                     <h4 className="mt-4 text-muted">Note Description</h4>
//                     <input
//                         type="text"
//                         value={desc}
//                         className="form-control w-75 mx-auto my-3"
//                         onChange={(e) => setDesc(e.target.value)}
//                         placeholder="Note"
//                     />

//                     <button
//                         className="btn btn-primary rounded-5 px-4 py-2 mt-3"
//                         onClick={handleAddPost}
//                     >
//                         <i className="fa-solid fa-plus"></i>{' '}
//                         {updateMode ? 'Update Item' : 'Add New'}
//                     </button>
//                 </div>
//                 <div>
//                     <input
//                         type="text"
//                         placeholder="search..."
//                         className="form-control w-75 mx-auto my-4 border-dark"
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                     />
//                 </div>
//             </section>
//             <section className="table-responsive my-5 container">
//                 {filteredPosts.length > 0 ? (
//                     <table className="table table-striped">
//                         <thead>
//                             <tr>
//                                 <th scope="col">Index</th>
//                                 <th scope="col">Title</th>
//                                 <th scope="col">visit</th>
//                                 <th scope="col">update</th>
//                                 <th scope="col">delete</th>
//                             </tr>
//                         </thead>
//                         <tbody id="tbody">
//                             {filteredPosts.map((post, idx) => (
//                                 <tr key={idx}>
//                                     <td className="ps-0">{post.id}</td>
//                                     <td className="ps-0">{post.title}</td>
//                                     <td className="ps-0">
//                                         <button>
//                                             <i className="fa-solid fa-eye text-primary fs-3"></i>
//                                         </button>
//                                     </td>
//                                     <td className="ps-3">
//                                         <button onClick={() => updateData(post.id)}>
//                                             <i className="fa-solid fa-pen-to-square text-warning fs-3"></i>
//                                         </button>
//                                     </td>
//                                     <td className="ps-3">
//                                         <button onClick={() => dispatch(deletePost(post.id))}>
//                                             <i className="fa-solid fa-trash text-danger fs-3"></i>
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 ) : (
//                     <p className="text-center h3">No Data Yet.</p>
//                 )}
//             </section>
//         </div>
//     );
// };

// export default Posts;