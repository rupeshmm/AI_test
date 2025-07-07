import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SofrEditor from './pages/SofrEditor';
import RateCards from './pages/RateCards';
import Login from './components/Auth/Login';
import Navbar from './components/Shared/Navbar';
import './styles/main.scss';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/sofr-editor" component={SofrEditor} />
                    <Route path="/rate-cards" component={RateCards} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;