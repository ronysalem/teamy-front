
import './App.css';
import HomePage from './components/pages/homepage/homepage';
import Navbar from './components/navbar/navbar.component';
import {BrowserRouter} from 'react-router-dom';
import MainRouter from './MainRouter';

// this class is wrapper for rendering all existing routes
const App =() =>(
<BrowserRouter>
  <MainRouter/>
</BrowserRouter>
)


export default App;
