import './App.css';
import Game from './components/Game';
import StartGame from './components/StartGame';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <StartGame />
  },
  {
    path: '/game',
    element: <Game />
  }
])

function App() {
  return ( 
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
