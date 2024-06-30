import './App.css'
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactsPage from './components/ContactsPage/ContactsPage';
import UsersPage from './components/UsersPage/UsersPage';
import UserProfilePage from './components/UserProfilePage/UserProfilePage';
import NavigationBar from './components/NavigationBar/NavigationBar';

function App() {

  const location = useLocation();
  const isHomePage = location.pathname === `/` && `/home`

  return (
   <div>
      {!isHomePage && <NavigationBar/>}
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/contacts' element={<ContactsPage/>}/>
      <Route path='/users' element={<UsersPage/>}/>
      <Route path='/users/:userId' element={<UserProfilePage/>}/>
    </Routes>
   </div>
  )
}

export default App
