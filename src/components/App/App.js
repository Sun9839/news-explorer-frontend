import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
function App(props) {
    const [loggedIn,setLoggedIn] = React.useState(false);
    function auth(){
        setLoggedIn(true)
    }
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/'>
                    <Main
                        loggedIn={auth}
                    />
                </Route>
                <ProtectedRoute
                    path='/saved-news'
                    component={SavedNews}
                    loggedIn={loggedIn}
                />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
