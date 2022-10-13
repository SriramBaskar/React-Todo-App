import './App.css';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import SignUp from './components/signUp';
import Login from './components/login';
import Todo from './components/todo';

const App = () => {
  return(
    <div>
      <Router>
        <Routes>
          <Route path='/' element = {<SignUp />}> </Route>
          <Route path='/login' element = {<Login />}> </Route>
          <Route path='/todo' element = {<Todo />}> </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
