import './App.css';
import MailContextProvider from './components/contexts/MailContext';
import FrameworkList from './components/FrameworkList';
import KeyCode from './components/Keycode';
import LevelA from './components/LevelA';
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
        <Like />
        <p>deuxième exemple</p>
        <FrameworkList />
        <p>3ème exemple</p>
        <PostList />
        <p>4ème exemple : la création de components imbriqués</p>
        <MailContextProvider>
          <LevelA />
        </MailContextProvider>
        <p>5ème exemple : l'écoute d'événements clavier</p>
        <KeyCode />

      </header>
    </div>
  );
}

export default App;
