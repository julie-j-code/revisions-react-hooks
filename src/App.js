import './App.css';
import FrameworkList from './components/FrameworkList';
import Like from './components/Like';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hooks Practice
        </h1>
        <p>premier exemple</p>
        <Like/>
        <p>deuxième exemple</p>
        <FrameworkList/>
        <p>3ème exemple</p>
        <PostList/>


      </header>
    </div>
  );
}

export default App;
