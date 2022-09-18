import './App.css';
import PostList from './components/PostList/PostList';
import postList from './db/posts.json';

function App() {
  return (
    <>
    <h2 className='header-title'>
      "Котик на диете - несчастный котик"
    </h2>
    <PostList postList={postList}/>
    </>
  );
}

export default App;
