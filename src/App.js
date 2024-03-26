import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import AddnewProduct from './component/AddNewProduct/AddNewProduct';
import Detail from './component/Detail/Detail';
import EditProduct from './component/EditProduct/EditProduct';

function App() {
  return (
    <>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/add' element={<AddnewProduct/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/edit/:id' element={<EditProduct/>}/>
      </Routes>
    </>
  );
}

export default App;
