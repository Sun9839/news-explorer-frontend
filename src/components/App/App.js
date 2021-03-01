import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
function App(props) {
    const [loggedIn,setLoggedIn] = React.useState(false);
    const [user, setUserObject] = React.useState({});
    function auth(){
        setLoggedIn(true);
    }
    function exit() {
        setLoggedIn(false);
    }
    return(
        <BrowserRouter>
            <Switch>
                <ProtectedRoute
                    path='/saved-news'
                    component={SavedNews}
                    loggedIn={loggedIn}
                    user={user}
                    exit={exit}
                />
                <Route path='/'>
                    <Main
                        loggedIn={auth}
                        exit={exit}
                    />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
