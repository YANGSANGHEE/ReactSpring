import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import BoardWrite from './component/BoardWrite';
import BoardRead from './component/BoardRead';
import BoardReWrite from './component/BoardReWrite';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}></Route>
      <Route path='/write' element={<BoardWrite />}></Route>
      <Route path='/read/:boardid' element={<BoardRead />}></Route>
      <Route path='/Rewrite/:boardid' element={<BoardReWrite />}></Route>
    </Routes>
  );
}

export default App;
