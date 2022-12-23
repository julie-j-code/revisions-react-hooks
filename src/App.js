import './App.css';
import MailContextProvider from './components/contexts/MailContext';
import FrameworkList from './components/FrameworkList';
import KeyCode from './components/Keycode';
import LevelA from './components/LevelA';
import Like from './components/Like';
import Login from './components/Login';
import PostList from './components/PostList';
import Pot from './components/Pot';
import Clickme from './components/Clickme';

function App() {
  return (
    <div className="App">
      <main className="App-header">
        <h1>
          Hooks Practice
        </h1>
        <p>premier exemple - useState</p>
        <Like />
        <p>deuxième exemple - useState</p>
        <FrameworkList />
        <p>3ème exemple -  useEffect, useState</p>
        <PostList />
        <p>4ème exemple : la création de components imbriqués</p>
        <MailContextProvider>
          <LevelA />
        </MailContextProvider>
        <p>5ème exemple : l'écoute d'événements clavier</p>
        <KeyCode />
        <p>6ème exemple : gérer le focus à l'aide de useRef():<br/>application de useEffect, useRef, useState </p>
        <Login />
        <p>7ème exemple : Application de côtisation pour un pot de départ</p>
        <Pot />
        <p>Click Me class component</p>
        <Clickme value={"value to display with bind(this)"}/>
      </main>

    </div>
  );
}

export default App;
