import { useState, useContext, createContext, useEffect } from "react";
import { getPostsRequest } from "../api/posts";

const postContext = createContext();

export const usePosts = () => {
  const context = useContext(postContext);
  if (!context) {
    throw new Error("usePost must be used within a TaskContextProvider");
  }

  return context;
};



export const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);
  
  const getPosts = async () => {
    const response = await getPostsRequest();
    setPosts(response.data);
  };

  return (
    <postContext.Provider
      value={{
        posts,
        getPosts,
      }}
    >
      {children}
    </postContext.Provider>
  );
};
