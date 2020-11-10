import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import DetailViewPage from './pages/DetailViewPage';
import { CustomerProvider } from './contexts/CustomerContext';
import { UserProvider } from './contexts/UserContext';
import ProtectedRoute from './routes/HomeRoute';

function App() {



  return (
    <div>
      <UserProvider>
        <CustomerProvider>
          <Switch>
            <Route exact path='/' component={LoginPage} />
            <ProtectedRoute exact path='/detail/:id' component={DetailViewPage} />
            <ProtectedRoute exact path='/home' component={HomePage} />
          </Switch>
        </CustomerProvider>
      </UserProvider>
    </div>
  );
}

export default App;
