import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TodoList from './TodoList';
import CoinTracker from './CoinTracker';
import MovieList from './MovieList';
// import "./style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode> // 콘솔창에서 랜딩이 여러번 돼서 끔

  <MovieList />
);
