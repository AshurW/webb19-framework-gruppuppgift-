import './App.css';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import DetailViewPage from './pages/DetailViewPage';

function App() {
  return (
    <div>
     <Switch>
       <Route path='/detail/:id' component={DetailViewPage} />
       <Route path='/home' component={HomePage} />
       <Route path='/' component={LoginPage} />
     </Switch>
    </div>
  );
}

export default App;
