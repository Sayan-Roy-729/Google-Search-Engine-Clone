import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home/Home';
import SearchPage from './pages/searchPage/searchPage';

function App() {
    return (
        <BrowserRouter>
            <div className="app">

                <Switch>
                    <Route path = "/search">
                        <SearchPage />
                    </Route>
                    <Route path = '/' exact component = {Home}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
