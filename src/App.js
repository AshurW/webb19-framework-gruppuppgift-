import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
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
            <Route exact path='/' component={LoginPage} />
            {localStorage.getItem('loginToken') ? (
              <>
                <Route exact path='/detail/:id' component={DetailViewPage} />
                <Route exact path='/home' component={HomePage} />
              </>
            ) : <Redirect to='/' />}
          </Switch>
        </CustomerProvider>
      </UserProvider>
    </div>
  );
}

export default App;
