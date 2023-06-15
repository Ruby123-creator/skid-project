import { Route ,Routes } from 'react-router-dom';
import './App.css';
import UserForm from './Component/User/UserForm';
import Home from './Component/Home/Home';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<UserForm/>}/>
      <Route path='/home' element={<Home/>}/>

    </Routes>
    </div>
  );
}

export default App;
