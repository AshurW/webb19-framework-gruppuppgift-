import './App.css';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import DetailViewPage from './pages/DetailViewPage';
import { CustomerProvider } from './contexts/CustomerContext';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <div>
      <UserProvider>
        <CustomerProvider>
          <Switch>
            <Route path='/detail/:id' component={DetailViewPage} />
            <Route path='/home' component={HomePage} />
            <Route path='/' component={LoginPage} />
          </Switch>
        </CustomerProvider>
      </UserProvider>
    </div>
  );
}

export default App;
