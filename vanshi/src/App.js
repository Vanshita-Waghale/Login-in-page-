import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { BrowserRouter,Router,Routes,Route} from "react-router-dom";


function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        
         <Route path="/Login" element={<Login/>}/>
         <Route path="/Register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
