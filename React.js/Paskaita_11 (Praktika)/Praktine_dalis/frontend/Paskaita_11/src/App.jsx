import './App.css'
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound"
import HomePage from './components/HomePage/HomePage';
import BookById from './components/BooksById/BooksById';
import AddNewBookPage from './components/AddNewBookPage/AddNewBookPage';
import NavigationPage from "./components/NavigationPage/NavigationPage"


function App() {

  return (
   <div>
    <NavigationPage/>
<Routes>
  <Route path='/home' element={<HomePage/>}/>
  <Route path='/book/:id' element={<BookById/>}/>
  <Route path='/add-book' element={<AddNewBookPage/>}/>
  <Route path='*' element={<PageNotFound/>}/>
</Routes>
   </div>
  )
}

export default App
