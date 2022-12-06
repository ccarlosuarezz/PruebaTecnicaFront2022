import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainWindow from './pages/MainWindow/MainWindow';
import PlacesPage from './pages/PlacesPage/PlacesPage';
import UserAccountPage from './pages/UserAccountPage/UserAccountPage';
import UsersPage from './pages/UsersPage/UsersPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainWindow/>}/>
      <Route path='/users' element={<UsersPage/>}/>
      <Route path='/places' element={<PlacesPage/>}/>
      <Route path='/user-account' element={<UserAccountPage/>}/>
    </Routes>
  );
}

export default App;
