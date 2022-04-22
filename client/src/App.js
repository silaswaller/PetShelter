import AllPets from './components/AllPets';
import NewPet from './components/NewPet';
import OnePet from './components/OnePet';
import EditPet from './components/EditPet';
import axios from 'axios';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<AllPets/>} path="/" />
          <Route element={<NewPet/>} path="/new" />
          <Route element={<OnePet/>} path="/pet/:id" />
          <Route element={<EditPet/>} path="/pet/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
