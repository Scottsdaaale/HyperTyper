import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';
import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Results from './components/Results';
import Login from './components/Login';
import CreateLogin from './components/CreateLogin';
import Header from './components/Header';
import EditAccount from './components/EditAccount';
// import {Outlet} from 'react-router-dom'

function App() {
  const [currentUser, setCurrentUser]=useState({})
  console.log(currentUser)
  const [currentUserResults, setCurrentUserResults]=useState([])




  return (
    <div id="App">
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Body currentUser={currentUser} setCurrentUserResults={setCurrentUserResults}/>}/>
          <Route path="results" element={<Results currentUser={currentUser}/>}/>
          <Route path="login" element={<Login setCurrentUserResults={setCurrentUserResults}currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
          <Route path="login/create-account" element={<CreateLogin/>}/>
          <Route path="edit-account" element={<EditAccount currentUser={currentUser}/>}/>
        </Routes>
      <Footer/>
      </Router>
      {/* <Outlet context={[currentUser, setCurrentUser]} /> */}
    </div>
  );
}

export default App;




/*     <APP/>
          |                                  
          <Header/>
          |
          <Body/>-----<Timer/>-----<TextDisplay/>
          |                         |
          <Footer/>                <TextInputBox/>

*/

