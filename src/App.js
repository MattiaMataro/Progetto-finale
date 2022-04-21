import logo from './logo.svg';
import './App.css';
import Category from './components/category/Category';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap';
import PostsList from './components/posts-list/PostsList';
import CategoryLists from './components/category-lists/CategoryLists';


function App() {
  return (
        <>
          <Routes>
            <Route path="/" element={<CategoryLists />} />
          </Routes>
        </>
  );
}

export default App;
