import { gql, useQuery } from "@apollo/client";
import Layout from "./layout/Layout";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import BlogPage from "./components/blog/BlogPage";
import AuthorPage from "./components/author/AuthorPage";
import { Toaster } from "react-hot-toast";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Layout>
      <div>
        <Toaster />
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="blog/:slug" element={<BlogPage />} />
        <Route path="author/:slug" element={<AuthorPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
