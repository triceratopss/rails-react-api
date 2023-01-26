import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blog from './routes/blog.js'
import Blogs from './routes/blogs.js'
import CreateBlog from './routes/createBlog.js'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="create" element={<CreateBlog />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/:id" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
