import './App.css';
import SignUp from './components/Signup';
import SignIn from './components/Signin';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <SignUp></SignUp>
     <Routes>
      <Route path ='/Signup' element={SignUp} />
      <Route path ='/Signin' element={SignIn} />
     </Routes>
     </div>
  );
}

export default App;
