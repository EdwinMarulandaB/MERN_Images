import { HomePage, NotFoundPage, PostFormPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import { PostContextProvider } from "./context/PostContext";

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className="px-10 container m-auto">
        <PostContextProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new" element={<PostFormPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          </PostContextProvider>
      </div>
    </div>
  );
}

export default App;
