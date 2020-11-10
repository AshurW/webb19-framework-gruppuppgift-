import './App.css';
import { Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import DetailViewPage from './pages/DetailViewPage';
import { CustomerProvider } from './contexts/CustomerContext';
import { UserProvider } from './contexts/UserContext';
import ProtectedRoute from './routes/ProtectedRoute';
import LoginRoute from './routes/LoginRoute';

function App() {



  return (
    <div>
      <UserProvider>
        <CustomerProvider>
          <Switch>
            <ProtectedRoute path='/detail/:id' component={DetailViewPage} />
            <ProtectedRoute path='/home' component={HomePage} />
            <LoginRoute path='/' component={LoginPage} />
          </Switch>
        </CustomerProvider>
      </UserProvider>
    </div>
  );
}

export default App;
