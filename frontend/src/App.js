import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './components/homepage';
import AddCategory from './components/addCategory';
import AddPost from './components/addpost';
import Categories from './components/categories';
import CategoryFilter from './components/categoryfilter';
import PostDetail from './components/postDetail';
import PostGrid from './components/postgrid';
import Posts from './components/Posts';
import Highlights from './components/highlights';
import SearchBar from './components/searchbar';

function App() {
    return (
        <Router>
            <Header />
            <SearchBar onSearch={(query) => console.log(query)} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add-category" element={<AddCategory />} />
                <Route path="/add-post" element={<AddPost />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/categoryfilter" element={<CategoryFilter />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/post/:id" element={<PostDetail />} />
                <Route path="/highlights" element={<Highlights />} />
                <Route path="/postgrid" element={<PostGrid />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
