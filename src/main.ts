import './styles.css';
import { Game } from './game/Game';

const root = document.getElementById('app');
if (!root) {
  throw new Error('Missing #app root element');
}

// Boot the game once the DOM is ready.
new Game(root);
